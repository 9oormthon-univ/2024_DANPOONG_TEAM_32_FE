import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import UnderlineText from '@components/UnderlineText';
import useAuthStore from '@stores/useAuthStore';

// 이미지 import
import slide1 from '@assets/images/onboarding-1.png';
import slide2 from '@assets/images/onboarding-2.png';
import slide3 from '@assets/images/onboarding-3.png';
import slide4 from '@assets/images/onboarding-4.png';
import slide5 from '@assets/images/onboarding-5.png';
import Button from '@components/Button';

export default function Login() {
	const { initKakao, isAuthenticated } = useAuthStore();
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		initKakao();

		if (isAuthenticated) {
			navigate('/home', { replace: true });
		}
	}, [isAuthenticated]);

	const handleKakaoLogin = () => {
		const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
		const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
		const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

		window.location.href = kakaoAuthUrl;
	};

	// 이미지 배열
	const slides = [slide1, slide2, slide3, slide4, slide5];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		trackMouse: true,
	});

	// 슬라이드 내용 배열
	const slideContents = [
		{
			title: '위치 기반 관공서 검색',
			paragraphs: (
				<>
					<p className="text-center text-gray-600 leading-relaxed">
						선택한 지역에 있는 <UnderlineText text="관공서의 정보" />를
						<br />
						한눈에 볼 수 있어요.
					</p>
					<p className="text-center mt-3 text-gray-600 leading-relaxed">
						나만의 <UnderlineText text="복지 MBTI 검사" />를 통해
						<br />
						복지카드를 발급받을 수도 있답니다!
					</p>
				</>
			),
		},
		{
			title: '시사경제 용어 사전',
			paragraphs: (
				<>
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
				</>
			),
		},
		{
			title: '나만의 복지카드',
			paragraphs: (
				<>
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
				</>
			),
		},
		{
			title: '테마별 청년 정책 로드맵',
			paragraphs: (
				<>
					<p className="text-center text-gray-600 leading-relaxed">
						청년을 위한 다양한 테마가 준비되어 있어요!
						<br />
						원하는 테마를 골라
						<UnderlineText text="맞춤 복지 로드맵" />을 확인해보세요!
					</p>
				</>
			),
		},
		{
			title: '나만의 복지 서비스',
			paragraphs: (
				<>
					<p className="text-center text-gray-600 leading-relaxed">
						<UnderlineText text="즐겨찾기, 최근 본 복지, 공지, 가이드북" /> 등 원하는 정보를
						<br />
						한눈에 확인하고 관리할 수 있습니다.
					</p>
				</>
			),
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div {...handlers} className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* Center Content */}
			<div className="flex flex-col items-center">
				<div className="flex justify-center overflow-x-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
						{slides.map((slide, index) => (
							<div key={index} className="min-w-full flex justify-center items-center pointer-events-none">
								<img src={slide} />
							</div>
						))}
					</div>
				</div>
				{/* 슬라이드 인디케이터 */}
				<div className="flex space-x-2 my-5">
					{slides.map((_, index) => (
						<div
							key={index}
							className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-theme-main' : 'bg-theme-gray'}`}></div>
					))}
				</div>
				{/* 슬라이드 내용 */}

				<h1 className="text-2xl font-medium text-theme-main my-2 font-yangjin">{slideContents[currentSlide].title}</h1>
				{slideContents[currentSlide].paragraphs}
			</div>
			<Button
				text="카카오 로그인"
				icon="KakaoIcon"
				onClick={handleKakaoLogin}
				className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#FEE500] !text-black font-light py-2 px-4 rounded-md text-lg hover:bg-[#FEE500]"
			/>
		</div>
	);
}
