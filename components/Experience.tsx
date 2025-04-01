'use client';

const experience = [
	{
		title: 'Programmer',
		organization: 'OGHS Robotics (FRC Team #10059)',
		period: '2024 - 2025',
		startDate: '2024-10-02',
	},
	{
		title: 'IT Specialist',
		organization: 'Advanced Science Research Club (OGHS ASR)',
		period: '2025 - Present',
		startDate: '2025-01-01',
	},
].sort(
	(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

export function Experience() {
	return (
		<div className="space-y-4">
			{experience.map((item, index) => (
				<div
					key={index}
					className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0"
				>
					<p className="font-medium dark:text-white">{item.title}</p>
					<p className="text-gray-600 dark:text-gray-400">
						{item.organization}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-500">
						{item.period}
					</p>
				</div>
			))}
		</div>
	);
}
