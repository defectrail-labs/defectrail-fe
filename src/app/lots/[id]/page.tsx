import { getLotSummary } from "@/features/defects";
import { StatusBadge } from "@/shared/components";

type Props = {
  params: Promise<{ id: string }>;
};

const LotDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const summary = await getLotSummary(id);

  return (
    <section className="page">
      <div className="hero">
        <h1>{summary.lot.lotNo}</h1>
        <p>
          {summary.lot.productName} · {summary.lot.machine} · {summary.lot.sampleCount.toLocaleString()} samples
        </p>
        <StatusBadge status={summary.lot.status} />
      </div>

      <div className="grid">
        <section className="panel">
          <h2>Defect mix</h2>
          <div className="bars">
            {summary.defectTypes.map((defect) => (
              <div className="bar-row" key={defect.type}>
                <span>{defect.type}</span>
                <div className="bar">
                  <span style={{ width: `${Math.min(defect.rate * 12, 100)}%` }} />
                </div>
                <span>{defect.rate}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Hourly trend</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Bucket</th>
                <th>Defect rate</th>
                <th>AI score</th>
              </tr>
            </thead>
            <tbody>
              {summary.trend.map((point) => (
                <tr key={point.bucket}>
                  <td>{point.bucket}</td>
                  <td>{point.defectRate.toFixed(1)}%</td>
                  <td>{point.score.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className="panel">
        <h2>Inspection samples</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Defect type</th>
              <th>Score</th>
              <th>AI label</th>
            </tr>
          </thead>
          <tbody>
            {summary.images.map((image) => (
              <tr key={image.imageId}>
                <td>{image.imageId}</td>
                <td>{image.defectType}</td>
                <td>{image.score.toFixed(2)}</td>
                <td>{image.aiLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default LotDetailPage;
