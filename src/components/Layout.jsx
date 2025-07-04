import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children, role = "student" }) {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Sidebar role={role} />
        <div className="main-content">
          <div className="content-area">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
