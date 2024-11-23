import Icon from '@components/Icon';

export default function Developing() {
	return (
		<div className="flex flex-col items-center justify-center h-full bg-white px-4">
			<div className="flex flex-col items-center justify-center mt-52">
				<h2 className="text-2xl text-black">기능 개발 중이에요...</h2>
				<h2 className="text-2xl text-black">기대해 주세요🥰</h2>
			</div>
			<Icon name="DevelopingIcon" className="mt-12" />
		</div>
	);
}
