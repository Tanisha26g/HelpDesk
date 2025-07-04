import Layout from "../components/Layout";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  return (
    <Layout>
      <div className="student-dashboard">
        <h2 className="dashboard-heading">Dashboard</h2>
        <div className="stats-container">
          <div className="stat-box blue">
            <h3>Total Tickets</h3>
            <p>25</p>
          </div>
          <div className="stat-box green">
            <h3>Total Solved</h3>
            <p>15</p>
          </div>
          <div className="stat-box red">
            <h3>Awaiting Approval</h3>
            <p>5</p>
          </div>
          <div className="stat-box yellow">
            <h3>In Progress</h3>
            <p>5</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
