import LoadmapCard from '@pages/home/_components/LoadmapCard';
import WelfareCard from '@pages/home/_components/WelfareCard';

export default function HomeComponents() {
	return (
		<div className="flex flex-col w-full h-full items-center mt-12 gap-12 pb-20">
			{/* 로드맵 카드 */}
			<LoadmapCard />

			{/* 복지 카드 */}
			<WelfareCard />
		</div>
	);
}
