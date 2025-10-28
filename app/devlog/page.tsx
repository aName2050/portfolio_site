'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Post } from '@/lib/types';

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

	return <div className="min-h-screen bg-background">Coming soon...</div>;
}
