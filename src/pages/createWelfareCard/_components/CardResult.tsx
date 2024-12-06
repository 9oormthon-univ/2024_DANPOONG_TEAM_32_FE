import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useLoginStore from '@stores/useLoginStore';
import { welfarePass } from '@constants/welfarePass';

import Button from '@components/Button';

export default function CardResult() {
	const navigate = useNavigate();
	const location = useLocation();
	const username = useLoginStore((state) => state.nickname);
	const [createdPass, setCreatedPass] = useState(null);

	const { policyPathNum } = location.state || {};

	useEffect(() => {
		console.log(policyPathNum);
	}, [policyPathNum]);

	useEffect(() => {
		if (policyPathNum !== undefined) {
			setCreatedPass(welfarePass[policyPathNum]);
		}
	}, [policyPathNum]);

	return (
		<div className="flex flex-col items-center justify-center h-full bg-white px-4 pt-36">
			<div className="flex flex-col items-center text-center font-medium mb-52">
				<h2 className="text-3xl text-black">
					<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">
						복지패스가 발급되었어요!
					</span>
				</h2>
				{createdPass && <div className="w-[285px] h-[433px] mt-12 animate-floating">{createdPass.element}</div>}
				{policyPathNum && <p>정책 경로 번호: {policyPathNum}</p>}
				<Button
					text="관련 복지 확인하기"
					onClick={() => navigate('/welfare-card')}
					className="fixed bottom-5 left-1/2 transform -translate-x-1/2"
				/>
			</div>
		</div>
	);
}
