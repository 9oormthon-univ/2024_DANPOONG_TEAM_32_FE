import OnboardingComponent from '@pages/onBoarding/_components/OnboardingComponent';
import OnboardingComponentSecond from '@pages/onBoarding/_components/OnboardingComponentSecond';
import OnboardingComponentThird from '@pages/onBoarding/_components/OnboardingComponentThird';
import OnboardingComponentFourth from '@pages/onBoarding/_components/OnboardingComponentFourth';
import OnboardingComponentFifth from '@pages/onBoarding/_components/OnboardingComponentFifth';
import InputNickname from '@pages/onBoarding/_components/InputNickname';
import InputID from '@pages/onBoarding/_components/InputID';
import OnboardingFinish from '@pages/onBoarding/_components/OnboardingFinish';

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
	{
		path: 'nickname',
		element: <InputNickname />,
	},
	{
		path: 'id',
		element: <InputID />,
	},
	{
		path: 'finish',
		element: <OnboardingFinish />,
	},
];

export default onboardingRoutes;
