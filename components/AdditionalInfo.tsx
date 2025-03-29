'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, GraduationCap, X } from 'lucide-react';
import { useState } from 'react';

const info = {
	// occupation: {
	// 	title: 'job title',
	// 	company: 'company',
	// },
	positions: [
		// {
		// 	title: 'President && Programming Lead',
		// 	organization: 'OGHS Robotics (FRC Team #10059)',
		// 	period: '2025 - Present',
		// 	startDate: '2025-04-02',
		// },
		// {
		// 	title: 'Team Captain',
		// 	organization: 'OGHS Cross Country',
		// 	period: '2025 - Present',
		// 	startDate: '2025-08-25',
		// },
		// {
		// 	title: 'Team Captain',
		// 	organization: 'OGHS Track & Field',
		// 	period: '2025 - Present',
		// 	startDate: '2026-02-01',
		// },
		{
			title: 'Treasurer && Secretary',
			organization: 'M.E.S.U. (Middle Eastern Student Union)',
			period: '2024 - Present',
			startDate: '2024-010-01',
		},
		{
			title: 'Treasurer',
			organization: 'Eaglehouse Clubhouse',
			period: '2024 - 2025',
			startDate: '2024-05-01',
		},
		{
			title: 'Senator',
			organization: 'Class of 2027 (ASB, Student Government)',
			period: '2024 - 2025',
			startDate: '2024-01-01',
		},
	].sort(
		(a, b) =>
			new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
	),
	education: [
		{
			degree: 'Highschool',
			institution: 'Oak Grove High School',
			graduation: 'Expected 2027',
			date: '2027-05-01',
		},
	].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
};

export function AdditionalInfo() {
	const [expandedSection, setExpandedSection] = useState<
		'positions' | 'education' | null
	>(null);

	const displayedPositions = info.positions.slice(0, 1);
	const displayedEducation = info.education.slice(0, 1);

	const hasMorePositions = info.positions.length > 1;
	const hasMoreEducation = info.education.length > 1;

	const expandedViewVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	};

	return (
		<>
			<div className="space-y-6 mt-8">
				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-4"
				>
					<div className="flex items-center gap-2 text-gray-800">
						<Briefcase className="w-5 h-5" />
						<h3 className="text-lg font-semibold">Current Role</h3>
					</div>
					<div className="ml-7">
						<p className="font-medium">{info.occupation.title}</p>
						<p className="text-gray-600">
							{info.occupation.company}
						</p>
					</div>
				</motion.div> */}

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="space-y-4"
				>
					<div className="flex items-center gap-2 text-gray-800">
						<Award className="w-5 h-5" />
						<h3 className="text-lg font-semibold">
							Leadership Positions
						</h3>
					</div>
					<div className="ml-7 space-y-3">
						{displayedPositions.map((position, index) => (
							<div key={index}>
								<p className="font-medium">{position.title}</p>
								<p className="text-gray-600">
									{position.organization}
								</p>
								<p className="text-sm text-gray-500">
									{position.period}
								</p>
							</div>
						))}
						{hasMorePositions && (
							<button
								onClick={() => setExpandedSection('positions')}
								className="text-orange-500 hover:text-orange-600 font-medium text-sm"
							>
								See {info.positions.length - 1} more positions
							</button>
						)}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="space-y-4"
				>
					<div className="flex items-center gap-2 text-gray-800">
						<GraduationCap className="w-5 h-5" />
						<h3 className="text-lg font-semibold">Education</h3>
					</div>
					<div className="ml-7">
						{displayedEducation.map((edu, index) => (
							<div key={index} className="mb-3">
								<p className="font-medium">{edu.degree}</p>
								<p className="text-gray-600">
									{edu.institution}
								</p>
								<p className="text-sm text-gray-500">
									{edu.graduation}
								</p>
							</div>
						))}
						{hasMoreEducation && (
							<button
								onClick={() => setExpandedSection('education')}
								className="text-orange-500 hover:text-orange-600 font-medium text-sm"
							>
								See {info.education.length - 1} more education
								entries
							</button>
						)}
					</div>
				</motion.div>
			</div>

			<AnimatePresence>
				{expandedSection && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={expandedViewVariants}
						className="fixed top-0 left-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
						onClick={e => {
							if (e.target === e.currentTarget)
								setExpandedSection(null);
						}}
					>
						<motion.div
							className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
							onClick={e => e.stopPropagation()}
						>
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-2xl font-bold">
									{expandedSection === 'positions'
										? 'Leadership Positions'
										: 'Education History'}
								</h2>
								<button
									onClick={() => setExpandedSection(null)}
									className="text-gray-500 hover:text-gray-700"
								>
									<X className="w-6 h-6" />
								</button>
							</div>

							<div className="space-y-6">
								{expandedSection === 'positions'
									? info.positions.map((position, index) => (
											<div
												key={index}
												className="border-b border-gray-100 pb-4 last:border-0"
											>
												<p className="font-medium">
													{position.title}
												</p>
												<p className="text-gray-600">
													{position.organization}
												</p>
												<p className="text-sm text-gray-500">
													{position.period}
												</p>
											</div>
									  ))
									: info.education.map((edu, index) => (
											<div
												key={index}
												className="border-b border-gray-100 pb-4 last:border-0"
											>
												<p className="font-medium">
													{edu.degree}
												</p>
												<p className="text-gray-600">
													{edu.institution}
												</p>
												<p className="text-sm text-gray-500">
													{edu.graduation}
												</p>
											</div>
									  ))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
