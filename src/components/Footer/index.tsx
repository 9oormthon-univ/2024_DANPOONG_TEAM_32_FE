export default function Footer() {
	return (
		<nav className="fixed bottom-0 z-50 left-0 w-full bg-white shadow-t-md">
			{/* 각 네비게이션 아이콘 */}
			<div className="max-w-[780px] flex justify-between items-center mx-auto px-4 py-2">
				<button className="flex flex-col items-center text-gray-400 hover:text-blue-600 focus:text-blue-600">
					<span className="text-2xl">🏠</span>
					<span className="text-sm"></span>
				</button>
				<button className="flex flex-col items-center text-gray-400 hover:text-blue-600 focus:text-blue-600">
					<span className="text-2xl">📜</span>
					<span className="text-sm"></span>
				</button>
				<div className="relative">
					<button className="flex items-center justify-center bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg">
						📖
					</button>
				</div>
				<button className="flex flex-col items-center text-gray-400 hover:text-blue-600 focus:text-blue-600">
					<span className="text-2xl">📚</span>
					<span className="text-sm"></span>
				</button>
				<button className="flex flex-col items-center text-gray-400 hover:text-blue-600 focus:text-blue-600">
					<span className="text-2xl">👤</span>
					<span className="text-sm"></span>
				</button>
			</div>
		</nav>
	);
}
