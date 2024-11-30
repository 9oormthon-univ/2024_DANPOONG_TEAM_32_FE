import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Picker from 'react-mobile-picker';

import UnderlineText from '@components/UnderlineText';

import IconMyLocation from '@assets/svg/prev.svg?react';
import Button from '@components/Button';
import useCreateCardInfoStore from '@stores/useCreateCardInfoStore';

export default function SelectInterest() {
	const navigate = useNavigate();

	const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

	const { interest, setInterest } = useCreateCardInfoStore();

	const interestOptions = {
		interest: ['일자리 분야', '주거 분야', '복지, 문화 분야', '교육 분야', '참여, 권리 분야'],
	};

	// interest의 초기값을 interestOptions의 첫 번째 값으로 설정
	useEffect(() => {
		if (!interest) {
			setInterest(interestOptions.interest[0]);
		}
	}, [interest, setInterest]);

	// 다음 버튼 클릭 핸들러
	const handleNext = () => {
		navigate('/create-welfare-card/select-loading'); // 다음 화면으로 이동
	};

	// Picker 값의 타입 정의
	const value = { interest: interest };
	const handleChange = (newValue: { interest: string }) => {
		setInterest(newValue.interest);
	};

	return (
		<div className="flex flex-col items-center justify-between h-screen bg-white">
			<div className="w-full bg-white px-5 pt-5">
				<IconMyLocation className="w-[20px] h-[20px] cursor-pointer" onClick={() => navigate(-1)} />
			</div>
			<div className="flex flex-col items-center h-full mt-20 bg-white px-4">
				<div className="flex flex-col text-center font-medium my-10">
					<h2 className="text-2xl text-black">
						<UnderlineText text="관심주제" />를 입력해주세요!
					</h2>
				</div>
				<div
					className="w-[334px] h-[53px] bg-[#F4F4F4] rounded-lg flex items-center justify-center text-black text-2xl"
					onClick={() => setIsInfoWindowOpen(true)}>
					{interest}
				</div>
				<Button
					text="다음으로 넘어가기"
					onClick={handleNext}
					className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-theme-main hover:bg-[#3A4E6F]"
				/>
			</div>

			<AnimatePresence>
				{isInfoWindowOpen && (
					<motion.div
						className="absolute z-[51] bottom-0 left-0 h-[300px] rounded-t-2xl w-full bg-[#FFFFFF] p-4 drop-shadow-[2px_2px_4px_#000000]"
						initial={{ y: '100%' }}
						animate={{ y: 0 }}
						exit={{ y: '100%' }}
						transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
						<div className="flex justify-between items-center mb-4">
							<div></div>
							<button onClick={() => setIsInfoWindowOpen(false)} className="text-gray-500">
								완료
							</button>
						</div>
						<Picker value={value} onChange={handleChange}>
							{Object.keys(interestOptions).map((name) => (
								<Picker.Column key={name} name={name}>
									{interestOptions[name].map((option) => (
										<Picker.Item key={option} value={option}>
											{option}
										</Picker.Item>
									))}
								</Picker.Column>
							))}
						</Picker>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
