import IconCalendar from '@assets/svg/calendar.svg?react';

export default function Calendar() {
	const today = new Date();

	return (
		<div className="relative flex items-center justify-center w-8 h-8">
			{/* 날짜 텍스트 */}
			<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] font-tmon text-sm font-bold text-black select-none text-theme-main">
				{today.getDate()}
			</span>
			{/* 캘린더 아이콘 */}
			<IconCalendar className="w-full h-full" />
		</div>
	);
}
