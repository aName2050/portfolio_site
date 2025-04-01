'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MessageCircleHeart, Trophy, Wrench } from 'lucide-react';
import { Experience } from './Experience';
import { Achievements } from './Achievements';
import { Testimonials } from './Testimonials';

export function LearnMore({
	onSectionExpand,
}: {
	onSectionExpand: (
		section: 'experience' | 'achievements' | 'testimonials'
	) => void;
}) {
	return (
		<div className="flex flex-wrap gap-4">
			<motion.button
				onClick={() => onSectionExpand('experience')}
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<Wrench className="w-6 h-6" />
				<span className="dark:text-white">Experience</span>
			</motion.button>
			<motion.button
				onClick={() => onSectionExpand('achievements')}
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<Trophy className="w-6 h-6" />
				<span className="dark:text-white">Achievements</span>
			</motion.button>
			<motion.button
				onClick={() => onSectionExpand('testimonials')}
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<MessageCircleHeart className="w-6 h-6" />
				<span className="dark:text-white">What others say</span>
			</motion.button>
			<motion.a
				href="/devlog"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<ExternalLink className="w-6 h-6" />
				<span className="dark:text-white">Devlog</span>
			</motion.a>
		</div>
	);
}

LearnMore.Detail = function Detail({
	section,
}: {
	section: 'experience' | 'achievements' | 'testimonials';
}) {
	return (
		<div className="space-y-6">
			<h2 className="text-3x1 font-bold dark:text-white">
				{section == 'experience'
					? 'Experience'
					: section == 'achievements'
					? 'Achievements'
					: section == 'testimonials'
					? 'Testimonials'
					: section == 'devlog'
					? 'Devlog'
					: '404'}
			</h2>
			<div className="space-y-4">
				{section == 'experience' ? (
					<Experience />
				) : section == 'achievements' ? (
					<Achievements />
				) : section == 'testimonials' ? (
					<Testimonials />
				) : (
					<p>
						Woah! You broke my portfolio website. Send me a
						screenshot of this message to claim a <i>cool</i> prize.
					</p>
				)}
			</div>
		</div>
	);
};
