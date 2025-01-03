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
				src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
				alt="Abstract placeholder"
				fill
				className="object-cover"
			/>
		</motion.div>
	);
}
