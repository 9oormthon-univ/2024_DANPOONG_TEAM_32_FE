import { DictionaryDataType } from '@type/wordData.type';
import Spinner from '@components/Spinner';
import WordItem from '@pages/dictionary/_components/WordItem';

interface WordListProps {
	isLoading: boolean;
	data: {
		data: {
			content: DictionaryDataType[];
		};
	};
}

export default function WordList({ isLoading, data }: WordListProps) {
	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			{data?.data?.content.map((word) => (
				<WordItem key={word.wordId} {...word} />
			))}
		</div>
	);
}
