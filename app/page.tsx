'use client';

import { cn } from '@/lib/utils';
import { Award, GraduationCap, HomeIcon } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

	const sections = {
		overview: 'Overview',
		awards: 'Awards',
		education: 'Education',
	};

	const [selected, setSection] = useState<string>(sections.overview);

	return (
		<>
			<div className="flex h-screen items-center justify-center">
				<div className="bg-black/20 backdrop-blur-sm border border-white/60 rounded-[3rem] shadow-lg">
					<div className="relative h-[75dvh] w-[75dvw] max-h-[50rem] max-w-[60rem]">
						<div className="absolute top-4 right-4 bg-black/5 backdrop-blur-sm border border-white/60 rounded-full shadow-lg">
							<button className="p-4 m-1 rounded-full hover:bg-white/15 transition-colors" onClick={() => setSection(sections.overview)}>
								<HomeIcon size={32} className={cn(selected == sections.overview ? 'text-white' : 'text-gray-500', 'transition-colors m-0"')} />
							</button>
							<button className="p-4 m-1 rounded-full hover:bg-white/15 transition-colors" onClick={() => setSection(sections.awards)}>
								<Award size={32} className={cn(selected == sections.awards ? 'text-white' : 'text-gray-500', 'transition-colors m-0"')} />
							</button>
							<button className="p-4 m-1 rounded-full hover:bg-white/15 transition-colors" onClick={() => setSection(sections.education)}>
								<GraduationCap size={32} className={cn(selected == sections.education ? 'text-white' : 'text-gray-500', 'transition-colors m-0"')} />
							</button>
						</div>
						<div className="py-16"></div>
						<div className="grid grid-cols-3 gap-x-2 gap-y-12 place-items-center border border-red-600 p-4 m-4 my-[-1rem]">
							{selected == sections.overview ? (
								<>
									<div>
										<Image
											src={'https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=830'}
											alt="profile pic"
											width={150}
											height={150}
											layout="responsive"
											className="rounded-full object-cover aspect-square"
										/>
										<h1>Bardia Shafaee</h1>
										<h3>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequuntur aut unde, ab saepe debitis, hic tempore, impedit dolore enim aspernatur facilis. Rerum, architecto aspernatur! Repudiandae
											mollitia ab error dignissimos.
										</h3>
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
