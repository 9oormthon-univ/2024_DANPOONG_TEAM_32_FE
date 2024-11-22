import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import IconMan from '@assets/svg/man.svg?react';
import IconStar from '@assets/svg/star.svg?react';
import IconRecent from '@assets/svg/recent.svg?react';
import IconMailbox from '@assets/svg/mailbox.svg?react';
import IconWand from '@assets/svg/wand.svg?react';
import IconKey from '@assets/svg/key.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';
import PageContainer from '@components/PageContainer';

interface IconWrapperProps {
	children: ReactNode;
	className?: string;
}

function IconWrapper({ children, className = '' }: IconWrapperProps) {
	return <div className={`w-8 h-8 flex justify-center items-center ${className}`}>{children}</div>;
}

export default function MyPage() {
	const navigate = useNavigate();

	return (
		<PageContainer>
			<div className="flex flex-col items-center pt-10">
				<div className="flex justify-center items-center m-2">
					<IconMan />
				</div>
				<div className="text-xl">
					<span className="font-bold text-2xl">김유스</span>&nbsp;님
				</div>
				<div className="text-[#979797]">@kimyo</div>
			</div>
			<div className="mt-10">
				<div className="border border-2 rounded-xl grid grid-cols-2 py-3">
					<div className="border-r-2 flex justify-center items-center p-1">
						<IconWrapper className="mr-3">
							<IconStar />
						</IconWrapper>
						<div>복지 즐겨찾기</div>
					</div>
					<div className="flex justify-center items-center p-1">
						<IconWrapper className="mr-3">
							<IconRecent />
						</IconWrapper>
						<div>최근에 본 복지</div>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="grid">
					<div
						onClick={() => navigate('/my-page/announcements')}
						className="border-b-2 h-20 flex items-center justify-between cursor-pointer">
						<div className="flex items-center">
							<IconWrapper className="mr-6">
								<IconMailbox />
							</IconWrapper>
							<div className="font-bold">공지</div>
						</div>
						<IconWrapper>
							<IconArrowRight />
						</IconWrapper>
					</div>
					<div
						onClick={() => navigate('/my-page/guidebook')}
						className="border-b-2 h-20 flex items-center justify-between cursor-pointer">
						<div className="flex items-center">
							<IconWrapper className="mr-6">
								<IconWand />
							</IconWrapper>
							<div className="font-bold">가이드북</div>
						</div>
						<IconWrapper>
							<IconArrowRight />
						</IconWrapper>
					</div>
					<div
						onClick={() => navigate('/my-page/privacy-security')}
						className="h-20 flex items-center justify-between cursor-pointer">
						<div className="flex items-center">
							<IconWrapper className="mr-6">
								<IconKey />
							</IconWrapper>
							<div className="font-bold">개인정보 및 보안</div>
						</div>
						<IconWrapper>
							<IconArrowRight />
						</IconWrapper>
					</div>
				</div>
			</div>
		</PageContainer>
	);
}
