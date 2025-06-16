'use client';

import { motion } from 'framer-motion';
import { Github, Globe, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
	{
		id: 1,
		name: 'GigaScript',
		shortDescription: 'A pseudocode language that actually runs',
		description: 'A custom programming language where the syntax is as close to pseudocode, where you can pretty much write simple English statements that can be run.',
		technologies: ['TypeScript', 'Node.js'],
		links: {
			github: 'https://github.com/aname2050/gigascript',
		},
	},
	{
		id: 2,
		name: 'Compacter',
		shortDescription: 'A Discord moderation bot',
		description: 'A multipurpose Discord bot with the goal of simplifying the moderation of Discord servers, taking much of the stress and load of human moderators.',
		technologies: ['Express', 'TypeScript', 'MongoDB', 'discord.js', 'Discord API'],
		links: {
			github: 'https://github.com/aname2050/compacter',
			discord: 'https://discord.gg/DxZu7Ysq3y',
		},
	},
	{
		id: 3,
		name: 'Neural Network',
		shortDescription: 'A simple neural network for recognizing hand-drawn digits',
		description: 'A neural network driven only on mathematical formulas extracted from the Perceptron model. This model can identify hand drawn digits (0-9). The model needs to be trained each time the project is first run.',
		technologies: ['TypeScript'],
		links: {
			github: 'https://github.com/aname2050/typescript-neural-network',
		},
	},
	{
		id: 4,
		name: 'Wi-Fi RC Car',
		shortDescription: 'A RC Car powered by a Raspberry Pi Pico W over Wi-Fi',
		description: 'A RC Car powered by a Raspberry Pi Pico W and Wukong2040 breakout board to power 4 DC motors, the drivetrain.',
		technologies: ['MicroPython', 'Raspberry Pi Pico W'],
		links: {},
	},
	// {
	// 	id: 5,
	// 	name: 'OS',
	// 	shortDescription: 'A RC Car powered by a Raspberry Pi Pico W over Wi-Fi',
	// 	description: 'A RC Car powered by a Raspberry Pi Pico W and Wukong2040 breakout board to power 4 DC motors, the drivetrain.',
	// 	technologies: ['MicroPython', 'Raspberry Pi Pico W'],
	// 	links: {},
	// },
];

export function ProjectList({ onProjectClick }: { onProjectClick?: (project: any) => void }) {
	// TODO: update UI

	return (
		<div className="space-y-4">
			{projects.map(project => (
				<motion.button
					key={project.id}
					onClick={() => onProjectClick?.(project)}
					className="block w-full text-left p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<h3 className="font-semibold dark:text-white text-[1.1rem]">{project.name}</h3>
					<p className="text-gray-600 dark:text-gray-400 text-[0.9rem]">{project.shortDescription}</p>
				</motion.button>
			))}
		</div>
	);
}

ProjectList.Detail = function ProjectDetail({ project }: { project: any }) {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold mb-2 dark:text-white">{project.name}</h2>
				<p className="text-gray-600 dark:text-gray-400 text-lg">{project.description}</p>
			</div>

			<div>
				<h3 className="text-xl font-semibold mb-2 dark:text-white">Technologies</h3>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech: string) => (
						<span key={tech} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 rounded-full text-sm">
							{tech}
						</span>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-xl font-semibold mb-2 dark:text-white">Links</h3>
				<div className="flex flex-wrap gap-4">
					{project.links.github && (
						<motion.a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Github className="w-5 h-5" />
							GitHub
						</motion.a>
					)}
					{project.links.live && (
						<motion.a
							href={project.links.live}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Globe className="w-5 h-5" />
							Live Site
						</motion.a>
					)}
					{Object.entries(project.links).map(([key, value]) => {
						if (key !== 'github' && key !== 'live') {
							return (
								<motion.a
									key={key}
									href={value as string}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<ExternalLink className="w-5 h-5" />
									{key
										.split('_')
										.map(word => word.charAt(0).toUpperCase() + word.slice(1))
										.join(' ')}
								</motion.a>
							);
						}
						return null;
					})}
				</div>
			</div>
		</div>
	);
};
