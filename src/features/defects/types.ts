export type LotStatus = "shipping_hold" | "review" | "released";

export type Lot = {
  id: string;
  lotNo: string;
  productSku: string;
  productName: string;
  machine: string;
  startedAt: string;
  defectRate: number;
  sampleCount: number;
  status: LotStatus;
};

export type DefectSummary = {
  lot: Lot;
  defectTypes: Array<{ type: string; count: number; rate: number }>;
  trend: Array<{ bucket: string; defectRate: number; score: number }>;
  images: Array<{ imageId: string; defectType: string; score: number; aiLabel: string }>;
};

export type Dashboard = {
  lots: Lot[];
  machineScores: Array<{ machine: string; score: number; defectRate: number }>;
  topDefects: Array<{ type: string; count: number; rate: number }>;
};

export type ReviewQueueItem = {
  id: string;
  lotId: string;
  lotNo: string;
  reason: string;
  status: "open" | "approved" | "rejected";
  assignedTo: string;
  createdAt: string;
};

export type Trend = {
  group: string;
  defectRate: number;
  sampleCount: number;
};
