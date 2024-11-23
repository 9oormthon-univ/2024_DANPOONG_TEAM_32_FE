import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_5.png';

import Button from '@components/Button';

export default function OnboardingComponentFifth() {
	const navigate = useNavigate();
	const handleNext = () => {
		navigate('/onboarding/nickname');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center">
				<img src={img} alt="Phone Mockup" className="w-full h-auto mb-9" />
				<h1 className="text-2xl font-medium text-theme-main mb-2 font-yangjin">나만의 복지 서비스</h1>
				<p className="text-center text-gray-600 leading-relaxed">
					<UnderlineText text="즐겨찾기, 최근 본 복지, 공지, 가이드북" /> 등 원하는 정보를
					<br />
					한눈에 확인하고 관리할 수 있습니다.
				</p>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
