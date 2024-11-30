import { useEffect, useState } from 'react';
import IconMagnifyingGlass from '@assets/svg/magnifying-glass.svg?react';
import { useFetchWordSearch } from '@hooks/dictionary/useFetchWordSearch';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
	type: string;
}

export default function SearchBar({ type }: SearchBarProps) {
	const [inputValue, setInputValue] = useState('');
	const [isSearchValid, setSearchValid] = useState(true);
	const { data, isLoading, isError, refetch } = useFetchWordSearch(type, inputValue);
	const navigate = useNavigate();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleSearchSubmit = async () => {
		const res = await refetch();

		if (res?.data?.data?.wordId) {
			navigate(`/dictionary/detail/${res.data.data.wordId}`);
		} else {
			setSearchValid(false);
			// alert('검색된 결과가 없어요');
		}
	};

	return (
		<div className="flex flex-col items-center">
			<div className="relative w-full">
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					className={`w-full border border-theme-gray rounded-3xl px-4 py-2.5 ${
						isSearchValid ? 'bg-white' : 'bg-theme-alert'
					}`}
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
