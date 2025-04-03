'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Post } from '@/lib/types';
import { DevlogSidebar } from '@/components/DevlogSidebar';
import { DevlogContent } from '@/components/DevlogContent';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DevlogPage() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadPosts = async () => {
			const response = await fetch('/api/posts');
			const allPosts = await response.json();
			setPosts(allPosts);
			if (allPosts.length > 0) {
				setSelectedPost(allPosts[0]);
			}
			setIsLoading(false);
		};

		loadPosts();
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-background flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8"
				>
					<DevlogSidebar
						posts={posts}
						selectedPost={selectedPost}
						onPostSelect={setSelectedPost}
					/>
					<AnimatePresence mode="wait">
						{selectedPost && (
							<DevlogContent
								key={selectedPost.slug}
								post={selectedPost}
							/>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
			<ThemeToggle />
		</div>
	);
}
