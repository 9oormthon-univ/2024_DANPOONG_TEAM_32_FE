interface ButtonProps {
	text: string; // 버튼에 표시할 텍스트
	onClick: () => void; // 클릭 핸들러
	className?: string; // 추가 스타일 클래스
}

export default function Button({ text, onClick, className = '' }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`w-[334px] h-[54px] py-3 px-6 bg-theme-main text-white rounded-lg font-bold text-lg shadow-md transition hover:bg-[#3A4E6F] ${className}`}>
			{text}
		</button>
	);
}
