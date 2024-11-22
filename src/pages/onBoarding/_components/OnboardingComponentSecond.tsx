import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_2.png';

import Button from '@components/Button';

export default function OnboardingComponentSecond() {
	const navigate = useNavigate();
	const handleNext = () => {
		navigate('/onboarding/third');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center">
				<img src={img} alt="onboarding second image" className="w-full h-auto mb-9" />
				<h1 className="text-2xl font-medium text-theme-main mb-2 font-yangjin">시사경제 용어 사전</h1>
				<p className="text-center text-gray-600 leading-relaxed">
					복지 사업을 신청하려다가도
					<br />
					<UnderlineText text="어려운 용어" />가 많아 포기했던 지난날!
				</p>
				<p className="text-center mt-3 text-gray-600 leading-relaxed">
					이제는 <UnderlineText text="유맵의 용어 사전" />과 함께
					<br />
					똑똑하게 복지 챙겨요!
				</p>
				<p className="text-center mt-3 text-gray-600 leading-relaxed">북마크 기능으로 두고두고 볼 수 있어요!</p>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
