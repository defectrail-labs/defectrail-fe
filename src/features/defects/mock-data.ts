import type { Dashboard, DefectSummary, ReviewQueueItem, Trend } from "./types";

export const dashboard: Dashboard = {
  lots: [
    {
      id: "lot-2407-a",
      lotNo: "DR-2407-A",
      productSku: "CELL-8K",
      productName: "Battery Cell 8K",
      machine: "AOI-03",
      startedAt: "2026-07-08T02:00:00Z",
      defectRate: 6.8,
      sampleCount: 4210,
      status: "shipping_hold",
    },
    {
      id: "lot-2407-b",
      lotNo: "DR-2407-B",
      productSku: "CELL-8K",
      productName: "Battery Cell 8K",
      machine: "AOI-01",
      startedAt: "2026-07-08T05:00:00Z",
      defectRate: 2.1,
      sampleCount: 3880,
      status: "review",
    },
    {
      id: "lot-2407-c",
      lotNo: "DR-2407-C",
      productSku: "CAM-LENS",
      productName: "Camera Lens",
      machine: "AOI-02",
      startedAt: "2026-07-08T08:00:00Z",
      defectRate: 0.7,
      sampleCount: 6100,
      status: "released",
    },
  ],
  machineScores: [
    { machine: "AOI-01", score: 0.94, defectRate: 2.1 },
    { machine: "AOI-02", score: 0.98, defectRate: 0.7 },
    { machine: "AOI-03", score: 0.83, defectRate: 6.8 },
  ],
  topDefects: [
    { type: "scratch", count: 184, rate: 3.2 },
    { type: "contamination", count: 96, rate: 1.7 },
    { type: "edge_crack", count: 44, rate: 0.8 },
  ],
};

export const reviewQueue: ReviewQueueItem[] = [
  {
    id: "rq-1001",
    lotId: "lot-2407-a",
    lotNo: "DR-2407-A",
    reason: "scratch rate exceeded rule threshold",
    status: "open",
    assignedTo: "quality.ops",
    createdAt: "2026-07-08T09:20:00Z",
  },
  {
    id: "rq-1002",
    lotId: "lot-2407-b",
    lotNo: "DR-2407-B",
    reason: "machine score dropped below 0.9",
    status: "open",
    assignedTo: "line.lead",
    createdAt: "2026-07-08T09:42:00Z",
  },
];

export const trends: Trend[] = [
  { group: "08:00", defectRate: 1.8, sampleCount: 1200 },
  { group: "09:00", defectRate: 2.7, sampleCount: 1300 },
  { group: "10:00", defectRate: 6.8, sampleCount: 1710 },
];

export const lotSummary = (id: string): DefectSummary => ({
  lot: dashboard.lots.find((lot) => lot.id === id) ?? dashboard.lots[0],
  defectTypes: dashboard.topDefects,
  trend: trends.map((trend) => ({ bucket: trend.group, defectRate: trend.defectRate, score: 0.9 - trend.defectRate / 100 })),
  images: [
    { imageId: "img-8831", defectType: "scratch", score: 0.97, aiLabel: "defect" },
    { imageId: "img-8832", defectType: "contamination", score: 0.91, aiLabel: "defect" },
    { imageId: "img-8833", defectType: "none", score: 0.12, aiLabel: "normal" },
  ],
});
