import MyPage from '@pages/myPage/_components/MyPage';
import Announcements from '@pages/myPage/_components/Announcements';
import Guidebook from '@pages/myPage/_components/Guidebook';
import PrivacyAndSecurity from '@pages/myPage/_components/PrivacyAndSecurity';

const mypageRoutes = [
	{
		path: '',
		element: <MyPage />,
	},
	{
		path: 'announcements',
		element: <Announcements />,
	},
	{
		path: 'guidebook',
		element: <Guidebook />,
	},
	{
		path: 'privacy-security',
		element: <PrivacyAndSecurity />,
	},
];

export default mypageRoutes;
