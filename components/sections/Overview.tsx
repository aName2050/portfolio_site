'use client';

import Image from 'next/image';

export default function Overview() {
	return (
		<>
			<div className="flex flex-row items-center col-span-3 row-span-3">
				<Image
					src={
						'https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=830'
					}
					alt="profile pic"
					width={300}
					height={300}
					className="rounded-full object-cover aspect-square"
				/>
				<div className="ml-16 dark:text-white text-black">
					<h1 className="text-6xl font-bold mb-4">Bardia Shafaee</h1>
					<h3 className="mt-6">
						Personal statement: Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Perferendis sapiente error
						dolores tenetur quae accusantium tempora nulla. Numquam
						vel, tempora in, perspiciatis laborum, eius totam itaque
						architecto necessitatibus omnis eligendi? Lorem ipsum
						dolor sit amet consectetur, adipisicing elit. Sed esse
						ex, expedita repudiandae cumque quibusdam neque
						voluptate quod tempora facere debitis enim iusto autem
						architecto, nihil impedit optio, aspernatur perferendis.
					</h3>
				</div>
			</div>
		</>
	);
}
