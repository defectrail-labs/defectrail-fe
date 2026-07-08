import type { LotStatus } from "@/features/defects";

const labelByStatus: Record<LotStatus, string> = {
  shipping_hold: "Hold",
  review: "Review",
  released: "Released",
};

const classByStatus: Record<LotStatus, string> = {
  shipping_hold: "danger",
  review: "warning",
  released: "ok",
};

export const StatusBadge = ({ status }: { status: LotStatus }) => {
  return <span className={`badge ${classByStatus[status]}`}>{labelByStatus[status]}</span>;
};
