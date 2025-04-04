'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Instagram } from 'lucide-react';

export function DevlogFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="bg-card mt-8 rounded-lg shadow-lg p-6"
		>
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
				<div className="text-card-foreground">
					<p className="text-sm">
						© {currentYear} Bardia Shafaee. All rights reserved.
					</p>
				</div>

				<div className="flex items-center space-x-4">
					<motion.a
						href="https://github.com/aname2050"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-card-foreground transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Github className="h-5 w-5" />
					</motion.a>
					<motion.a
						href="https://instagram.com/aname2050"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-card-foreground transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Instagram className="h-5 w-5" />
					</motion.a>
					<motion.a
						href="mailto:shafaeebardia@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-card-foreground transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Mail className="h-5 w-5" />
					</motion.a>
				</div>
			</div>
		</motion.footer>
	);
}
