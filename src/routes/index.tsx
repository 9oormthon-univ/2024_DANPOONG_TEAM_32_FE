import { useRoutes } from 'react-router-dom';
import mainRoutes from '@routes/mainRoutes';

export default function Routes() {
	return useRoutes([mainRoutes()]);
}
