'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects: {
	name: string;
	description: string;
	github: string;
	start: number;
}[] = [
	{
		name: 'RC Robot',
		description:
			'A remote-controlled robot built with Raspberry Pi and controlled through a web app powered by Next.js.',
		github: 'https://example.com',
		start: new Date('2026-08-01').getTime(),
	},
	{
		name: 'Portfolio',
		description:
			'My personal portfolio website built with Next.js and Tailwind CSS.',
		github: 'https://example.com',
		start: new Date('2022-06-01').getTime(),
	},
	{
		name: 'GigaScript',
		description:
			'A custom programming language designed to be similar to the English language.',
		github: 'https://example.com',
		start: new Date('2023-01-15').getTime(),
	},
];

export default function ProjectsSplitView() {
	const [activeProject, setActiveProject] = useState<string>();
	const currentProject = projects.find(p => p.name === activeProject);

	return (
		<div className="flex h-full max-h-full w-full gap-4 transition-all duration-700 ease-in-out">
			{/* LEFT SIDE: Project List */}
			<div
				className={`
				flex-1 flex flex-col gap-4 overflow-y-auto p-6
				transition-all duration-500 ease-in-out
				${activeProject ? 'max-w-[40%]' : 'w-full'}
			`}
			>
				<div
					className={`grid gap-4 ${
						activeProject
							? 'grid-cols-1'
							: 'grid-cols-2 lg:grid-cols-3'
					}`}
				>
					{projects.map(project => (
						<button
							key={project.name}
							onClick={() => setActiveProject(project.name)}
							className={`
								p-6 text-left rounded-[2rem] border transition-all duration-300
								backdrop-blur-md shadow-lg
								${
									activeProject === project.name
										? 'bg-white/20 border-white/60 ring-2 ring-blue-400/50'
										: 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
								}
							`}
						>
							<p className="font-bold text-lg dark:text-white">
								{project.name}
							</p>
							<p className="text-xs opacity-50 dark:text-gray-400">
								{calcAge(project.start)}
							</p>
						</button>
					))}
				</div>
			</div>

			{/* RIGHT SIDE: Detail Panel (Split Out) */}
			<div
				className={`
				max-h-[98%]
				transition-all duration-700 ease-in-out overflow-hidden
				dark:bg-black/20 bg-slate-300/20 backdrop-blur-xl border border-white/40 
				rounded-[3rem] shadow-2xl
				${
					activeProject
						? 'flex-[1.5] opacity-100 translate-x-0 p-8'
						: 'flex-0 w-0 opacity-0 translate-x-20 pointer-events-none p-0'
				}
			`}
			>
				{currentProject && (
					<div className="h-full flex flex-col animate-in fade-in slide-in-from-right-8 duration-700">
						<div className="flex justify-between items-center mb-7">
							<h3 className="text-3xl font-black tracking-tighter dark:text-white uppercase">
								{currentProject.name}
							</h3>
							<button
								onClick={() => setActiveProject(undefined)}
								className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 transition-all border border-white/10"
							>
								✕
							</button>
						</div>

						<div className="space-y-6 flex-grow">
							<section>
								<h4 className="text-blue-400 text-sm font-mono mb-2">
									/ Description
								</h4>
								<p className="text-lg font-bold dark:text-white">
									{currentProject.description}
								</p>
							</section>

							<div className="grid grid-cols-2 gap-4">
								<div className="bg-white/5 p-4 rounded-2xl border border-white/10">
									<p className="text-[10px] uppercase opacity-40 mb-1">
										Started
									</p>
									<p className="font-medium">
										{new Date(
											currentProject.start
										).toLocaleDateString()}
									</p>
								</div>
								<div className="bg-white/5 p-4 rounded-2xl border border-white/10">
									<p className="text-[10px] uppercase opacity-40 mb-1">
										Status
									</p>
									<p className="font-medium text-green-400">
										Active
									</p>
								</div>
							</div>

							<a
								href={currentProject.github}
								target="_blank"
								className="block w-full text-center py-4 bg-white dark:bg-white/10 dark:text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform active:scale-95"
							>
								Access Source
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
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
