'use client';

import { cn } from '@/lib/utils';
import { Award, GraduationCap, HomeIcon } from 'lucide-react';
import Image from 'next/image';
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

	const [selected, setSection] = useState<string>(sections.overview);

	return (
		<>
			<div className="flex h-screen items-center justify-center">
				<div className="bg-slate-300/20 backdrop-blur-sm border border-white/60 rounded-[3rem] shadow-lg">
					<div className="relative h-[75dvh] w-[75dvw] max-h-[40rem] max-w-[60rem]">
						<div className="absolute top-[1dvh] right-[1dvw] bg-slate-400/20 backdrop-blur-sm border border-white/60 rounded-full shawdow-lg shawdow-black">
							<button
								className="p-4 m-1 rounded-full hover:bg-white/40 transition-colors"
								onClick={() => setSection(sections.overview)}
							>
								<HomeIcon
									size={32}
									className={cn(
										selected == sections.overview
											? 'text-white'
											: 'text-slate-400',
										'transition-colors m-0"'
									)}
								/>
							</button>
							<button
								className="p-4 m-1 rounded-full hover:bg-white/40 transition-colors"
								onClick={() => setSection(sections.awards)}
							>
								<Award
									size={32}
									className={cn(
										selected == sections.awards
											? 'text-white'
											: 'text-slate-400',
										'transition-colors m-0"'
									)}
								/>
							</button>
							<button
								className="p-4 m-1 rounded-full hover:bg-white/40 transition-colors"
								onClick={() => setSection(sections.education)}
							>
								<GraduationCap
									size={32}
									className={cn(
										selected == sections.education
											? 'text-white'
											: 'text-slate-400',
										'transition-colors m-0"'
									)}
								/>
							</button>
						</div>
						<div className="py-16"></div>
						<div className="grid grid-cols-3 gap-x-2 gap-y-12 place-items-center border border-red-600 p-4 m-4 my-[-1rem]">
							{selected == sections.overview ? (
								<>
									<div>
										<Image
											src={
												'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-z73z2u5P-oH2gIqdZjngBE-qvNgkwLDXYw&s'
											}
											alt="profile pic"
											width={150}
											height={150}
											layout="responsive"
											className="rounded-full"
										/>
									</div>
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
