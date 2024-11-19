/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			pre: ['Pretendard'],
		},
		extend: {
			keyframes: {
				fade: {
					'0%, 39%, 100%': { opacity: 0 },
					'40%': { opacity: 1 },
				},
			},
			animation: {
				fade: 'fade 1.2s infinite ease-in-out',
			},
			colors: {
				theme: {
					main: '#4B628A', // 메인 테마 색상
					select: '#B9E6E959', // 선택 색상
					selectBorder: '#B9E6E9',
					gray: '#F4F4F4', // 회색
					border: '#E8E8E8',
					white: '#FFFFFF', // 흰색
					tag: '#B9E6E9', // 태그 색상
				},
			},
		},
	},
	plugins: [],
};
