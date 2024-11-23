import { useState } from 'react';
import IconMagnifyingGlass from '@assets/svg/magnifying-glass.svg?react';
import { useFetchWordSearch } from '@hooks/dictionary/useFetchWordSearch';

interface SearchBarProps {
	inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSearchSubmit: (searchValue: string) => void;
	type: string;
}

export default function SearchBar({ inputHandler, onSearchSubmit, type }: SearchBarProps) {
	const [inputValue, setInputValue] = useState('');
	const { data, isLoading, isError, refetch } = useFetchWordSearch(type, inputValue);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		inputHandler(event);
	};

	const handleSearchSubmit = () => {
		onSearchSubmit(inputValue);
		refetch();
	};

	return (
		<div className="flex flex-col items-center">
			<div className="relative w-[85%]">
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					className="w-full border border-theme-gray rounded-3xl px-4 py-2.5"
				/>
				<IconMagnifyingGlass
					onClick={handleSearchSubmit}
					className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
				/>
			</div>
			<div className="mt-4"></div>
		</div>
	);
}
