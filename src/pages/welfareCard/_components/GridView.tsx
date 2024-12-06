import { Dispatch, SetStateAction } from 'react';
import { WelfareCardType } from './WelfareCard';

interface GridViewProps {
	cards: WelfareCardType[];
	setGridView: Dispatch<SetStateAction<boolean>>;
	setId: Dispatch<SetStateAction<number>>;
	setIndex: Dispatch<SetStateAction<number>>;
}

export default function GridView({ cards, setGridView, setId, setIndex }: GridViewProps) {
	console.log(cards);

	return (
		<>
			{cards.map((card, index) => (
				<div
					key={index}
					onClick={() => {
						setIndex(index);
						setId(card.id);
						setGridView(false);
					}}
					className="flex justify-center items-center cursor-pointer">
					{card.element}
				</div>
			))}
		</>
	);
}
