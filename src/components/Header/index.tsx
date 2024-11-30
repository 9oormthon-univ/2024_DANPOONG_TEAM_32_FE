import logo from '@assets/images/logo.png';
import Calendar from '@components/Calendar';

export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white px-4 py-2 h-15">
			<div className="flex justify-between items-center">
				{/* 왼쪽 로고 영역 */}
				<div className="flex items-center gap-2 ml-3">
					<img className="w-[35px] h-[35px]" src={logo} alt="" />
				</div>

				{/* 오른쪽 날짜 영역 */}
				<div className="flex items-center mr-3">
					<Calendar />
				</div>
			</div>
		</header>
	);
}
