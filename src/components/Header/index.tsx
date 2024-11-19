import logo from '@assets/images/logo.png';

export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white px-4 py-2 shadow-md h-15">
			<div className="flex justify-between items-center">
				{/* 왼쪽 로고 영역 */}
				<div className="flex items-center gap-2 ml-3">
					<img className="w-[35px] h-[35px]" src={logo} alt="" />
				</div>

				{/* 오른쪽 날짜 영역 */}
				<div className="flex items-center mr-3">
					<div className="bg-gray-200 text-blue-700 font-semibold rounded-md px-2 py-1 flex items-center">
						<span className="text-sm">17</span>
					</div>
				</div>
			</div>
		</header>
	);
}
