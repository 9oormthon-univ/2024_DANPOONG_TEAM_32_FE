export default function Header() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-2 shadow-md">
			{/* 왼쪽 타이틀 영역 */}
			<div className="flex items-center gap-2">
				<span className="text-lg font-bold text-blue-700">온청</span>
				<div className="relative">
					<div className="absolute w-2 h-2 bg-blue-300 rounded-full top-0 -right-2 animate-bounce"></div>
				</div>
			</div>

			{/* 오른쪽 날짜 영역 */}
			<div className="flex items-center">
				<div className="bg-gray-200 text-blue-700 font-semibold rounded-md px-2 py-1 flex items-center">
					<span className="text-sm">17</span>
				</div>
			</div>
		</header>
	);
}
