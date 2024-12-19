# 유맵 <img src="https://github.com/user-attachments/assets/53c426eb-9082-4fa3-b7bc-062537cfbd4c" align=left width=100>

> 당신의 관공서 메이트, 

<br/><br/>

<img width="100%" src="https://github.com/user-attachments/assets/c2f5524f-253e-4be5-b045-b970982959ce">

<br/><br/>

## 💁‍♂️ 서비스 소개
<img src="https://github.com/user-attachments/assets/ecc36a3e-5842-4037-aae3-8488166d071f" width="100%">

<br/><br/>

## 🎈Developers

| PM | DE | FE | FE | BE | BE |
| --- | --- | --- | --- | --- | --- |
| <img src="https://github.com/tkfkdtkfkdgoyo.png" width="200"/> | <img src="https://github.com/Jay17-design.png" width="200"/> | <img src="https://github.com/kosssshhhh.png" width="200"/> | <img src="https://github.com/JIUUOO.png" width="200"/> | <img src="https://github.com/hyundong-L.png" width="200"/> | <img src="https://github.com/ReasOon.png" width="200"/> |
| 조맑음 | 유은재 | 고석환 | 민지우 | 이현동 | 이유진 |
| [@tkfkdtkfkdgoyo](https://github.com/tkfkdtkfkdgoyo) | [@Jay17-design](https://github.com/Jay17-design) | [@kosssshhhh](https://github.com/kosssshhhh) | [@JIUUOO](https://github.com/JIUUOO) | [@hyundong-L](https://github.com/hyundong-L) | [@ReasOon](https://github.com/ReasOon) |


<br/><br/>

## 🎈 기획 배경

<img src="https://github.com/user-attachments/assets/aa7629a6-dbce-4c76-8f1a-2532eaac5734" width="100%">
<img src="https://github.com/user-attachments/assets/8c047e21-1e8a-41cf-838e-24ef6a10d2e0" width="100%">
<img src="https://github.com/user-attachments/assets/913affc3-3d96-4307-8b45-5ab7e0f2b63f" width="100%">

<br/><br/>

## ✨ 주요 기능

<img src="https://github.com/user-attachments/assets/7932f3c2-154c-40fd-adc1-9fb179b6c83c" width="100%">
<img src="https://github.com/user-attachments/assets/68024a07-bd11-4049-8d08-9032a52b0c63" width="100%">
<img src="https://github.com/user-attachments/assets/5abe2924-7d01-4971-836d-52171befa397" width="100%">

<br/><br/>

## 📹 시연

🔗 https://www.youtube.com/watch?v=csPvDX7mj1g

<br/><br/>

## 🛠️ 아키텍처

<img src="https://github.com/user-attachments/assets/9ecf2483-401b-4e9e-881a-d2c137d3f6c4" width="100%">
<img src="https://github.com/user-attachments/assets/7deb9464-7a6d-4d32-93b6-9ae0d397c7bf" width="100%">
<img src="https://github.com/user-attachments/assets/c0aea999-78e1-4a64-bcb5-e873b545c847" width="100%">

<br/><br/>

|<img src="https://github.com/user-attachments/assets/aa7629a6-dbce-4c76-8f1a-2532eaac5734">|<img src="https://github.com/user-attachments/assets/8c047e21-1e8a-41cf-838e-24ef6a10d2e0">|<img src="https://github.com/user-attachments/assets/913affc3-3d96-4307-8b45-5ab7e0f2b63f">|
|:--:|:--:|:--:|
|`기획 배경`|`문제 제시`|`솔루션`|




## 📂 프론트엔드 디렉토리 구조

```
📦 프로젝트 루트
├── public                # 정적 파일 디렉토리
│   └── ...               # 서비스 워커, 이미지 등 정적 자원
├── src                   # 소스 코드 디렉토리
│   ├── api               # API 호출 및 클라이언트 설정 관련 코드
│   │   ├── http          # ky HTTP 클라이언트 모듈화
│   │   ├── queryClient   # React Query 클라이언트 설정
│   │   └── ...
│   ├── assets            # 이미지, 폰트, SVG 등 정적 자산
│   │   └── ...
│   ├── components        # 재사용 가능한 UI 컴포넌트
│   │   ├── Header.tsx    # 헤더 컴포넌트
│   │   ├── Footer.tsx    # 푸터 컴포넌트
│   │   └── ...
│   ├── hooks             # 커스텀 훅 정의
│   │   └── useExample.ts # 예제 커스텀 훅
│   ├── layout            # 레이아웃 관련 컴포넌트
│   │   ├── MainLayout.tsx  # 메인 레이아웃
│   │   └── ...
│   ├── mocks             # MSW를 사용한 목킹 데이터 및 설정
│   │   ├── browser.ts    # MSW 브라우저 설정
│   │   └── handlers.ts   # API 목킹 핸들러
│   ├── pages             # 라우트에 매핑되는 페이지 컴포넌트
│   │   ├── Home.tsx      # 홈 페이지
│   │   └── ...
│   ├── routes            # 라우터 설정 파일
│   │   └── mainRoutes.tsx# 라우트 정의
│   ├── store             # 전역 상태 관리 관련 코드
│   │   └── useStore.ts   # Zustand 기반 상태 관리 훅
│   ├── types             # TypeScript 타입 정의
│   │   └── common.ts     # 공통 타입
│   ├── utils             # 유틸리티 함수 모음
│   │   └── helpers.ts    # 헬퍼 함수
│   └── main.tsx          # 애플리케이션 진입점
├── package.json          # 프로젝트 설정 및 종속성 관리 파일
├── vite.config.ts        # Vite 설정 파일
├── tsconfig.json         # TypeScript 설정 파일
└── README.md             # 프로젝트 설명서
```

---

## 📦 프론트엔드 주요 라이브러리 및 버전

| 라이브러리               | 버전    | 설명                                          |
| ------------------------ | ------- | --------------------------------------------- |
| react                    | 18.3.1  | 인터페이스를 구축하기 위한 라이브러리         |
| react-dom                | 18.3.1  | React 컴포넌트의 DOM 렌더링 도구              |
| react-router-dom         | 6.28.0  | React 기반의 라우팅 라이브러리                |
| @tanstack/react-query    | 5.60.5  | 서버 상태 관리를 위한 라이브러리              |
| zustand                  | 5.0.1   | 간단하고 빠른 전역 상태 관리 라이브러리       |
| ky                       | 1.7.2   | HTTP 요청을 간결하게 처리하는 클라이언트      |
| lodash                   | 4.17.21 | 데이터 조작을 위한 유틸리티 라이브러리        |
| tailwindcss              | 3.4.15  | 유틸리티 기반의 CSS 프레임워크                |
| msw                      | 2.6.5   | API Mocking 라이브러리                        |
| vite                     | 5.4.10  | 빠르고 가벼운 빌드 도구                       |
| typescript               | 5.6.2   | 정적 타입 체크 및 향상된 코드 품질 제공       |
| @vitejs/plugin-react-swc | 3.5.0   | Vite에서 React를 SWC로 빌드하기 위한 플러그인 |

---
