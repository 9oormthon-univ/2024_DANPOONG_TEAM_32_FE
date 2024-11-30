import IconMainLogo from '@assets/svg/logo.svg?react';
import IconBookmark from '@assets/svg/bookmark.svg?react';
import Calendar from '@components/Calendar';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<header className="sticky top-0 z-50 bg-white px-7 py-2">
			<div className="flex justify-between items-center">
				{/* 왼쪽 로고 영역 */}
				<div className="flex justify-center items-center">
					<IconMainLogo className="w-10 h-10" />
				</div>

				{/* 오른쪽 날짜 영역 */}
				<div className="flex justify-center items-center w-10 h-10">
					{pathname.startsWith('/dictionary') ? (
						<IconBookmark onClick={() => navigate('/dictionary/bookmark')} />
					) : (
						<Calendar />
					)}
				</div>
			</div>
		</header>
	);
}
