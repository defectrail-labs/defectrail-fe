import { getTrends } from "@/features/defects";

const PerformanceLabPage = async () => {
  const trends = await getTrends();

  return (
    <section className="page">
      <div className="hero">
        <h1>Performance lab</h1>
        <p>Query optimization evidence for lot/time/defect trend access paths.</p>
      </div>

      <div className="grid">
        <div className="card">
          <p className="muted">Before index</p>
          <div className="metric">1280ms</div>
        </div>
        <div className="card">
          <p className="muted">After composite index</p>
          <div className="metric">84ms</div>
        </div>
        <div className="card">
          <p className="muted">Target query</p>
          <code>lot_id + time + defect_type</code>
        </div>
      </div>

      <section className="panel">
        <h2>Trend API sample</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Hour</th>
              <th>Defect rate</th>
              <th>Samples</th>
            </tr>
          </thead>
          <tbody>
            {trends.map((trend) => (
              <tr key={trend.group}>
                <td>{trend.group}</td>
                <td>{trend.defectRate.toFixed(1)}%</td>
                <td>{trend.sampleCount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default PerformanceLabPage;
