import { Dispatch, SetStateAction } from 'react';

interface Card {
	element: JSX.Element;
	path: string;
}

interface GridViewProps {
	cards: Card[];
	setGridView: Dispatch<SetStateAction<boolean>>;
	setId: Dispatch<SetStateAction<number>>;
}

export default function GridView({ cards, setGridView, setId }: GridViewProps) {
	return (
		<>
			{cards.map((card, index) => (
				<div
					key={index}
					onClick={() => {
						setId(index);
						setGridView(false);
					}}
					className="flex justify-center items-center cursor-pointer">
					{card.element}
				</div>
			))}
		</>
	);
}
