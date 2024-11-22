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

	// 네비게이션 메뉴 순서 정의
	const navOrder = {
		'/home': 0,
		'/youth-policy': 1,
		'/dictionary': 2,
		'/my-page': 3,
	};

	const [prevPath, setPrevPath] = useState(location.pathname);

	useEffect(() => {
		// 이전 경로 저장
		setPrevPath(location.pathname);
		// 페이지 깊이 계산
		const pageOrder = location.pathname.split('/').length;
		setPrevPage(currPage);
		setCurrPage(pageOrder);
	}, [location.pathname]);

	const getAnimationDirection = (): number => {
		// 네비게이션 메뉴 간 이동시
		if (navOrder.hasOwnProperty(location.pathname) && navOrder.hasOwnProperty(prevPath)) {
			console.log(navOrder[location.pathname as keyof typeof navOrder], navOrder[prevPath as keyof typeof navOrder]);

			return navOrder[location.pathname as keyof typeof navOrder] > navOrder[prevPath as keyof typeof navOrder] ? 1 : -1;
		}
		// 세부 페이지 이동시
		return currPage > prevPage ? 1 : -1;
	};

	const AppAni = {
		init: (direction: number) => ({
			x: `${direction * -100}%`,
			opacity: 0,
			transition: { type: 'spring', stiffness: 120, damping: 20 },
		}),
		animate: {
			x: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 120, damping: 20 },
		},
	} as const;

	return (
		<main className="flex flex-col h-screen font-pre">
			{!hideHeaderAndFooter && <Header />}
			<div
				className={`flex-1 overflow-y-auto max-w-[980px] w-full mx-auto scrollbar-hide ${
					!hideHeaderAndFooter ? 'pb-[60px]' : ''
				}`}>
				{shouldAnimate ? (
					<AnimatePresence mode="wait" custom={getAnimationDirection()}>
						<motion.div
							key={location.pathname}
							custom={getAnimationDirection()}
							initial="init"
							animate="animate"
							exit="exit"
							variants={AppAni}>
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
