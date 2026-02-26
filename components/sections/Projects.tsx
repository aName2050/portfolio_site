'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects: {
	name: string;
	github: string;
	start: number;
}[] = [
	{
		name: 'RC Robot',
		github: 'https://example.com',
		start: new Date('2026-08-01').getTime(),
	},
	{
		name: 'Portfolio',
		github: 'https://example.com',
		start: new Date('2022-06-01').getTime(),
	},
	{
		name: 'GigaScript',
		github: 'https://example.com',
		start: new Date('2023-01-15').getTime(),
	},
];

export default function Projects() {
	const [activeProject, setActiveProject] = useState<string>();

	return (
		<>
			<div className="flex flex-row items-center col-span-3 row-span-3 w-full">
				<div className="grid grid-cols-2 gap-4 w-full">
					{projects.map(project => (
						<div
							key={project.name}
							className="flex w-full dark:bg-black/5 bg-slate-300/5 backdrop-blur-sm border border-white/60 rounded-full shadow-lg p-2"
						>
							<button
								className="p-4 m-1 rounded-full dark:hover:bg-white/15 hover:bg-black/10 transition-colors w-full text-center whitespace-nowrap"
								onClick={() => setActiveProject(project.name)}
							>
								<p>{project.name}</p>
								<p>
									Created on:{' '}
									{new Date(
										project.start
									).toLocaleDateString()}{' '}
									({calcAge(project.start)})
								</p>
							</button>
						</div>
					))}
				</div>
				{activeProject}
			</div>
		</>
	);
}

function calcAge(timestamp: number) {
	const now = new Date();
	const start = new Date(timestamp);
	const diffTime = Math.abs(now.getTime() - start.getTime());
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);

	if (diffYears > 0) {
		return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
	} else if (diffMonths > 0) {
		return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
	} else {
		return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
	}
}
