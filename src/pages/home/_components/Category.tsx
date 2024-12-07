import Card from './Card';
import { IconName } from '@components/Icon';
import IconBar from '@assets/svg/bar.svg?react';

interface CategoryProps {
	title: string;
	items: { icon: IconName; title: string; bgColor: string }[];
}

export default function Category({ title, items }: CategoryProps) {
	return (
		<div className="w-full flex flex-col items-center">
			{/* Title */}

			<h2 className="text-[19px] font-bold ">{title}</h2>

			<IconBar className="w-[80%] mt-2 mb-5" />
			{/* Item List */}
			<div className="grid grid-cols-3 gap-4 w-[95%]">
				{items.map((item, index) => (
					<Card key={index} icon={item.icon} title={item.title} bgColor={item.bgColor} />
				))}
			</div>
		</div>
	);
}
