import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CreateCardInfoType {
	birth: { year: string; month: string; day: string };
	education: string;
	employ: string;
	basic: string;
	interest: string;
	setBirth: (birth: { year: string; month: string; day: string }) => void;
	setEducation: (education: string) => void;
	setEmploy: (employ: string) => void;
	setBasic: (basic: string) => void;
	setInterest: (interest: string) => void;
}

const useCreateCardInfoStore = create<CreateCardInfoType>()(
	devtools(
		(set) => ({
			birth: {
				year: '2000',
				month: '01',
				day: '01',
			},
			education: '고졸 예정',
			employ: '',
			basic: '',
			interest: '',
			setBirth: (birth: { year: string; month: string; day: string }) => set({ birth }),
			setEducation: (education: string) => set({ education }),
			setEmploy: (employ: string) => set({ employ }),
			setBasic: (basic: string) => set({ basic }),
			setInterest: (interest: string) => set({ interest }),
		}),
		{ name: 'createCardInfo' },
	),
);

export default useCreateCardInfoStore;
