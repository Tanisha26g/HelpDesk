import "./Header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="left-text">Helpdesk</div>
      <div className="right-icons">
        <span className="icon">🌓</span>
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
        <span className="logout">Logout</span>
      </div>
    </div>
  );
}
