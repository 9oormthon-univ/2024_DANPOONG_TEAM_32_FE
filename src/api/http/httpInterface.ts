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

	async getPublicOffices(params: {
		leftBottomLongitude: number;
		leftBottomLatitude: number;
		rightTopLongitude: number;
		rightTopLatitude: number;
	}) {
		return this.apiClient.get('public-offices/nearby', { searchParams: params });
	}

	async signup(params: { username: string; userLoginId: string }) {
		console.log('signup');
		return this.apiClient.post('/auth/signup', params);
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

	async updateBookmark(params: { word_id: number }) {
		return this.apiClient.patch(`word/bookmark/${params.word_id}`, { params });
	}

	async getWordBookmark(params: { page_num: number }) {
		return this.apiClient.get(`word/book-mark/${params.page_num}`);
	}

	async getWelfareByCategory(params: { policy_id: number }) {
		return this.apiClient.get(`policy/recommend?cardNum=${params.policy_id}`);
	}

	async postCreateWelfarePass(params: {
		birthDate: string;
		educationStatus: string;
		employmentStatus: string;
		baseInfo: string;
		interestTopic: string;
	}) {
		return this.apiClient.post('policy/path', params);
	}

	async getWelfarePass() {
		return this.apiClient.get('policy/path');
	}

	async getWelfareById(params: { policy_id: number }) {
		return this.apiClient.get(`policy/${params.policy_id}`);
	}
}
