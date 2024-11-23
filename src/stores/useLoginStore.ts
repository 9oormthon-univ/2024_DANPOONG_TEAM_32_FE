import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LoginStoreType {
	nickname: string;
	id: string;
	setNickname: (nickname: string) => void;
	setId: (id: string) => void;
}

const useLoginStore = create<LoginStoreType>()(
	devtools(
		// persist(
		(set) => ({
			nickname: '김유스',
			id: '',
			setNickname: (nickname: string) => set({ nickname }),
			setId: (id: string) => set({ id }),
		}),
		{ name: 'login' },

		// ),
	),
);

export default useLoginStore;
