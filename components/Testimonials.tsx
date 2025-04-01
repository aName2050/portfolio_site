'use client';

const testimonials = [
	{
		name: 'John Doe',
		note: 'Teacher at OGHS',
		testimonial: 'An amazing student',
		date: '2024-03-16',
	},
	{
		name: 'Jane Doe',
		note: 'FRC Mentor for OGHS',
		testimonial: 'Leads the team very well',
		date: '2025-01-16',
	},
	{
		name: 'Bob Doe',
		note: 'Cross country coach at OGHS',
		testimonial: 'A promising athlete',
		date: '2025-03-16',
	},
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function Testimonials() {
	return (
		<div className="space-y-4">
			{testimonials.map((item, index) => (
				<div
					key={index}
					className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0"
				>
					<p className="text-sm text-gray-500 dark:text-gray-500">
						{new Intl.DateTimeFormat('en-US', {
							timeZone: 'UTC',
						}).format(new Date(item.date))}
					</p>
					<span className="flex gap-1.5 items-baseline">
						<p className="font-medium dark:text-white text-[1.5rem]">
							{item.name}
						</p>
						<p className="text-gray-600 dark:text-gray-400 text-[0.85rem]">
							- {item.note}
						</p>
					</span>
					<p className="dark:text-gray-200 text-[1.1rem]">
						"{item.testimonial}"
					</p>
				</div>
			))}
		</div>
	);
}
