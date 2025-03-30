'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfileImage() {
	return (
		<motion.div
			className="relative w-64 h-64 mx-auto overflow-hidden rounded-full"
			whileHover={{ scale: 1.05 }}
			transition={{ type: 'spring', stiffness: 300 }}
		>
			<Image
				src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&h=500"
				alt="Abstract placeholder"
				fill
				className="object-cover"
			/>
		</motion.div>
	);
}
