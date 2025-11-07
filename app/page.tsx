'use client';

import Overview from '@/components/sections/Overview';
import { cn } from '@/lib/utils';
import {
	AwardIcon,
	BriefcaseBusinessIcon,
	CpuIcon,
	GraduationCapIcon,
	HomeIcon,
	MoonIcon,
	SunIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const sections = [
	{
		name: 'Overview',
		icon: HomeIcon,
	},
	{
		name: 'Projects',
		icon: CpuIcon,
	},
	{
		name: 'Awards',
		icon: AwardIcon,
	},
	{
		name: 'Experience',
		icon: BriefcaseBusinessIcon,
	},
	{
		name: 'Education',
		icon: GraduationCapIcon,
	},
];

export default function Home() {
	useEffect(() => {
		document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1758170751224-b3a9b292c26b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740)`;
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundAttachment = 'fixed';

		return () => {
			document.body.style.backgroundImage = 'none';
		};
	}, []);

	const [selected, setSection] = useState<string>(sections[0].name);

	const { theme, setTheme } = useTheme();

	const renderSection = () => {
		switch (selected) {
			case sections[0].name:
				return <Overview />;
			case sections[1].name:
			// return <Awards />;
			case sections[2].name:
			// return <Education />;
		}
	};

	return (
		<>
			<div className="flex h-screen items-center justify-center">
				<div className="dark:bg-black/30 bg-slate-300/30 backdrop-blur-sm border border-white/60 rounded-[3rem] shadow-lg">
					<div className="relative h-[75dvh] w-[75dvw] max-h-[50rem] max-w-[60rem]">
						<nav className="absolute top-4 right-4">
							<div className=" dark:bg-black/5 bg-slate-300/5 backdrop-blur-sm border border-white/60 rounded-full shadow-lg inline-block mr-4">
								{sections.map(section => (
									<button
										key={section.name}
										className="p-4 m-1 rounded-full dark:hover:bg-white/15 hover:bg-black/10 transition-colors"
										onClick={() => setSection(section.name)}
									>
										<section.icon
											size={32}
											className={cn(
												selected == section.name
													? 'text-black dark:text-white'
													: 'dark:text-gray-400 text-gray-500',
												'transition-colors m-0"'
											)}
										/>
									</button>
								))}
							</div>
							<div className="dark:bg-black/5 bg-slate-300/5 backdrop-blur-sm border border-white/60 rounded-full shadow-lg inline-block">
								<button
									onClick={() =>
										setTheme(
											theme === 'dark' ? 'light' : 'dark'
										)
									}
									className="p-4 m-1 rounded-full dark:hover:bg-white/15 hover:bg-black/10 transition-colors text-yellow-300 dark:text-blue-900"
								>
									{theme !== 'dark' ? (
										<SunIcon size={32} />
									) : (
										<MoonIcon size={32} />
									)}
								</button>
							</div>
						</nav>
						<div className="py-16"></div>
						<div className="grid grid-cols-3 gap-x-2 gap-y-12 place-items-center p-4 m-4 my-[-1rem]">
							<AnimatePresence mode="wait">
								<motion.div
									key={selected}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.5 }}
								>
									{renderSection()}
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
