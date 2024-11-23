import { useNavigate } from 'react-router-dom';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_3.png';

import Button from '@components/Button';
import useLoginStore from '@stores/useLoginStore';

export default function InputID() {
	const navigate = useNavigate();

	const { id, setId } = useLoginStore();

	const handleNext = () => {
		navigate('/onboarding/fourth');
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			<div className="flex flex-col items-center mt-52">
				<p className="text-center font-medium text-2xl text-black">
					<UnderlineText text="아이디" />를 입력해주세요
				</p>
				<input
					type="text"
					value={id}
					onChange={(e) => setId(e.target.value)}
					className="w-[334px] h-12 mt-12 bg-[#F4F4F4] rounded-[10px] focus:outline-none text-center px-4 caret-transparent
					text-lg font-medium text-black placeholder:text-gray-400"
				/>
			</div>

			{/* Bottom Button */}
			<Button text="다음" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />
		</div>
	);
}
