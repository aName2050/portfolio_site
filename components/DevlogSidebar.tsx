'use client';

import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Post } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DevlogSidebarProps {
	posts: Post[];
	selectedPost: Post | null;
	onPostSelect: (post: Post) => void;
}

export function DevlogSidebar({
	posts,
	selectedPost,
	onPostSelect,
}: DevlogSidebarProps) {
	return (
		<div className="bg-card rounded-lg shadow-lg p-4 ">
			<h2 className="text-xl font-bold mb-4 text-card-foreground">
				Devlog
			</h2>
			<ScrollArea className="h-[calc(100vh-12rem)]">
				<div className="space-y-2 flex items-center flex-wrap">
					{posts.map(post => (
						<motion.button
							key={post.slug}
							onClick={() => onPostSelect(post)}
							className={`w-[90%] text-left p-3 rounded-[16px] transition-colors ${
								selectedPost?.slug === post.slug
									? 'bg-orange-500 text-white'
									: 'hover:bg-accent text-card-foreground'
							}`}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<h3 className="font-medium">{post.title}</h3>
							<p className="text-sm opacity-80">
								{format(new Date(post.date), 'MMMM d, yyyy')}
							</p>
						</motion.button>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
