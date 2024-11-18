import { useFetchData } from './useFetchData';

export default function Home() {
	const { data, isLoading, isError } = useFetchData();
	console.log(data, isLoading, isError);

	return (
		<div className="h-full w-full">
			<h1>Home</h1>
		</div>
	);
}
