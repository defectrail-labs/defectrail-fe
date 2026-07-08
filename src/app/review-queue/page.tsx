import Link from "next/link";
import { getReviewQueue } from "@/features/defects";

const ReviewQueuePage = async () => {
  const queue = await getReviewQueue();

  return (
    <section className="page">
      <div className="hero">
        <h1>Review queue</h1>
        <p>Lots selected for operator re-inspection and shipping decision.</p>
      </div>

      <section className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Lot</th>
              <th>Reason</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={`/lots/${item.lotId}`}>{item.lotNo}</Link>
                </td>
                <td>{item.reason}</td>
                <td>{item.assignedTo}</td>
                <td>{item.status}</td>
                <td>
                  <button type="button">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default ReviewQueuePage;
