'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';
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
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const headers =
			contentRef.current?.querySelectorAll('h1, h2, h3') || [];
		headers.forEach(header => observer.observe(header));

		return () => observer.disconnect();
	}, [post]);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
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
						{format(new Date(post.date), 'MMMM d, yyyy')}
					</p>
					<div className="prose prose-orange dark:prose-invert max-w-none">
						<Markdown>{post.content}</Markdown>
					</div>
				</div>

				<div className="lg:block hidden">
					<div className="sticky top-8">
						<h3 className="text-lg font-semibold mb-4 text-card-foreground">
							Table of Contents
						</h3>
						<ScrollArea className="h-[calc(100vh-16rem)]">
							<nav className="space-y-2">
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
