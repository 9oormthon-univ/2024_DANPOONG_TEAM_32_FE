import PageContainer from '@components/PageContainer';
import LoadmapCard from '@pages/home/_components/RoadmapCard';
import WelfareCard from '@pages/home/_components/WelfareCard';

export default function HomeComponents() {
	return (
		<PageContainer>
			<div className="flex flex-col px-2 mt-5 gap-3">
				{/* 로드맵 카드 */}
				<LoadmapCard />

				{/* 복지 카드 */}
				<WelfareCard />
			</div>
		</PageContainer>
	);
}
