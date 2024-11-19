import IconMan from '@assets/svg/man.svg?react';
import IconStar from '@assets/svg/star.svg?react';
import IconRecent from '@assets/svg/recent.svg?react';
import IconMailbox from '@assets/svg/mailbox.svg?react';
import IconWand from '@assets/svg/wand.svg?react';
import IconKey from '@assets/svg/key.svg?react';
import IconArrow from '@assets/svg/arrow.svg?react';
import { ReactNode } from 'react';

interface IconWrapperProps {
	children: ReactNode;
	className?: string;
}

function IconWrapper({ children, className = '' }: IconWrapperProps) {
	return <div className={`w-[24px] h-[24px] flex justify-center items-center ${className}`}>{children}</div>;
}

export default function MyPage() {
	return (
		<div className="h-full w-full px-10">
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
					<div className="border-r-2 flex justify-center align-center p-1">
						<IconWrapper className="mr-3">
							<IconStar />
						</IconWrapper>
						복지 즐겨찾기
					</div>
					<div className="flex justify-center align-center p-1">
						<IconWrapper className="mr-3">
							<IconRecent />
						</IconWrapper>
						최근에 본 복지
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="grid">
					<div className="border-b-2 h-20 flex items-center justify-between">
						<div className="flex">
							<IconWrapper className="mr-6">
								<IconMailbox />
							</IconWrapper>
							공지
						</div>
						<IconWrapper>
							<IconArrow />
						</IconWrapper>
					</div>
					<div className="border-b-2 h-20 flex items-center justify-between">
						<div className="flex">
							<IconWrapper className="mr-6">
								<IconWand />
							</IconWrapper>
							가이드북
						</div>
						<IconWrapper>
							<IconArrow />
						</IconWrapper>
					</div>
					<div className="h-20 flex items-center justify-between">
						<div className="flex">
							<IconWrapper className="mr-6">
								<IconKey />
							</IconWrapper>
							개인정보 및 보안
						</div>
						<IconWrapper>
							<IconArrow />
						</IconWrapper>
					</div>
				</div>
			</div>
		</div>
	);
}
