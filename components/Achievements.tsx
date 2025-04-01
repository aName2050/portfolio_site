'use client';

const achievements = [
	{
		title: 'Gracious Professionalism Pin',
		event: 'FRC SVR 2025 Reefscape presented by HaaS',
		date: '2025-03-16',
	},
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function Achievements() {
	return (
		<div className="space-y-4">
			{achievements.map((item, index) => (
				<div
					key={index}
					className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0"
				>
					<p className="font-medium dark:text-white">{item.title}</p>
					<p className="text-gray-600 dark:text-gray-400">
						{item.event}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-500">
						{new Date(item.date).toLocaleDateString()}
					</p>
				</div>
			))}
		</div>
	);
}
