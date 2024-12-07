import IconMailbox from '@assets/svg/mailbox.svg?react';
import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';

export default function Announcements() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconMailbox />} title="공지" />
			<div className="flex flex-col pt-10">
				<div className="text-xl font-bold pb-2">1. 사용 안내</div>
				<p>
					사용하는 방법에 대한 내용 안내글. 사용하는 방법에 대한 내용 안내글.사용하는 방법에 대한 내용 안내글. 사용하는
					방법에 대한 내용 안내글.사용하는 방법에 대한 내용 안내글. 사용하는 방법에 대한 내용 안내글.사용하는 방법에
					대한 내용 안내글. 사용하는 방법에 대한 내용 안내글.사용하는 방법에 대한 내용 안내글. 사용하는 방법에 대한 내용
					안내글.
				</p>
			</div>
			<div className="flex flex-col pt-10">
				<div className="text-xl font-bold pb-2">2. 위치 정보에 대한 설명</div>
				<p>
					사용하는 방법에 대한 내용 안내글. 사용하는 방법에 대한 내용 안내글.사용하는 방법에 대한 내용 안내글. 사용하는
					방법에 대한 내용 안내글.사용하는 방법에 대한 내용 안내글. 사용하는 방법에 대한 내용 안내글.사용하는 방법에
					대한 내용 안내글. 사용하는 방법에 대한 내용 안내글.사용하는 방법에 대한 내용 안내글. 사용하는 방법에 대한 내용
					안내글.
				</p>
			</div>
			<div className="flex flex-col pt-10">
				<div className="text-xl font-bold pb-2">3. 수집한 위치 정보</div>
				<p>복지 패스 발급 이후 일괄 삭제될 예정</p>
			</div>
		</PageContainer>
	);
}
