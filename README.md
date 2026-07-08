# DefectRail FE

Inspection AI 검사 결과를 lot 단위로 추적하고, 불량 유형/리뷰 큐/성능 분석 흐름을 제공하는 제조 품질 대시보드입니다.

## 주요 화면

- `/dashboard`: lot 품질 현황, 설비 점수, 불량 추세
- `/lots/[id]`: lot 상세, 불량 비율, 시간대별 추이
- `/review-queue`: 작업자 재검수 큐
- `/performance-lab`: 쿼리 최적화 evidence 페이지

## 기술 스택

- Next.js App Router
- React, TypeScript
- ky REST client
- request id 기반 API 호출

## 실행

```bash
npm install
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1 npm run dev
```

## 검증

```bash
npm run typecheck
npm run verify
npm run build
```

## 포트폴리오 포인트

DefectRail FE는 Inspection AI 결과를 단순 로그가 아니라 lot, machine, defect type, time 축으로 탐색하는 제품 화면으로 구성했습니다. 백엔드가 꺼져 있어도 데모 데이터로 UI 흐름을 확인할 수 있습니다.
