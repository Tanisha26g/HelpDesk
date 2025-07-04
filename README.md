# 🛠️ Helpdesk Ticketing System (Frontend Prototype)

This is a **React + Vite** based frontend-only prototype of a **Helpdesk Ticketing System** built using **JavaScript** and styled with **CSS**.  
It features role-based dashboard navigation and a basic UI for login, ticket management, and modal popups.

---

## 👤 Created By

**Tanisha Gupta**

---

## 🔑 Login Role Mapping

The system auto-detects the user role based on the entered **email** on the Sign In page and redirects to the respective dashboard accordingly:

| Email Example                  | Redirects To                     |
| ------------------------------ | -------------------------------- |
| `admin@helpdesk.com`           | Admin Dashboard (`/admin`)       |
| `operations@helpdesk.com`      | Operations Team (`/operations`)  |
| `techsupport@helpdesk.com`     | Technical Support (`/technical`) |
| _Any other email (e.g. student)_ | Student Dashboard (`/student`)   |

---

## ✅ Features Implemented

### 🔹 Sign In / Sign Up / Forgot Password Pages
- Clean layout with form validation
- Email-based role routing
- Custom styling (no Tailwind used)

### 🔹 Student Dashboard (`/student`)
- Header, Sidebar, Footer layout
- Ticket Statistics section
- "My Tickets" page with:
  - Search & pagination
  - Rating with 5 golden stars
  - Clickable Ticket No. opens modal with full details

---

## 🧩 Note

- **Only the Student Dashboard** is implemented as a working example.
- Other dashboards (Admin, Operations, Technical Support) are visually and structurally similar and can be replicated easily using the same layout system.
- This project serves as a front-end prototype for UI/UX demonstration and does not include backend integration.

---

## 🚀 Deployment

Hosted on **Vercel**:  
🔗 [https://your-vercel-project.vercel.app](https://your-vercel-project.vercel.app)  
_(replace with your actual link)_

---
