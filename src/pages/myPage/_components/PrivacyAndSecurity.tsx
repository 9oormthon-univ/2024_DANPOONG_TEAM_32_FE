import IconKey from '@assets/svg/key.svg?react';
import IconMan from '@assets/svg/man.svg?react';
import IconEditProfile from '@assets/svg/edit-profile.svg?react';
import PageNavbar from '@components/PageNavbar';
import PageContainer from '@components/PageContainer';

export default function PrivacyAndSecurity() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconKey />} title="개인정보 및 보안" />
			<div className="flex flex-col items-center pt-10">
				<div className="flex justify-center items-center m-2">
					<div>
						<IconMan />
						<div className="relative translate-x-[60px] translate-y-[-23px]" onClick={() => alert('프로필 사진 변경')}>
							<IconEditProfile className="cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="flex flex-col">
					<label htmlFor="name" className="text-xl font-bold">
						이름
					</label>
					<input
						id="name"
						type="text"
						placeholder={'김유스'}
						className="border border-1 border-theme-gray rounded-lg mt-2 p-3"
					/>
				</div>
				<div className="flex flex-col mt-10">
					<label htmlFor="id" className="text-xl font-bold">
						아이디
					</label>
					<input
						id="id"
						type="text"
						placeholder={'@kimyo'}
						className="border border-1 border-theme-gray rounded-lg mt-2 p-3"
					/>
				</div>
				<div className="mt-10">
					<p className="flex text-[#A3ADB7] text-sm">
						- 지역 관공서와 협업이 체결된 이후 신청까지 가능하도록 할 예정입니다. 그전에 유스맵은 오로지 유저에게 필요한
						지원 사업을 찾아주고, 핵심 정보만 제공하기에 세부적인 개인 정보 수집이 필요한 서비스가 아닙니다. 사용자의
						사용 편의를 위해서 이름은 선택적으로 입력하고, 그외에는 랜덤 닉네임을 부여합니다.
					</p>
					<p className="text-[#A3ADB7] text-sm mt-4">- 복지 카드 발급 이후 일괄 삭제될 예정</p>
				</div>
			</div>
		</PageContainer>
	);
}
