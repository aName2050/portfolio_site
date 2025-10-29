'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1111)`;
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundAttachment = 'fixed';

		return () => {
			document.body.style.backgroundImage = 'none';
		};
	}, []);

	return (
		<>
			<div className="flex h-screen items-center justify-center">
				<div className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg p-6">
					<div className="h-[25rem] w-[50rem]"></div>
				</div>
			</div>
		</>
	);
}
