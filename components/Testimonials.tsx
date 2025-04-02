'use client';

const testimonials = [
	{
		name: 'John Doe',
		note: 'A cool person',
		testimonial: 'Hello world!',
		date: '1970-01-01',
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
