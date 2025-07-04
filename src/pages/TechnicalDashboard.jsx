export default function TechnicalDasboard() {
return (
<div className="p-10">
    <h1 className="text-3xl font-bold text-green-800 mb-4">Technical Dashboard</h1>
    <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded p-6">My Tickets</div>
        <div className="bg-white shadow rounded p-6">Performance</div>
    </div>
</div>
);
}