import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import UnderlineText from '@components/UnderlineText';
import img from '@assets/images/onboarding_3.png';

import Button from '@components/Button';
import useLoginStore from '@stores/useLoginStore';
import useNetwork from '@stores/networkStore';

export default function InputID() {
	const navigate = useNavigate();

	const { id, nickname, setId } = useLoginStore();
	const httpInterface = useNetwork((state) => state.httpInterface);

	const [showDuplicateError, setShowDuplicateError] = useState(false);

	const handleNext = () => {
		console.log('click');
		console.log('현재 id:', id);
		console.log('현재 nickname:', nickname);

		if (!id.trim()) {
			console.log('아이디 입력 안됨');
			return;
		}

		const signupData = { username: nickname, userLoginId: id };
		console.log('요청 데이터:', signupData);

		httpInterface
			.signup(signupData)
			.then((response) => {
				console.log('API 응답:', response);
				navigate('/onboarding/finish');
			})
			.catch((error) => {
				console.error('API 에러:', error);
				if (error.response?.status === 409) {
					setShowDuplicateError(true);
				}
			});
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-gray-50">
			<div className="flex flex-col items-center mt-52">
				<p className="text-center font-medium text-2xl text-black">
					<UnderlineText text="아이디" />를 입력해주세요
				</p>
				<input
					type="text"
					placeholder="아이디 입력"
					value={id}
					onChange={(e) => setId(e.target.value)}
					className="w-[334px] h-12 mt-12 bg-[#F4F4F4] rounded-[10px] focus:outline-none text-center px-4 caret-transparent
					text-lg font-medium text-black placeholder:text-gray-400"
				/>
			</div>

			{/* Bottom Button */}
			<Button text="회원가입" onClick={handleNext} className="fixed bottom-5 left-1/2 transform -translate-x-1/2" />

			{showDuplicateError && <div>이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.</div>}
		</div>
	);
}
