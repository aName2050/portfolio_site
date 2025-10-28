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
			<div className="bg-slate-300/30">Hello world!</div>
		</>
	);
}
