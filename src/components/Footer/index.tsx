import { Link, useLocation } from 'react-router-dom';

import IconHomeActive from '@assets/svg/home-active.svg?react';
import IconHomeInactive from '@assets/svg/home-inactive.svg?react';
import IconWelfareCardActive from '@assets/svg/welfare-card-active.svg?react';
import IconWelfareCardInactive from '@assets/svg/welfare-card-inactive.svg?react';
import IconDictionaryActive from '@assets/svg/dictionary-active.svg?react';
import IconDictionaryInactive from '@assets/svg/dictionary-inactive.svg?react';
import IconMyPageActive from '@assets/svg/my-page-active.svg?react';
import IconMyPageInactive from '@assets/svg/my-page-inactive.svg?react';
import IconYouthMapActive from '@assets/svg/youth-map-active.svg?react';
import IconYouthMapInactive from '@assets/svg/youth-map-inactive.svg?react';

export default function Footer() {
	const { pathname } = useLocation();

	return (
		<nav className="fixed bottom-0 z-50 left-0 w-full bg-white shadow-t-md">
			{/* 각 네비게이션 아이콘 */}
			<div className="max-w-[780px] flex justify-between items-center mx-auto px-4 py-2 grid grid-cols-5 gap-4">
				<Link
					to={'/'}
					className={`flex flex-col items-center ${pathname === '/' ? 'text-theme-main' : 'text-theme-gray'}`}>
					<div className="h-[36px] flex justify-center items-center">
						{pathname === '/' ? <IconHomeActive /> : <IconHomeInactive />}
					</div>
					<span className="text-xs">홈</span>
				</Link>
				<Link
					to={'/welfare-card'}
					className={`flex flex-col items-center ${
						pathname === '/welfare-card' ? 'text-theme-main' : 'text-theme-gray'
					}`}>
					<div className="h-[36px] flex justify-center items-center">
						{pathname === '/welfare-card' ? <IconWelfareCardActive /> : <IconWelfareCardInactive />}
					</div>
					<span className="text-xs">복지카드</span>
				</Link>
				<div>
					<Link to={'/youth-map'}>
						<div className="rounded-full w-20 h-20 absolute top-[-45%] left-[50%] translate-x-[-50%]">
							<div className="flex items-center justify-center">
								{pathname === '/youth-map' ? <IconYouthMapActive /> : <IconYouthMapInactive />}
							</div>
						</div>
					</Link>
				</div>
				<Link
					to={'/dictionary'}
					className={`flex flex-col items-center ${
						pathname === '/dictionary' ? 'text-theme-main' : 'text-theme-gray'
					}`}>
					<div className="h-[36px] flex justify-center items-center">
						{pathname === '/dictionary' ? <IconDictionaryActive /> : <IconDictionaryInactive />}
					</div>
					<span className="text-xs">용어사전</span>
				</Link>
				<Link
					to={'/my-page'}
					className={`flex flex-col items-center ${pathname === '/my-page' ? 'text-theme-main' : 'text-theme-gray'}`}>
					<div className="h-[36px] flex justify-center items-center">
						{pathname === '/my-page' ? <IconMyPageActive /> : <IconMyPageInactive />}
					</div>
					<span className="text-xs">마이페이지</span>
				</Link>
			</div>
		</nav>
	);
}
