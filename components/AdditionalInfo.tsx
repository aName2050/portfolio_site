'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

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
			startDate: '2024-10-01',
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
			degree: 'High School Diploma',
			institution: 'Oak Grove High School',
			graduation: 'Expected 2027',
			date: '2027-06-01',
		},
	].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
};

export function AdditionalInfo({
	onSectionExpand,
}: {
	onSectionExpand: (section: 'positions' | 'education' | null) => void;
}) {
	const displayedEducation = info.education.slice(0, 1);
	const hasMoreEducation = info.education.length > 1;

	return (
		<div className="space-y-6 mt-8">
			{/* <motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="space-y-4"
			>
				<div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
					<Briefcase className="w-5 h-5" />
					<h3 className="text-lg font-semibold">Current Role</h3>
				</div>
				<div className="ml-7">
					<p className="font-medium dark:text-white">
						{info.occupation.title}
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						{info.occupation.company}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-500">
						{info.occupation.period}
					</p>
				</div>
			</motion.div> */}

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="space-y-4"
			>
				<div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
					<Award className="w-5 h-5" />
					<h3 className="text-lg font-semibold">
						Leadership Positions
					</h3>
				</div>
				<div className="ml-7">
					<button
						onClick={() => onSectionExpand('positions')}
						className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium text-sm"
					>
						View all {info.positions.length} positions
					</button>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="space-y-4"
			>
				<div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
					<GraduationCap className="w-5 h-5" />
					<h3 className="text-lg font-semibold">Education</h3>
				</div>
				<div className="ml-7">
					{displayedEducation.map((edu, index) => (
						<div key={index} className="mb-3">
							<p className="font-medium dark:text-white">
								{edu.degree}
							</p>
							<p className="text-gray-600 dark:text-gray-400">
								{edu.institution}
							</p>
							<p className="text-sm text-gray-500 dark:text-gray-500">
								{edu.graduation}
							</p>
						</div>
					))}
					{hasMoreEducation && (
						<button
							onClick={() => onSectionExpand('education')}
							className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium text-sm"
						>
							See {info.education.length - 1} more
						</button>
					)}
				</div>
			</motion.div>
		</div>
	);
}

AdditionalInfo.Detail = function Detail({
	section,
}: {
	section: 'positions' | 'education';
}) {
	const items = section === 'positions' ? info.positions : info.education;

	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold dark:text-white">
				{section === 'positions'
					? 'Leadership Positions'
					: 'Education History'}
			</h2>
			<div className="space-y-6">
				{items.map((item, index) => (
					<div
						key={index}
						className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0"
					>
						<p className="font-medium dark:text-white">
							{section === 'positions'
								? // @ts-ignore
								  item.title
								: (item as any).degree}
						</p>
						<p className="text-gray-600 dark:text-gray-400">
							{section === 'positions'
								? // @ts-ignore
								  item.organization
								: (item as any).institution}
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-500">
							{section === 'positions'
								? // @ts-ignore
								  item.period
								: (item as any).graduation}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
