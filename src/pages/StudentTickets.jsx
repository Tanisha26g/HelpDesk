import Layout from "../components/Layout";
import "./StudentTickets.css";
import { useState } from "react";

const ticketsData = [
  {
    no: "1234",
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "13/08/21",
    name: "Tanisha",
    dept: "IT",
    description: "Unable to access the portal with correct credentials.",
    category: "Access Issue",
    type: "Bug",
    priority: "High",
    attachment: "screenshot1.png",
  },
  {
    no: "1124",
    subject: "New ticket issue",
    status: "On hold",
    support: "Operation Team",
    date: "14/08/21",
    name: "Rohan",
    dept: "Operations",
    description: "Issue in raising a new support ticket.",
    category: "Functionality",
    type: "Issue",
    priority: "Medium",
    attachment: "error_form.pdf",
  },
  {
    no: "1224",
    subject: "New request",
    status: "Closed",
    support: "Tech support",
    date: "13/08/21",
    name: "Neha",
    dept: "HR",
    description: "Requesting access to the recruitment system.",
    category: "Access Request",
    type: "Request",
    priority: "Low",
    attachment: "access_request.docx",
  },
  {
    no: "1244",
    subject: "Ticket submission",
    status: "In Progress",
    support: "Operation Team",
    date: "14/08/21",
    name: "Aryan",
    dept: "Finance",
    description: "Submission page not responding on ticket form.",
    category: "UI Bug",
    type: "Bug",
    priority: "High",
    attachment: "submission_issue.png",
  },
  {
    no: "1114",
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "03/08/21",
    name: "Kriti",
    dept: "Sales",
    description: "Login fails intermittently with session expired message.",
    category: "Login",
    type: "Intermittent Issue",
    priority: "Critical",
    attachment: "session_timeout_log.txt",
  },
];


export default function StudentTickets() {
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filtered = ticketsData.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
    ticket.no.includes(search)
  );

  return (
    <Layout role="student">
      <div className="tickets-container">
        <h2 className="tickets-heading">List of Ticket</h2>

        <div className="ticket-controls">
          <div>
            Show:
            <select className="ticket-select">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>{" "}
            Entries
          </div>

          <div className="ticket-search">
            Find ticket:
            <input
              type="text"
              placeholder="Search by Ticket No. or Subject"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Support by</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((ticket, index) => (
              <tr key={index}>
                <td>
                  <span
                    className="ticket-link"
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    {ticket.no}
                  </span>
                </td>
                <td>{ticket.subject}</td>
                <td>{ticket.status}</td>
                <td>{ticket.support}</td>
                <td>{ticket.date}</td>
                <td>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="ticket-footer">
          Showing 1 to {filtered.length} of {filtered.length} entries
        </div>

        {/* Popup Modal */}
        {selectedTicket && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Ticket Details</h3>
              <div className="modal-details">
                <p><b>Ticket No:</b> {selectedTicket.no}</p>
                <p><b>Date:</b> {selectedTicket.date}</p>
                <p><b>Name:</b> {selectedTicket.name}</p>
                <p><b>Dept:</b> {selectedTicket.dept}</p>
                <p><b>Title:</b> {selectedTicket.subject}</p>
                <p><b>Description:</b> {selectedTicket.description}</p>
                <p><b>Category:</b> {selectedTicket.category}</p>
                <p><b>Type:</b> {selectedTicket.type}</p>
                <p><b>Priority:</b> {selectedTicket.priority}</p>
                <p><b>Status:</b> {selectedTicket.status}</p>
                <p><b>Attachment:</b> {selectedTicket.attachment}</p>
              </div>
              <button className="close-btn" onClick={() => setSelectedTicket(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
