import Layout from "../components/Layout";
import "./NewTicket.css";

export default function NewTicket() {
  return (
    <Layout>
      <div className="new-ticket-container">
        <h2 className="ticket-heading">Create New Ticket</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Ticket No.</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Subject</label>
          <input type="text" />
        </div>

        <div className="form-row split-section">
          <div className="form-left">
            <div className="form-group">
              <label>Category</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Type</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-right">
            <div className="form-group description-box">
              <label>Description</label>
              <textarea rows="11"></textarea>
              <button className="attachment-btn">📎 Attach</button>
            </div>
          </div>
        </div>

        <div className="form-row submit-section">
          <label>
            <input type="checkbox" />
            I’m not a robot
          </label>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </Layout>
  );
}
