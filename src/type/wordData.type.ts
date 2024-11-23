export interface WordDataType {
	content: DictionaryDataType[]; // content 배열로 수정
}

export interface DictionaryDataType {
	wordId: number; // id
	term: string; // 용어
	isBookmark: boolean; // 북마크 여부
	relatedWelfare: string; // 관련 복지
}
