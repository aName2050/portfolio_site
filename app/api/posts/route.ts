import { NextResponse } from 'next/server';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { Post } from '@/lib/types';

const postsDirectory = path.join(process.cwd(), 'content/devlog');

async function getAllPosts(): Promise<Post[]> {
	if (!fs.existsSync(postsDirectory)) {
		fs.mkdirSync(postsDirectory, { recursive: true });
	}

	const fileNames = fs.readdirSync(postsDirectory);
	const posts = fileNames
		.filter(fileName => fileName.endsWith('.md'))
		.map(fileName => {
			const slug = fileName.replace(/\.md$/, '');
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, 'utf8');
			const { data, content } = matter(fileContents);

			return {
				slug,
				title: data.title,
				date: data.date,
				content,
			};
		})
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);

	return posts;
}

export async function GET() {
	try {
		const posts = await getAllPosts();
		return NextResponse.json(posts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch posts' },
			{ status: 500 }
		);
	}
}
