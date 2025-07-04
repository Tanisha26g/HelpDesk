import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ role }) {
  const menuItems = {
    student: [
      { label: "📊 Dashboard", path: "/student" },
      { label: "➕ New Ticket", path: "/newticket" },
      { label: "🎫 My Ticket", path: "/student-tickets" },
    ],
    admin: [
      { label: "📊 Dashboard", path: "/admin" },
      { label: "🗄️ Database", path: "/admin-database" },
      { label: "⚙️ Setting", path: "/admin-setting" },
      { label: "📜 User Log History", path: "/admin-log" },
    ],
    operation: [
      { label: "📊 Dashboard", path: "/operation" },
      { label: "✅ Ticket Approval", path: "/ticket-approval" },
      { label: "🎫 My Ticket", path: "/operation-tickets" },
      { label: "📈 Performance", path: "/operation-performance" },
    ],
    technical: [
      { label: "📊 Dashboard", path: "/technical" },
      { label: "🎫 My Ticket", path: "/technical-tickets" },
      { label: "📈 Performance", path: "/technical-performance" },
      { label: "🛠️ Technical Supports", path: "/tech-support" },
    ],
  };

  const links = menuItems[role] || [];

  return (
    <div className="sidebar">
      {links.map((item, index) => (
        <Link key={index} to={item.path} className="menu-item">
          {item.label}
        </Link>
      ))}
    </div>
  );
}
