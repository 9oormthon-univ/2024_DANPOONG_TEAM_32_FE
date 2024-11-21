import PageContainer from '@components/PageContainer';
// import SearchBar from '@pages/dictionary/_components/SearchBar'; // 필요 시 활성화
import LoadmapCard from './_components/LoadmapCard';
import WelfareCard from './_components/WelfareCard';

export default function Home() {
	return (
		<PageContainer>
			<div className="flex flex-col w-full h-full items-center mt-12 gap-12">
				{/* 검색바 추가 가능 */}
				{/* <SearchBar /> */}

				{/* 로드맵 카드 */}
				<LoadmapCard />

				{/* 복지 카드 */}
				<WelfareCard />
			</div>
		</PageContainer>
	);
}
