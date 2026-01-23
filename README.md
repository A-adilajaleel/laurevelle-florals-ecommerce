# Laurevelle Florals – Enterprise-Inspired Frontend E-commerce Platform

**Live Demo:** https://laurevelle-florals-ecommerce.vercel.app/  
**Status:** Frontend Complete | Backend-Ready Architecture

Laurevelle Florals is a **frontend-first, production-style e-commerce platform** built with **React** and **Tailwind CSS**.  
It demonstrates **role-based access, admin/user workflows, modular state management, and scalable architecture** — all without a backend.

---

## Architecture Highlights

### Role-Based Access (Admin & User)
- Supports **Admin** and **User** roles.
- Custom route guards (`ProtectedRoute` and `AdminRoute`) ensure secure access to dashboards and internal tools.
- Mirrors real-world frontend security practices and can integrate seamlessly with backend authentication.

### Modular State Management
- Uses **focused React Contexts** instead of heavy state libraries:
  - **UserContext** – authentication state and roles  
  - **ProductContext** – inventory management with seeded mock data  
  - **CartContext** – cart logic, quantities, pricing, and localStorage persistence  
  - **OrderContext** – simulates order placement and status updates
- Designed for **readability, scalability, and easy extension**.

### Frontend-Only Data Simulation
- All products, users, and categories are initialized from a `data.js` file.
- Supports **instant deployment** without backend dependencies.
- Persistent cart and order history are synced with `localStorage`.

---

## Design & User Experience
- Mobile-first responsive layouts
- Clean spacing, typography, and subtle hover/transition effects
- Reusable components for product cards, buttons, and modals
- Tailwind CSS ensures polished, maintainable styling

---

## Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React (Hooks, ES6+) |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| State | Context API |
| Notifications | React Hot Toast |

---

## Key Features

### Admin
- Create, update, and manage products
- Control order statuses (Placed → Shipped → Delivered → Cancelled)
- Review customer messages and custom floral requests

### User
- Browse products by category
- Persistent cart with localStorage sync
- Submit custom floral orders
- View order history and complete checkout flow

---

## Project Scope
- **Frontend-only** by design, with in-memory data management.
- Codebase is structured to allow **backend integration (REST API, Firebase, etc.)** without refactoring.
- Demonstrates **real-world application architecture** suitable for production.

---

## Run Locally

```bash
git clone https://github.com/A-adilajaleel/laurevelle-florals-ecommerce
cd laurevelle-florals-ecommerce
npm install
npm start
