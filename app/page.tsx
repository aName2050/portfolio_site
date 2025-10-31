'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, HomeIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1111)`;
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundAttachment = 'fixed';

		return () => {
			document.body.style.backgroundImage = 'none';
		};
	}, []);

	const sections = {
		overview: 'Overview',
		awards: 'Awards',
		education: 'Education',
	};
	let selected: string = sections.overview;

	function setSection(section: string): void {
		selected = section;
	}

	return (
		<>
			<div className="flex h-screen items-center justify-center">
				<div className="bg-slate-300/20 backdrop-blur-sm border border-white/60 rounded-[3rem] shadow-lg">
					<div className="relative h-[40rem] w-[50rem]">
						<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/0 rounded-full shawdow-lg">
							<button
								className="p-4"
								onClick={() => setSection(sections.overview)}
							>
								<HomeIcon
									size={32}
									className={cn(
										selected == sections.overview
											? 'text-white'
											: 'text-slate-400',
										'hover:text-blue-900 transition-colors m-0"'
									)}
								/>
							</button>
							<button
								className="p-4"
								onClick={() => setSection(sections.overview)}
							>
								<Award
									size={32}
									className={cn(
										selected == sections.awards
											? 'text-white'
											: 'text-slate-400',
										'hover:text-blue-900 transition-colors m-0"'
									)}
								/>
							</button>
							<button
								className="p-4"
								onClick={() => setSection(sections.overview)}
							>
								<GraduationCap
									size={32}
									className={cn(
										selected == sections.education
											? 'text-white'
											: 'text-slate-400',
										'hover:text-blue-900 transition-colors m-0"'
									)}
								/>
							</button>
						</div>
						<div className="py-16"></div>
						<div className="grid grid-cols-3 gap-x-2 gap-y-12 place-items-center">
							{selected == sections.overview ? (
								<>
									<div>Overview</div>
									<div>Item 2</div>
									<div>Item 3</div>
									<div>Item 4</div>
								</>
							) : selected == sections.awards ? (
								<>
									<div>Awards</div>
									<div>Item 2</div>
									<div>Item 3</div>
									<div>Item 4</div>
								</>
							) : (
								<>
									<div>Education</div>
									<div>Item 2</div>
									<div>Item 3</div>
									<div>Item 4</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
