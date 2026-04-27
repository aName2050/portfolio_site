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
				max-w-[40%]
			`}
			>
				<div className={`grid gap-4 grid-cols-1`}>
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
							<p className="font-bold text-xl dark:text-white">
								{project.name}
							</p>
							<p className="text-sm opacity-80 dark:text-gray-200">
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
				rounded-[3rem] shadow-2xl flex-[1.5] opacity-100 translate-x-0 p-8`}
			>
				<div className="h-full flex flex-col animate-in fade-in slide-in-from-right-8 duration-700">
					<div className="flex justify-between items-center mb-7">
						<h3 className="text-3xl font-black tracking-tighter dark:text-white uppercase">
							{currentProject?.name ?? 'Select a project'}
						</h3>
					</div>

					<div className="space-y-6 flex-grow">
						<section>
							<h4 className="dark:text-blue-400 text-blue-800 text-sm font-mono mb-2">
								/ Description
							</h4>
							<p className="text-lg font-bold dark:text-white">
								{currentProject?.description ??
									'Select a project to see its description.'}
							</p>
						</section>

						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white/5 p-4 rounded-2xl border border-white/10">
								<p className="text-[10px] uppercase opacity-40 mb-1">
									Started
								</p>
								<p className="font-medium">
									{new Date(
										currentProject?.start ?? Date.now()
									).toLocaleDateString()}
								</p>
							</div>
							<div className="bg-white/5 p-4 rounded-2xl border border-white/10">
								<p className="text-[10px] uppercase opacity-40 mb-1">
									Status
								</p>
								<p className="font-medium dark:text-green-400 text-green-700">
									Active
								</p>
							</div>
						</div>

						<a
							href={currentProject?.github ?? 'about:blank'}
							target="_blank"
							className="block w-full text-center py-4 bg-white dark:bg-white/10 dark:text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform active:scale-95"
						>
							Access Source
						</a>
					</div>
				</div>
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
