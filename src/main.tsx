import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import queryClient from '@api/queryClient.ts/queryClient.ts';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
	</QueryClientProvider>,
);
