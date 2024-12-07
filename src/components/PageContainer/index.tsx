import { ReactNode } from 'react';

interface PageConatinerPrpps {
	children: ReactNode;
}

export default function PageContainer({ children }: PageConatinerPrpps) {
	return <div className="h-full w-full px-5 pb-6 overflow-y-scroll scrollbar-hide">{children}</div>;
}
