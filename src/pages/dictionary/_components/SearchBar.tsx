import IconMagnifyingGlass from '@assets/svg/magnifying-glass.svg?react';

export default function SearchBar() {
	return (
		<div className="flex justify-center">
			<div className="relative w-[85%]">
				<input type="text" className="w-full border border-theme-gray rounded-3xl px-4 py-2.5" />
				<IconMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2" />
			</div>
		</div>
	);
}

// TODO: 나중에 기능 생겼을 때, 재사용성 높은 구현
// import React from 'react';
// import IconMagnifyingGlass from '@assets/svg/magnifying-glass.svg?react';

// // Props 타입 정의
// interface SearchBarProps {
// 	value: string; // 입력 필드의 값
// 	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // 변경 이벤트 핸들러
// 	placeholder?: string; // placeholder 텍스트
// 	className?: string; // 외부 컨테이너의 추가 클래스
// 	iconClassName?: string; // 아이콘의 추가 클래스
// 	inputClassName?: string; // 입력 필드의 추가 클래스
// }
//
// const SearchBar: React.FC<SearchBarProps> = ({
// 	value,
// 	onChange,
// 	placeholder = 'Search...',
// 	className = '',
// 	iconClassName = '',
// 	inputClassName = '',
// }) => {
// 	return (
// 		<div className={`flex justify-center ${className}`}>
// 			<div className="relative w-[85%]">
// 				<input
// 					type="text"
// 					value={value}
// 					onChange={onChange}
// 					placeholder={placeholder}
// 					className={`w-full border border-theme-gray rounded-3xl px-4 py-2.5 ${inputClassName}`}
// 				/>
// 				<IconMagnifyingGlass className={`absolute right-4 top-1/2 -translate-y-1/2 ${iconClassName}`} />
// 			</div>
// 		</div>
// 	);
// };

// export default SearchBar;
