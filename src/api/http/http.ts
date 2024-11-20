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
			// prefixUrl: 'https://localhost:3000/api', // Base URL
			prefixUrl: 'http://www.youthmap.site/api',
			headers: {
				'Content-Type': 'application/json',
			},
			timeout: 10000, // Timeout 설정 (ms)
			hooks: {
				beforeRequest: [
					(request) => {
						console.log(`Requesting: ${request.url}`);
					},
				],
			},
		});
	}

	async get(url: string, options?: Options) {
		return this.httpClient.get(url, options).json();
	}

	async post(url: string, data: any, options?: Options) {
		return this.httpClient.post(url, { json: data, ...options }).json();
	}

	async put(url: string, data: any, options?: Options) {
		return this.httpClient.put(url, { json: data, ...options }).json();
	}

	async delete(url: string, options?: Options) {
		return this.httpClient.delete(url, options).json();
	}
}
