import { ReactNode } from 'react';

interface PageConatinerPrpps {
	children: ReactNode;
}

export default function PageContainer({ children }: PageConatinerPrpps) {
	return <div className="h-full w-full px-6 pb-20 overflow-y-scroll scrollbar-hide">{children}</div>;
}
