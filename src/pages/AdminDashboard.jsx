export default function AdminDashboard() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white shadow rounded p-6">Manage Tickets</div>
          <div className="bg-white shadow rounded p-6">User Reports</div>
          <div className="bg-white shadow rounded p-6">System Stats</div>
        </div>
      </div>
    );
  }
  