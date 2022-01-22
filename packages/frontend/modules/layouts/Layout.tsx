import {Cookie} from '@components/Cookie';
import {Navbar} from '@components/Navbar';
import {Sidebar} from '@components/Sidebar';
import {motion} from 'framer-motion';
import React from 'react';

const pageVariants = {
	initial: {
		y: -100,
		opacity: 0,
	},
	in: {
		y: 0,
		opacity: 1,
	},
	out: {
		y: -100,
		opacity: 0,
	},
};
const pageTransition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.4,
};

export const Layout: React.FC = ({children}) => (
	<div className="">
		<Navbar />
		<motion.div
			className="p-10"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
		{/* <Cookie /> */}
	</div>
);
