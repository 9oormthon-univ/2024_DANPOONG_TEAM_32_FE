import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_3.png';

import Button from '@components/Button';

export default function OnboardingComponentThird() {
	const navigate = useNavigate();
	const handleNext = () => {
		navigate('/onboarding/fourth');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center">
				<img src={img} alt="onboarding third image" className="w-full h-auto mb-9" />
				<h1 className="text-2xl font-medium text-theme-main mb-2 font-yangjin">나만의 복지카드</h1>
				<p className="text-center text-gray-600 leading-relaxed">
					유스맵에서 발급받은 복지카드를
					<br />
					<UnderlineText text="한눈에 보고 관리" />할 수 있어요!
				</p>
				<p className="text-center mt-3 text-gray-600 leading-relaxed">
					복지 카드로 손쉽게 <UnderlineText text="내가 원하는 복지만" />
					<br />
					쏙쏙 골라 볼 수 있어요!
				</p>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
