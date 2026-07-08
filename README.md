# DefectRail FE

Next.js App Router portfolio frontend for Inspection AI lot quality operations.

## Run

```bash
npm install
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1 npm run dev
npm run verify
npm run typecheck
```

## Screens

- `/dashboard`: lot defect dashboard, surge lots, machine score.
- `/lots/[id]`: lot defect mix, hourly trend, inspection samples.
- `/review-queue`: operator re-inspection queue.
- `/performance-lab`: DB optimization evidence page.

## API Use

`src/features/defects/api.ts` uses `ky` with `x-request-id`.

- `GET /api/v1/lots`
- `GET /api/v1/lots/{id}/defect-summary`
- `GET /api/v1/defect-trends?groupBy=hour`
- `GET /api/v1/review-queue`

Mock fallback keeps the UI runnable before the backend starts.

## Portfolio Evidence

- React + TypeScript App Router routes for manufacturing quality workflows.
- REST-only integration, no GraphQL.
- URL-ready lot detail flow for resume screenshots.
- Performance lab page documents before/after query metrics.

## Resume Bullets

- Built a Next.js + TypeScript quality dashboard that groups Inspection AI results by lot, machine, defect type, and time.
- Connected dashboard, lot detail, review queue, and performance lab screens to REST APIs with a ky client and request IDs.
