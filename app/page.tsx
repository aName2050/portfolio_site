'use client';

import { motion } from 'framer-motion';
import { ProfileImage } from '@/components/ProfileImage';
import { SocialLinks } from '@/components/SocialLinks';
import { ProjectList } from '@/components/ProjectList';

export default function Home() {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-400 via-orange-500 to-orange-700 flex items-center justify-center p-4">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl w-full grid grid-cols-1 md:grid-cols-[1fr,1px,1fr] gap-8"
			>
				{/* Left Side */}
				<motion.div variants={itemVariants} className="space-y-6">
					<ProfileImage />
					<motion.div variants={itemVariants} className="space-y-4">
						<h1 className="text-3xl font-bold text-center md:text-left">
							John Doe
						</h1>
						<p className="text-gray-600 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</motion.div>
				</motion.div>

				{/* Divider */}
				<div className="hidden md:block bg-gray-200 h-full" />

				{/* Right Side */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col justify-start space-y-8"
				>
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">
							Connect with me
						</h2>
						<SocialLinks />
					</div>

					<div className="space-y-4">
						<h2 className="text-2xl font-semibold">Projects</h2>
						<ProjectList />
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
