import Link from "next/link";
import { getDashboard } from "@/features/defects";
import { StatusBadge } from "@/shared/components";

const DashboardPage = async () => {
  const data = await getDashboard();
  const totalSamples = data.lots.reduce((sum, lot) => sum + lot.sampleCount, 0);
  const avgDefectRate = data.lots.reduce((sum, lot) => sum + lot.defectRate, 0) / data.lots.length;
  const holdCount = data.lots.filter((lot) => lot.status === "shipping_hold").length;

  return (
    <section className="page">
      <div className="hero">
        <h1>Lot defect dashboard</h1>
        <p>Inspection AI results grouped by lot, machine, defect type, and time.</p>
      </div>

      <div className="grid">
        <div className="card">
          <p className="muted">Inspected samples</p>
          <div className="metric">{totalSamples.toLocaleString()}</div>
        </div>
        <div className="card">
          <p className="muted">Average defect rate</p>
          <div className="metric">{avgDefectRate.toFixed(1)}%</div>
        </div>
        <div className="card">
          <p className="muted">Shipping holds</p>
          <div className="metric">{holdCount}</div>
        </div>
      </div>

      <div className="grid">
        <section className="panel">
          <h2>Surge lots</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Lot</th>
                <th>Machine</th>
                <th>Defect</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.lots.map((lot) => (
                <tr key={lot.id}>
                  <td>
                    <Link href={`/lots/${lot.id}`}>{lot.lotNo}</Link>
                  </td>
                  <td>{lot.machine}</td>
                  <td>{lot.defectRate.toFixed(1)}%</td>
                  <td>
                    <StatusBadge status={lot.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="panel">
          <h2>Machine score</h2>
          <div className="bars">
            {data.machineScores.map((machine) => (
              <div className="bar-row" key={machine.machine}>
                <span>{machine.machine}</span>
                <div className="bar">
                  <span style={{ width: `${machine.score * 100}%` }} />
                </div>
                <span>{machine.score.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default DashboardPage;
