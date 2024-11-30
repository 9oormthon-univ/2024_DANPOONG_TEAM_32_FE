import { ReactNode } from 'react';

interface PageConatinerPrpps {
	children: ReactNode;
}

export default function PageContainer({ children }: PageConatinerPrpps) {
	return <div className="h-full w-full px-7 pb-10 overflow-y-scroll scrollbar-hide">{children}</div>;
}
