import { Outlet, useLocation } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { shouldHideHeaderAndFooter } from '@utils/layoutUtils';

export default function MainLayout() {
	const location = useLocation();
	const hideHeaderAndFooter = shouldHideHeaderAndFooter(location.pathname);

	return (
		<main className="flex flex-col h-screen font-pre">
			{!hideHeaderAndFooter && <Header />}
			<div className="flex-1 overflow-y-auto max-w-[980px] w-full mx-auto pb-[60px]">
				<Outlet />
			</div>
			{!hideHeaderAndFooter && <Footer />}
		</main>
	);
}
