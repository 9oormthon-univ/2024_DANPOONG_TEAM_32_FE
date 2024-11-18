import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { HttpInterface } from '@api/http/httpInterface';
import { Http } from '@api/http/http';

interface INetwork {
	httpInterface: HttpInterface;
}

const useNetwork = create<INetwork>()(
	devtools(
		// persist(
		() => ({
			httpInterface: new HttpInterface(new Http()),
		}),
		{ name: 'network' },
		// ),
	),
);

export default useNetwork;
