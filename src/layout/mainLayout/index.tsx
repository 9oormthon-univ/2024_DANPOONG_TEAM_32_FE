import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';

export default function MainLayout() {
	return (
		<main className="flex flex-col h-screen">
			<Header />
			<div className="flex-1 overflow-y-auto max-w-[980px] w-full mx-auto pb-[60px]">
				<Outlet />
			</div>
			<Footer />
		</main>
	);
}
