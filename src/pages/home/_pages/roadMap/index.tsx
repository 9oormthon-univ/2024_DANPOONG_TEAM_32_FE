import { useNavigate } from 'react-router-dom';

import { roadmapCategory } from '@constants/roadmapCategory';

import IconArrowLeft from '@assets/svg/arrow-left.svg?react';
import Category from '@pages/home/_components/Category';
import UnderlineText from '@components/UnderlineText';
import PageContainer from '@components/PageContainer';

export default function RoadMap() {
	const navigate = useNavigate();

	return (
		<div className="w-full h-full">
			<div className="flex bg-white px-5 pt-8 pb-5 h-15 cursor-pointer" onClick={() => navigate(-1)}>
				<IconArrowLeft className="w-[20px] h-[20px]" />
			</div>
			<PageContainer>
				<div className="flex flex-col text-center font-medium my-10 mb-14">
					<h2 className="text-2xl text-black">테마별로 정리한</h2>
					<h2 className="text-2xl text-black">
						<UnderlineText text="청년 복지사업 로드맵" />
						이에요!
					</h2>
				</div>
				<div className="flex flex-col items-center space-y-8 mt-8">
					{roadmapCategory.map((category, index) => (
						<Category key={index} title={category.title} items={category.items} />
					))}
				</div>
			</PageContainer>
		</div>
	);
}
