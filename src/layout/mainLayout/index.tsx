import { Outlet, useLocation } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { shouldHideHeaderAndFooter } from '@utils/layoutUtils';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function MainLayout() {
	const location = useLocation();
	const hideHeaderAndFooter = shouldHideHeaderAndFooter(location.pathname);

	// 특정 경로 감지 (startsWith 사용)
	const shouldAnimate = !location.pathname.startsWith('/youth-map');

	const [prevPage, setPrevPage] = useState(0);
	const [currPage, setCurrPage] = useState(0);

	useEffect(() => {
		// 간단히 `pathname`의 길이를 기준으로 페이지 순서 계산
		const pageOrder = location.pathname.split('/').length;
		setPrevPage(currPage);
		setCurrPage(pageOrder);
	}, [location.pathname]);

	const AppAni = {
		init: {
			x: prevPage < currPage ? '-100%' : '100%', // 이전 페이지와 비교해 방향 결정
			opacity: 0,
			transition: { type: 'spring', stiffness: 120, damping: 20 },
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 120, damping: 20 },
		},
	};

	return (
		<main className="flex flex-col h-screen font-pre">
			{!hideHeaderAndFooter && <Header />}
			<div
				className={`flex-1 overflow-y-auto max-w-[980px] w-full mx-auto scrollbar-hide ${
					!hideHeaderAndFooter ? 'pb-[60px]' : ''
				}`}>
				{shouldAnimate ? (
					<AnimatePresence mode="wait">
						<motion.div key={location.pathname} initial="init" animate="animate" exit="exit" variants={AppAni}>
							<Outlet />
						</motion.div>
					</AnimatePresence>
				) : (
					<Outlet />
				)}
			</div>
			{!hideHeaderAndFooter && <Footer />}
		</main>
	);
}
