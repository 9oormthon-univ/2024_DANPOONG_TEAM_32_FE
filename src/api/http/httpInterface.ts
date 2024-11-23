import { ICommunication } from './http';

export class HttpInterface {
	private defaultOptions: Record<string, any>;

	constructor(private apiClient: ICommunication) {
		this.apiClient = apiClient;
		this.defaultOptions = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
	}

	// 사용 예시
	// async getStyles(params: any) {
	// 	return this.apiClient.get('style/filter', { searchParams: params });
	// }

	async getPublicOffices(params: {
		leftBottomLongitude: number;
		leftBottomLatitude: number;
		rightTopLongitude: number;
		rightTopLatitude: number;
	}) {
		return this.apiClient.get('public-offices/nearby', { searchParams: params });
	}

	async getWordById(params: { word_id: number }) {
		return this.apiClient.get(`word/${params.word_id}`);
	}

	async getWordSearch(params: { type: string; word: string }) {
		return this.apiClient.get('word/search', { searchParams: params });
	}

	async getWordByCategory(params: { category: string; page_num: number }) {
		return this.apiClient.get(`word/category/${params.page_num}`, {
			searchParams: { category: params.category },
		});
	}

	async getWelfareByCategory(params: { policy_id: number }) {
		return this.apiClient.get(`policy/recommend?cardNum=${params.policy_id}`);
	}
}
