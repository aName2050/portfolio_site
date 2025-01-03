'use client';

import { motion } from 'framer-motion';

const projects = [
	{
		name: 'Project 1',
		href: 'https://google.com',
		description: 'A cool project',
	},
	{
		name: 'Project 2',
		href: 'https://google.com',
		description: 'Another awesome project',
	},
	{
		name: 'Project 3',
		href: 'https://google.com',
		description: 'Something amazing',
	},
];

export function ProjectList() {
	return (
		<div className="space-y-4">
			{projects.map((project, index) => (
				<motion.a
					key={index}
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					className="block p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<h3 className="font-semibold">{project.name}</h3>
					<p className="text-gray-600">{project.description}</p>
				</motion.a>
			))}
		</div>
	);
}
