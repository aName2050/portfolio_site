'use client';

import { motion } from 'framer-motion';
import { Github, Globe, ExternalLink, MessageSquare } from 'lucide-react';

const projects = [
	{
		id: 1,
		name: 'GigaScript',
		shortDescription: 'A pseudocode language that actually runs',
		description:
			'A custom programming language where the syntax is as close to pseudocode, where you can pretty much write simple English statements that can be run.',
		technologies: ['TypeScript', 'Node.js'],
		links: {
			github: 'https://github.com/aname2050/gigascript',
		},
	},
	{
		id: 2,
		name: 'Compacter',
		shortDescription: 'A Discord moderation bot',
		description:
			'A multipurpose Discord bot with the goal of simplifying the moderation of Discord servers, taking much of the stress and load of human moderators.',
		technologies: [
			'Express',
			'TypeScript',
			'MongoDB',
			'discord.js',
			'Discord API',
		],
		links: {
			github: 'https://github.com/aname2050/compacter',
			discord: 'https://discord.gg/DxZu7Ysq3y',
		},
	},
	{
		id: 3,
		name: 'Neural Network',
		shortDescription:
			'A simple neural network for recognizing hand-drawn digits',
		description:
			'A neural network driven only on mathematical formulas extracted from the Perceptron model. This model can identify hand drawn digits (0-9). The model needs to be trained each time the project is first run.',
		technologies: ['TypeScript'],
		links: {
			github: 'https://github.com/aname2050/typescript-neural-network',
		},
	},
];

export function ProjectList({
	onProjectClick,
}: {
	onProjectClick?: (project: any) => void;
}) {
	return (
		<div className="space-y-4">
			{projects.map(project => (
				<motion.button
					key={project.id}
					onClick={() => onProjectClick?.(project)}
					className="block w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<h3 className="font-semibold text-[1.1rem]">
						{project.name}
					</h3>
					<p className="text-gray-600 text-[0.9rem]">
						{project.shortDescription}
					</p>
				</motion.button>
			))}
		</div>
	);
}

ProjectList.Detail = function ProjectDetail({ project }: { project: any }) {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold mb-2">{project.name}</h2>
				<p className="text-gray-600 text-lg">{project.description}</p>
			</div>

			<div>
				<h3 className="text-xl font-semibold mb-2">Technologies</h3>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech: string) => (
						<span
							key={tech}
							className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-xl font-semibold mb-2">Links</h3>
				<div className="flex flex-wrap gap-4">
					{project.links.github && (
						<motion.a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
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
					{project.links.discord && (
						<motion.a
							href={project.links.discord}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-[#7289DA] text-white rounded-lg hover:bg-[#5b6eae] transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<MessageSquare className="w-5 h-5" />
							Discord Server
						</motion.a>
					)}
					{Object.entries(project.links).map(([key, value]) => {
						if (
							key !== 'github' &&
							key !== 'live' &&
							key !== 'discord'
						) {
							return (
								<motion.a
									key={key}
									href={value as string}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<ExternalLink className="w-5 h-5" />
									{key
										.split('_')
										.map(
											word =>
												word.charAt(0).toUpperCase() +
												word.slice(1)
										)
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
