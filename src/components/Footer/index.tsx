import { useNavigate, useMatch } from 'react-router-dom';

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
	const navigate = useNavigate();

	return (
		<nav className="fixed bottom-0 z-50 left-0 w-full bg-white shadow-t-md h-[68px]">
			{/* 각 네비게이션 아이콘 */}
			<div className="min-w-[370px] max-w-[480px] flex justify-between items-center mx-auto px-3 py-2 grid grid-cols-5 gap-4">
				<button
					onClick={() => navigate('/home')}
					className={`flex flex-col items-center ${useMatch('/home/*') ? 'text-theme-main' : 'text-theme-gray'}`}>
					<div className="h-9 flex justify-center items-center">
						{/* 홈 경로 추가될 경우 예외처리 */}
						{useMatch('/home/*') ? <IconHomeActive /> : <IconHomeInactive />}
					</div>
					<span className="text-xs">홈</span>
				</button>
				<button
					onClick={() => navigate('/welfare-card')}
					className={`flex flex-col items-center ${
						useMatch('/welfare-card/*') ? 'text-theme-main' : 'text-theme-gray'
					}`}>
					<div className="h-9 flex justify-center items-center">
						{useMatch('/welfare-card/*') ? <IconWelfareCardActive /> : <IconWelfareCardInactive />}
					</div>
					<span className="text-xs">복지패스</span>
				</button>
				<div>
					<button
						onClick={() => navigate('/youth-map')}
						className="rounded-full w-20 h-20 absolute top-[-45%] left-[50%] translate-x-[-50%]">
						<div className="flex items-center justify-center">
							{useMatch('/youth-map/*') ? <IconYouthMapActive /> : <IconYouthMapInactive />}
						</div>
					</button>
				</div>
				<button
					onClick={() => navigate('/dictionary')}
					className={`flex flex-col items-center ${useMatch('/dictionary/*') ? 'text-theme-main' : 'text-theme-gray'}`}>
					<div className="h-9 flex justify-center items-center">
						{useMatch('/dictionary/*') ? <IconDictionaryActive /> : <IconDictionaryInactive />}
					</div>
					<span className="text-xs">용어사전</span>
				</button>
				<button
					onClick={() => navigate('/my-page')}
					className={`flex flex-col items-center ${useMatch('/my-page/*') ? 'text-theme-main' : 'text-theme-gray'}`}>
					<div className="h-9 flex justify-center items-center">
						{useMatch('/my-page/*') ? <IconMyPageActive /> : <IconMyPageInactive />}
					</div>
					<span className="text-xs">마이페이지</span>
				</button>
			</div>
		</nav>
	);
}
