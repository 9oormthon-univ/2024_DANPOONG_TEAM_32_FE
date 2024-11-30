import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import UnderlineText from '@components/UnderlineText';
import useAuthStore from '@stores/useAuthStore';

// 이미지 import
import slide1 from '@assets/images/onboarding.png';
import slide2 from '@assets/images/onboarding_2.png';
import slide3 from '@assets/images/onboarding_3.png';
import slide4 from '@assets/images/onboarding_4.png';
import slide5 from '@assets/images/onboarding_5.png';
import Button from '@components/Button';

declare global {
	interface Window {
		ReactNativeWebView: {
			postMessage: (message: string) => void;
		};
		Kakao: any;
	}
}

// 플랫폼 체크 함수 추가
const isReactNative = () => {
	return typeof window !== 'undefined' && window.ReactNativeWebView !== undefined;
};

export default function Login() {
	const { initKakao, login, logout, checkAuth, isAuthenticated } = useAuthStore();
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		// React Native 환경이 아닐 때만 Kakao SDK 초기화
		if (!isReactNative()) {
			initKakao();
		}

		if (isAuthenticated) {
			navigate('/home', { replace: true });
		}
	}, []);

	const handleLogin = () => {
		if (isReactNative()) {
			// React Native 환경일 때
			window.ReactNativeWebView.postMessage(
				JSON.stringify({
					type: 'KAKAO_LOGIN',
				}),
			);
		} else {
			// 웹 환경일 때
			window.Kakao.Auth.authorize({
				redirectUri: `${import.meta.env.VITE_REDIRECT_URI}`,
			});
		}
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
		// ... 나머지 슬라이드 내용은 동일하게 유지
	];

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div {...handlers} className="flex flex-col items-center justify-between h-screen bg-gray-50">
			{/* 기존 UI 코드는 그대로 유지 */}
			<div className="flex flex-col items-center">
				<div className="relative w-full overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
						{slides.map((slide, index) => (
							<img key={index} src={slide} alt={`slide ${index + 1}`} className="w-full h-auto" />
						))}
					</div>
				</div>
				{/* 나머지 UI 코드는 그대로 유지 */}
			</div>
			<Button
				text="카카오 로그인"
				icon="KakaoIcon"
				onClick={handleLogin}
				className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 !text-black font-light py-2 px-4 rounded-md text-lg"
			/>
		</div>
	);
}
