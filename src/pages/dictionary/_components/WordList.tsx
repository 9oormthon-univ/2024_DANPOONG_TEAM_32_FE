import { useNavigate } from 'react-router-dom';

import IconBookmarkActive from '@assets/svg/bookmark-active.svg?react';
import IconBookmarkInactive from '@assets/svg/bookmark-inactive.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';
import { DictionaryDataType } from '@type/wordData.type';
import Spinner from '@components/Spinner';

interface WordListProps {
	isLoading: boolean;
	data: {
		data: {
			content: DictionaryDataType[];
		};
	};
}

export default function WordList({ isLoading, data }: WordListProps) {
	const navigate = useNavigate();

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				data?.data.content.map(({ wordId, term, isBookmark, relatedWelfare }) => (
					<div
						key={wordId}
						onClick={() => navigate(`/dictionary/detail/${wordId}`)}
						className="flex justify-between border p-3 mb-2 rounded-2xl cursor-pointer">
						<div>
							<div className="flex">
								<div className="font-bold">{term}</div>
								<div>
									{isBookmark ? (
										<div className="flex justify-center items-center w-6 h-6">
											<IconBookmarkActive />
										</div>
									) : (
										<div className="flex justify-center items-center w-6 h-6">
											<IconBookmarkInactive />
										</div>
									)}
								</div>
							</div>
							<div className="pt-2">
								<div className={`inline-block ${relatedWelfare && 'border'} rounded-2xl bg-theme-select px-2`}>
									<span className="text-sm text-white">{relatedWelfare}</span>
								</div>
							</div>
						</div>
						<div className="flex items-center">
							<IconArrowRight />
						</div>
					</div>
				))
			)}
		</div>
	);
}
