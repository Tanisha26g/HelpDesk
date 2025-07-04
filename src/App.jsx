import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NewTicket from "./pages/NewTicket";
import ForgotPassword from "./pages/ForgotPassword";
import OperationsDashboard from "./pages/OperationsDashboard";
import TechnicalDashboard from "./pages/TechnicalDashboard";
import StudentTickets from "./pages/StudentTickets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/operations" element={<OperationsDashboard />} />
      <Route path="/technical" element={<TechnicalDashboard />} />
      <Route path="/NewTicket" element={<NewTicket />} />
      <Route path="/student-tickets" element={<StudentTickets />} />
    </Routes>
  );
}

export default App;
