import ky from "ky";
import { dashboard as mockDashboard, lotSummary, reviewQueue as mockReviewQueue, trends as mockTrends } from "./mock-data";
import type { Dashboard, DefectSummary, ReviewQueueItem, Trend } from "./types";

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1",
  headers: { "x-request-id": crypto.randomUUID() },
  timeout: 2500,
});

const getJson = async <T>(path: string, fallback: T): Promise<T> => {
  try {
    return await api.get(path).json<T>();
  } catch {
    return fallback;
  }
};

export const getDashboard = async (): Promise<Dashboard> => {
  return getJson("lots", mockDashboard);
};

export const getLotSummary = async (id: string): Promise<DefectSummary> => {
  return getJson(`lots/${id}/defect-summary`, lotSummary(id));
};

export const getReviewQueue = async (): Promise<ReviewQueueItem[]> => {
  return getJson("review-queue", mockReviewQueue);
};

export const getTrends = async (): Promise<Trend[]> => {
  return getJson("defect-trends?groupBy=hour", mockTrends);
};
