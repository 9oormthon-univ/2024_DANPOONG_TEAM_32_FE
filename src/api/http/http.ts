import ky, { KyInstance, Options } from 'ky';

export interface ICommunication {
	get(url: string, options?: Options): Promise<any>;
	post(url: string, data: any, options?: Options): Promise<any>;
	put(url: string, data: any, options?: Options): Promise<any>;
	delete(url: string, options?: Options): Promise<any>;
}

export class Http implements ICommunication {
	private httpClient: KyInstance;

	constructor() {
		this.httpClient = ky.create({
			prefixUrl: import.meta.env.VITE_API_PREFIX_URL,
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			timeout: 5000, // Timeout 설정 (ms)
			hooks: {
				beforeRequest: [
					(request) => {
						console.log(`Requesting: ${request.url}`);
						const accessToken = localStorage.getItem('accessToken');
						if (accessToken) {
							request.headers.set('Authorization', `Bearer ${accessToken}`);
						}
					},
				],
			},
		});
	}

	async get(url: string, options?: Options) {
		try {
			return await this.httpClient.get(url, options).json();
		} catch (error) {
			console.error('GET 요청 오류:', error);
			throw error;
		}
	}

	async post(url: string, data: any, options?: Options) {
		try {
			return await this.httpClient.post(url, { json: data, ...options }).json();
		} catch (error) {
			console.error('POST 요청 오류:', error);
			throw error;
		}
	}

	async put(url: string, data: any, options?: Options) {
		try {
			return await this.httpClient.put(url, { json: data, ...options }).json();
		} catch (error) {
			console.error('PUT 요청 오류:', error);
			throw error;
		}
	}

	async delete(url: string, options?: Options) {
		try {
			return await this.httpClient.delete(url, options).json();
		} catch (error) {
			console.error('DELETE 요청 오류:', error);
			throw error;
		}
	}
}
