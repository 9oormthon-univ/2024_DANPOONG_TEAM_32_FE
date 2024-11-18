import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 3,
			// staleTime: 1000 * 60 * 5, // 5 minutes
			// cachetime: 1000 * 60 * 10, // 10 minutes
			// refetchInterval: false, // Set to a specific interval if needed
		},
	},
});

export default queryClient;
