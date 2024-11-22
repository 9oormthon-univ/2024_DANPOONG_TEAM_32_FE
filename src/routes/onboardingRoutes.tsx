import OnboardingComponent from '@pages/onBoarding/_components/OnboardingComponent';
import OnboardingComponentSecond from '@pages/onBoarding/_components/OnboardingComponentSecond';
import OnboardingComponentThird from '@pages/onBoarding/_components/OnboardingComponentThird';
import OnboardingComponentFourth from '@pages/onBoarding/_components/OnboardingComponentFourth';
import OnboardingComponentFifth from '@pages/onBoarding/_components/OnboardingComponentFifth';

const onboardingRoutes = [
	{
		path: '',
		element: <OnboardingComponent />,
	},
	{
		path: 'second',
		element: <OnboardingComponentSecond />,
	},
	{
		path: 'third',
		element: <OnboardingComponentThird />,
	},
	{
		path: 'fourth',
		element: <OnboardingComponentFourth />,
	},
	{
		path: 'fifth',
		element: <OnboardingComponentFifth />,
	},
];

export default onboardingRoutes;
