import IconWand from '@assets/svg/wand.svg?react';
import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';

export default function GuideBook() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconWand />} title="가이드북" />
			<div className="flex flex-col pt-10">
				<div className="text-xl font-bold pb-2">1. 복지 패스는 무엇인가요?</div>
				<p>
					유스맵에서 제공하는 복지 사업 추천 프로그램을 통한 복지 패스입니다. 해당 카드 정보에 따라서 필요한 청년 지원
					사업을 추천합니다
				</p>
			</div>
			<div className="flex flex-col pt-10">
				<div className="text-xl font-bold pb-2">2. 시사용어경제사전 사용</div>
				<p>
					시사 경제 용어 사전은 추후 퀴즈 기능까지 업데이트할 예정입니다. 경제 기사를 볼 때나 뉴스를 볼 때 헷갈리는
					단어가 있다면 검색을 통해 찾아보세요!
				</p>
			</div>
			<div className="flex flex-col pt-10">
				<div className="text-xl font-bold pb-2">3. 원클릭 신청도 되나요?</div>
				<p>지역 관공서와 협업이 체결된 이후 신청까지 가능하도록 할 예정입니다. </p>
			</div>
		</PageContainer>
	);
}
