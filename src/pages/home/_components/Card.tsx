import Icon from '@components/Icon';
import { IconName } from '@components/Icon';

interface CardProps {
	icon: IconName;
	title: string;
	bgColor: string;
}

export default function Card({ icon, title, bgColor }: CardProps) {
	const [firstLine, secondLine] = title.split('\n'); // Use '\n' for custom split
	return (
		<div className={`relative flex items-center justify-center w-[95px] h-[92px] rounded-[10px] ${bgColor}`}>
			{/* 타이틀 */}
			<div className="absolute top-2 left-2 text-[12px] font-bold text-gray-800">
				<p>{firstLine}</p>
				<p>{secondLine}</p>
			</div>
			{/* 아이콘 */}
			<div className="absolute bottom-1 right-1">
				<Icon name={icon} className="w-10 h-8" />
			</div>
		</div>
	);
}
