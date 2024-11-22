import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_4.png';

import Button from '@components/Button';

export default function OnboardingComponentFourth() {
	const navigate = useNavigate();
	const handleNext = () => {
		navigate('/onboarding/fifth');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center">
				<img src={img} alt="Phone Mockup" className="w-full h-auto mb-9" />
				<h1 className="text-2xl font-medium text-theme-main mb-2 font-yangjin">테마별 청년 정책 로드맵</h1>
				<p className="text-center text-gray-600 leading-relaxed">
					청년을 위한 다양한 테마가 준비되어 있어요!
					<br />
					원하는 테모를 골라
					<UnderlineText text="맞춤 복지 로드맵" />을 확인해보세요!
				</p>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
