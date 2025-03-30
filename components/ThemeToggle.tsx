'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<motion.button
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="fixed bottom-4 right-4 p-3 rounded-full bg-orange-900 text-white shadow-lg hover:bg-orange-800 dark:bg-orange-400 dark:hover:bg-orange-500 transition-colors"
		>
			{theme === 'dark' ? (
				<Sun className="w-5 h-5" />
			) : (
				<Moon className="w-5 h-5" />
			)}
		</motion.button>
	);
}
