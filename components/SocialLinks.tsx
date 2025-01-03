'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Mail } from 'lucide-react';

const socialLinks = [
	{
		icon: <Github className="w-6 h-6" />,
		href: 'https://github.com',
		label: 'GitHub',
	},
	{
		icon: <Instagram className="w-6 h-6" />,
		href: 'https://instagram.com',
		label: 'Instagram',
	},
	{
		icon: <Mail className="w-6 h-6" />,
		href: 'mailto:example@email.com',
		label: 'Email',
	},
];

export function SocialLinks() {
	return (
		<div className="flex flex-wrap gap-4">
			{socialLinks.map((link, index) => (
				<motion.a
					key={index}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					{link.icon}
					<span>{link.label}</span>
				</motion.a>
			))}
		</div>
	);
}
