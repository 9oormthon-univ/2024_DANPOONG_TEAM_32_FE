import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

export default function CreateWelfareCardContainer() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0, x: '100%' }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
				<Outlet />
			</motion.div>
		</AnimatePresence>
	);
}
