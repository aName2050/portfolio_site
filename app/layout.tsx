import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Bardia's Portfolio",
	description: "Bardia Shafaee's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ThemeProvider attribute="class" disableTransitionOnChange>
				<body className={inter.className}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
