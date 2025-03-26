'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const info = {
	occupation: {
		title: 'JOB TITLE',
		company: 'COMPANY',
		period: 'DATES',
	},
	positions: [
		{
			title: 'President && Programming Lead',
			organization: 'OGHS Robotics (FRC Team #10059)',
			period: '2025 - Present',
		},
		{
			title: 'Senator',
			organization: 'Class of 2027 (ASB)',
			period: '2024 - Present',
		},
		{
			title: 'Treasurer/Secretary',
			organization: 'M.E.S.U. (Middle Eastern Student Union)',
			period: '2024 - Present',
		},
		{
			title: 'Treasurer',
			organization: 'Eaglehouse Clubhouse',
			period: '2024 - 2025',
		},
	],
	education: {
		degree: 'Highschool',
		institution: 'Oak Grove High School',
		graduation: 'Graduating Spring 2027',
	},
};

export function AdditionalInfo() {
	return (
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
					<p className="text-gray-600">{info.occupation.company}</p>
					<p className="text-sm text-gray-500">
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
				<div className="flex items-center gap-2 text-gray-800">
					<Award className="w-5 h-5" />
					<h3 className="text-lg font-semibold">
						Leadership Positions
					</h3>
				</div>
				<div className="ml-7 space-y-3">
					{info.positions.map((position, index) => (
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
					<p className="font-medium">{info.education.degree}</p>
					<p className="text-gray-600">
						{info.education.institution}
					</p>
					<p className="text-sm text-gray-500">
						{info.education.graduation}
					</p>
				</div>
			</motion.div>
		</div>
	);
}
