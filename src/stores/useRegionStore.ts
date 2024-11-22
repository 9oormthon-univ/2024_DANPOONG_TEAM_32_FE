import { create } from 'zustand';

interface RegionStoreType {
	selectedRegion: string;
	selectedSubRegion: string;
	setSelectedRegion: (region: string) => void;
	setSelectedSubRegion: (subRegion: string) => void;
}

export const useRegionStore = create<RegionStoreType>((set) => ({
	selectedRegion: '',
	selectedSubRegion: '',
	setSelectedRegion: (region: string) => set({ selectedRegion: region }),
	setSelectedSubRegion: (subRegion: string) => set({ selectedSubRegion: subRegion }),
}));
