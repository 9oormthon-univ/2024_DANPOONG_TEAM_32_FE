import Icon, { IconName } from '@components/Icon'; // Icon 컴포넌트와 IconName 타입을 가져옵니다.

interface ButtonProps {
	text: string; // 버튼에 표시할 텍스트
	onClick: () => void; // 클릭 핸들러
	className?: string; // 추가 스타일 클래스
	icon?: IconName; // 아이콘 이름
}

export default function Button({ text, onClick, className = '', icon }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`absolute w-[334px] h-[54px] py-3 px-6 bg-theme-main rounded-lg font-bold text-lg shadow-md text-white transition hover:bg-[#3A4E6F] flex items-center justify-center ${className}`}>
			{icon && <Icon name={icon} className="absolute left-4 w-6 h-6" />}
			{text}
		</button>
	);
}
