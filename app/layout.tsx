import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Bardia's Portfolio",
	description: "Bardia Shafaee's Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class" // Adds 'dark' or 'light' class to the <html> tag
					defaultTheme="dark" // Default theme, e.g., 'system', 'dark', 'light'
					enableSystem // Enables system theme detection
					disableTransitionOnChange // Prevents flash of unstyled content
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
