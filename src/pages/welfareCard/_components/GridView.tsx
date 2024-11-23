import { Dispatch, SetStateAction } from 'react';

interface Card {
	id: number;
	element: JSX.Element;
	path: string;
}

interface GridViewProps {
	cards: Card[];
	setGridView: Dispatch<SetStateAction<boolean>>;
	setId: Dispatch<SetStateAction<number>>;
	setIndex: Dispatch<SetStateAction<number>>;
}

export default function GridView({ cards, setGridView, setId, setIndex }: GridViewProps) {
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
