export default function RelatedWelfare({ value }: { value: string }) {
	return (
		<div className={`inline-block ${value && 'border py-0.5 px-2'} rounded-2xl bg-theme-select`}>
			<div className="flex justify-center items-center text-sm text-black">{value}</div>
		</div>
	);
}
