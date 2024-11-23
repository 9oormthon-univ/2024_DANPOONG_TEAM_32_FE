import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_2.png';

import Button from '@components/Button';
import Icon from '@components/Icon';

export default function OnboardingFinish() {
	const navigate = useNavigate();
	const handleNext = () => {
		navigate('/');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen p-6 bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center my-auto ">
				<Icon name="OnboardingFinishIcon" className="w-[180px] h-[180px] animate-celebration" />

				<p className="text-center mt-3 font-medium text-xl text-gray-600 leading-relaxed">
					자, 이제 유맵을 위한 준비가 완료되었어요. <br /> 나에게 딱 맞는 복지 찾으러 가볼까요?
				</p>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
