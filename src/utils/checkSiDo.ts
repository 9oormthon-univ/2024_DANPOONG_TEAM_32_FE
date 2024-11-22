export const checkSiDo = (region: string) => {
	console.log('지역: ' + region);

	return region == '서울' || region == '부산' ? region + '시' : region + '도';
};
