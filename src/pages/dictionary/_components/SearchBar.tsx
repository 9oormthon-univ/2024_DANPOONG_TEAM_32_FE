import IconMagnifyingGlass from '@assets/svg/magnifying-glass.svg?react';

export default function SearchBar() {
	return (
		<div className="flex justify-center">
			<div className="relative w-[85%]">
				<input type="text" className="w-full border border-theme-gray rounded-3xl px-4 py-2.5" />
				<IconMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2" />
			</div>
		</div>
	);
}
