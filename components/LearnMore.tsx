'use client';

import { motion } from 'framer-motion';
import { FileText, MessageCircleHeart, Trophy, Wrench } from 'lucide-react';

const experience = [
	{
		title: 'Programmer',
		organization: 'OGHS Robotics (FRC Team #10059)',
		period: '2024 - 2025',
		startDate: '2024-10-02',
	},
	{
		title: 'IT Specialist',
		organization: 'Advanced Science Research Club (OGHS ASR)',
		period: '2025 - Present',
		startDate: '2025-01-01',
	},
];

const achievements = [
	{
		title: 'Gracious Professionalism Award',
		event: 'FRC SVR 2025 Reefscape presented by HaaS',
		date: '2024-10-02',
	},
];

export function LearnMore({
	onSectionExpand,
}: {
	onSectionExpand: (
		section: 'experience' | 'achievements' | 'testimonials' | 'devlog'
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
			<motion.button
				onClick={() => onSectionExpand('devlog')}
				className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<FileText className="w-6 h-6" />
				<span className="dark:text-white">Devlog</span>
			</motion.button>
		</div>
	);
}

LearnMore.Detail = function Detail({
	section,
}: {
	section: 'experience' | 'achievements' | 'testimonials' | 'devlog';
}) {
	return (
		<div className="space-y-6">
			<h2 className="text-2x1 font-bold dark:text-white">{section}</h2>
		</div>
	);
};
