'use client';

import { motion } from 'framer-motion';
import { Code, Bot, Flame, Crown } from 'lucide-react';

const highlights = [
	{
		icon: <Bot className="w-12 h-12" />,
		title: 'FIRST Robotics',
		description: 'Competing in innovation',
	},
	{
		icon: <Flame className="w-12 h-12" />,
		title: 'Cross Country & Track',
		description: 'Going the distance',
	},
	{
		icon: <Code className="w-12 h-12" />,
		title: 'Programming',
		description: 'Building the future',
	},
	{
		icon: <Crown className="w-12 h-12" />,
		title: 'Leadership',
		description: 'Making an impact',
	},
];

export function LoadingScreen() {
	return (
		<div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
			<div className="w-full max-w-2xl">
				{highlights.map((highlight, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{
							duration: 0.8,
							delay: index * 1.2,
							ease: [0.43, 0.13, 0.23, 0.96],
						}}
						className="flex items-center gap-6 text-white mb-8"
					>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								delay: index * 1.2 + 0.3,
								type: 'spring',
								stiffness: 200,
								damping: 15,
							}}
							className="p-4 bg-orange-500 rounded-2xl"
						>
							{highlight.icon}
						</motion.div>
						<div>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 1.2 + 0.5 }}
								className="text-2xl font-bold mb-1"
							>
								{highlight.title}
							</motion.h2>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.7 }}
								transition={{ delay: index * 1.2 + 0.7 }}
								className="text-gray-400"
							>
								{highlight.description}
							</motion.p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
