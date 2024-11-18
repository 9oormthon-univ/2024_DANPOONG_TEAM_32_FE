# 청년을 위한 맞춤 정책 - 온청

청년을 위한 지역별 복지사업 추천 서비스

<br/>

## 📂 프로젝트 디렉토리 구조

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

## 📦 주요 라이브러리 및 버전

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
