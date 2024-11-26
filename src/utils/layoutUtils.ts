export const shouldHideHeaderAndFooter = (pathname: string) => {
	if (pathname === '/youth-map/map') return false;

	// /youth-map으로 시작하는 모든 경로에 대해 true 반환
	return (
		pathname.startsWith('/youth-map') ||
		pathname.startsWith('/onboarding') ||
		pathname.startsWith('/create-welfare-card') ||
		pathname.startsWith('/login')
	);
};
