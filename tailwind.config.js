/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			pre: ['Pretendard'],
			tmon: ['TMONTium'],
			yangjin: ['Yangjin'],
		},
		extend: {
			dropShadow: {
				custom: '0px 0px 6px #B9E6E9',
			},
			keyframes: {
				fade: {
					'0%, 39%, 100%': { opacity: 0 },
					'40%': { opacity: 1 },
				},
				celebration: {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)' },
					'50%': { transform: 'scale(1.1) rotate(5deg)' },
				},
			},
			animation: {
				fade: 'fade 1.2s infinite ease-in-out',
				celebration: 'celebration 2s ease-in-out infinite',
			},
			colors: {
				theme: {
					main: '#4B628A', // 메인 테마 색상
					select: '#B9E6E9', // 선택 색상
					gray: '#D9D9D9', // 회색
					white: '#FFFFFF', // 흰색
					tag: '#B9E6E9', // 태그 색상
				},
			},
		},
	},
	plugins: [tailwindScrollbarHide],
};
