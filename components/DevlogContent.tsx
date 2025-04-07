'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import { Post } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DevlogContentProps {
	post: Post;
}

interface TableOfContentsItem {
	id: string;
	title: string;
	level: number;
}

export function DevlogContent({ post }: DevlogContentProps) {
	const contentRef = useRef<HTMLDivElement>(null);
	const [toc, setToc] = useState<TableOfContentsItem[]>([]);
	const [activeSection, setActiveSection] = useState<string>('');

	useEffect(() => {
		if (contentRef.current) {
			const headers = contentRef.current.querySelectorAll('h1, h2, h3');
			const items: TableOfContentsItem[] = [];

			headers.forEach(header => {
				const level = parseInt(header.tagName[1]);
				const title = header.textContent || '';
				const id = title.toLowerCase().replace(/\s+/g, '-');
				header.id = id;
				items.push({ id, title, level });
			});

			setToc(items);
		}
	}, [post]);

	useEffect(() => {
		const handleScroll = () => {
			if (!contentRef.current) return;

			const sections = Array.from(
				contentRef.current.querySelectorAll('h1, h2, h3')
			) as HTMLElement[];

			const scrollPosition = window.scrollY + 200;

			let currentSectionID = '';
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				if (section.offsetTop <= scrollPosition) {
					currentSectionID = section.id;
				} else break;
			}

			setActiveSection(currentSectionID);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [post]);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 50;
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});

			setTimeout(() => {
				setActiveSection(id);
			}, 500);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			className="bg-card rounded-lg shadow-lg p-8"
		>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr,200px] gap-8">
				<div ref={contentRef}>
					<h1 className="text-3xl font-bold mb-2 text-card-foreground">
						{post.title}
					</h1>
					<p className="text-muted-foreground mb-6">
						{new Intl.DateTimeFormat('en-US', {
							timeZone: 'UTC',
						}).format(new Date(post.date))}{' '}
						| {post.author}
					</p>
					<div className="prose prose-orange dark:prose-invert max-w-none">
						<Markdown>{post.content}</Markdown>
					</div>
				</div>

				<div className="lg:block hidden">
					<div className="sticky top-8">
						<h3 className="text-lg font-semibold mb-4 text-card-foreground">
							On this page
						</h3>
						<ScrollArea className="h-[calc(100vh-10rem)]">
							<nav className="space-y-4">
								{toc.map(item => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`block w-full text-left text-sm transition-colors ${
											activeSection === item.id
												? 'text-orange-500 font-medium'
												: 'text-muted-foreground hover:text-card-foreground'
										}`}
										style={{
											paddingLeft: `${
												(item.level - 1) * 1
											}rem`,
											marginBottom: '1rem',
										}}
									>
										{item.title}
									</button>
								))}
							</nav>
						</ScrollArea>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
