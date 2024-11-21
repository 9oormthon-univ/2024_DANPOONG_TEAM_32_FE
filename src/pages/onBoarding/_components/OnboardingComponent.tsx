import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding.png';

import Button from '@components/Button';

export default function OnboardingComponent() {
	const navigate = useNavigate();
	const handleNext = () => {
		navigate('/onboarding/2');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center">
				<img src={img} alt="Phone Mockup" className="w-full h-auto mb-6" />
				<h1 className="text-2xl font-bold text-theme-main mb-2">위치 기반 관공서 검색</h1>
				<p className="text-center text-gray-600 leading-relaxed">
					선택한 지역에 있는 <UnderlineText text="관공서의 정보" />를
					<br />
					한눈에 볼 수 있어요.
				</p>
				<p className="text-center text-gray-600 leading-relaxed">
					나만의 <UnderlineText text="복지 MBTI 검사" />를 통해
					<br />
					복지카드를 발급받을 수도 있답니다!
				</p>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
