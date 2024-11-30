import { useNavigate } from 'react-router-dom';
import IconBookmarkActive from '@assets/svg/bookmark-active.svg?react';
import IconBookmarkInactive from '@assets/svg/bookmark-inactive.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';
import { DictionaryDataType } from '@type/wordData.type';
import RelatedWelfare from './RelatedWelfare';
import { useUpdateWordBookmark } from '@hooks/dictionary/useUpdateWordBookmark';
import { useState, useEffect } from 'react';

export default function WordItem({ wordId, term, isBookmark, relatedWelfare }: DictionaryDataType) {
	const navigate = useNavigate();
	const { mutateAsync } = useUpdateWordBookmark(wordId);
	const [isBookmarked, setBookmarked] = useState(isBookmark);

	useEffect(() => {
		setBookmarked(isBookmark);
	}, [isBookmark]);

	const handleBookmarkClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		setBookmarked((prev) => !prev);

		try {
			await mutateAsync({ word_id: wordId });
		} catch (err) {
			console.error(err);
			// 에러 발생 시 상태 롤백
			setBookmarked((prev) => !prev);
		}
	};

	return (
		<div
			onClick={() => navigate(`/dictionary/detail/${wordId}`)}
			className="flex justify-between border px-4 py-2.5 mb-3.5 rounded-2xl cursor-pointer">
			<div>
				<div className="flex">
					<div className="font-bold">{term}</div>
					<div onClick={handleBookmarkClick}>
						{isBookmarked ? (
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
					<RelatedWelfare value={relatedWelfare} />
				</div>
			</div>
			<div className="px-1 flex items-center">
				<IconArrowRight />
			</div>
		</div>
	);
}
