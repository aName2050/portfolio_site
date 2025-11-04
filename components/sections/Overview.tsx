'use client';

import { cn } from '@/lib/utils';
import { Award, GraduationCap, HomeIcon } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Overview() {
	return (
		<div className="flex flex-row items-center col-span-3 w-full">
			<Image
				src={'https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=830'}
				alt="profile pic"
				width={300}
				height={300}
				className="rounded-full object-cover aspect-square"
			/>
			<div className="ml-16 dark:text-white text-black">
				<h1 className="text-6xl font-bold mb-4">Bardia Shafaee</h1>
				<h3 className="mt-6">Software enthusiast and programmer who loves building things that make a difference. I learn quickly, lead with intention, and stay driven by curiosity.</h3>
			</div>
		</div>
	);
}
