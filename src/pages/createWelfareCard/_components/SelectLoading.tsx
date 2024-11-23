import useCreateCardInfoStore from '@stores/useCreateCardInfoStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoadingScreen() {
	const navigate = useNavigate();

	// 불필요한 연산 방지

	const [loading, setLoading] = useState(true);

	const { birth, education, employ, basic, interest } = useCreateCardInfoStore();
	console.log(birth, education, employ, basic, interest);

	useEffect(() => {
		const fetchData = async () => {
			// const startTime = Date.now();
			// try {
			// 	await fetchKakaoAPI();
			// } catch (error) {
			// 	console.error('Failed to fetch Kakao API:', error);
			// } finally {
			// 	const elapsedTime = Date.now() - startTime;
			// 	const remainingTime = Math.max(2000 - elapsedTime, 0);
			// 	setTimeout(() => {
			// 		setLoading(false);
			// 		navigate('/youth-map/map', { replace: true });
			// 	}, remainingTime);
			// }
		};

		fetchData();
	}, [navigate]); // Proper dependencies

	return (
		<div className="flex flex-col items-center justify-center h-full bg-white px-4 mt-36">
			<div className="flex flex-col text-center font-medium mb-52">
				<h2 className="text-3xl text-black">
					<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">복지카드를</span>
				</h2>
				<h2 className="text-3xl text-black">고르는 중이에요..</h2>
			</div>
			{loading && <Spinner />}
		</div>
	);
}

function Spinner() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-8 h-8 border-4 border-theme-main border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}
