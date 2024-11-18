import { http, HttpResponse } from 'msw';

const exampleHandler = [
	http.get('/data', () => {
		return HttpResponse.json({
			data: {
				status: 'SUCCESS',
			},
		});
	}),
];

export default exampleHandler;
