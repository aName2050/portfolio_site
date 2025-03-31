'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ProfileImage } from '@/components/ProfileImage';
import { SocialLinks } from '@/components/SocialLinks';
import { ProjectList } from '@/components/ProjectList';
import { AdditionalInfo } from '@/components/AdditionalInfo';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState, useEffect } from 'react';
import { MessageCircleHeartIcon, Trophy, Wrench } from 'lucide-react';
import { LearnMore } from '@/components/LearnMore';

export default function Home() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [expandedSection, setExpandedSection] = useState<
		| 'positions'
		| 'education'
		| 'experience'
		| 'achievements'
		| 'testimonials'
		| 'devlog'
		| null
	>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 6000);

		return () => clearTimeout(timer);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 0.3,
				staggerChildren: 0.2,
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
		},
		exit: {
			opacity: 0,
			y: -20,
		},
	};

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading ? (
					<LoadingScreen key="loading" />
				) : (
					<motion.div
						key="content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center p-4"
					>
						<AnimatePresence mode="wait">
							{selectedProject ? (
								<motion.div
									key="project-detail"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-5xl w-full"
								>
									<button
										onClick={() => setSelectedProject(null)}
										className="mb-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
									>
										← Back
									</button>
									<ProjectList.Detail
										project={selectedProject}
									/>
								</motion.div>
							) : expandedSection ? (
								<motion.div
									key="section-detail"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-5xl w-full"
								>
									<button
										onClick={() => setExpandedSection(null)}
										className="mb-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
									>
										← Back
									</button>
									<AdditionalInfo.Detail
										section={
											expandedSection as
												| 'positions'
												| 'education'
										}
									/>
								</motion.div>
							) : (
								<motion.div
									key="main-content"
									initial="hidden"
									animate="visible"
									exit="exit"
									variants={containerVariants}
									className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-5xl w-full grid grid-cols-1 md:grid-cols-[1fr,1px,1fr] gap-8"
								>
									<motion.div
										variants={itemVariants}
										className="space-y-6"
									>
										<ProfileImage />
										<motion.div
											variants={itemVariants}
											className="space-y-4"
										>
											<h1 className="text-3xl font-bold text-center md:text-left dark:text-white">
												Bardia Shafaee
											</h1>
											<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Ut enim ad minim veniam, quis
												nostrud exercitation ullamco
												laboris nisi ut aliquip ex ea
												commodo consequat.
											</p>
											<hr className="border-gray-200 dark:border-gray-700 my-6" />
											<AdditionalInfo
												onSectionExpand={
													setExpandedSection
												}
											/>
										</motion.div>
									</motion.div>

									<div className="hidden md:block bg-gray-200 dark:bg-gray-700 h-full" />

									<motion.div
										variants={itemVariants}
										className="flex flex-col justify-start space-y-8"
									>
										<div className="space-y-4">
											<h2 className="text-2xl font-semibold dark:text-white">
												Connect with me
											</h2>
											<SocialLinks />
										</div>

										<div className="space-y-4">
											<h2 className="text-2xl font-semibold dark:text-white">
												Learn more about me
											</h2>
											<LearnMore
												onSectionExpand={
													setExpandedSection
												}
											/>
										</div>

										<div className="space-y-4">
											<h2 className="text-2xl font-semibold dark:text-white">
												Projects
											</h2>
											<ProjectList
												onProjectClick={
													setSelectedProject
												}
											/>
										</div>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
						<ThemeToggle />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
