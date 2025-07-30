#  Non-Communicable Diseases Charity Web App

A web application designed to **create awareness, gather support, and facilitate donations** towards eradicating communicable diseases in affected areas.
The app allows users to:

- Learn about the most prevalent communicable diseases
- Explore areas affected (with an interactive map)
- Leave reviews and suggestions on how they want to help
- Donate to support specific areas
- For **Admins**: Manage users, diseases, and affected areas (CRUD operations)

---

##  Features

### Public Features
- **Landing Page** – Overview of the platform with login/register options
- **Login & Register** – Create an account and access the dashboard
- **Hero Section** – Engaging UI with project goals
- **Diseases Page** – List of the most prevalent diseases (links to external resources)
- **Areas Page** – Areas most affected, displayed with an **interactive map**

### Authenticated Users
- Access a personal **Dashboard**
- **Submit Reviews** – Share suggestions on how to help
- **Make Donations** – Support specific areas

### Admin Panel
- **CRUD on Diseases and Areas**
- **Manage Users** – Add users, assign roles (user/admin)
- Restricted access to `/admin`

---

##  Technologies Used

- **Frontend:** React + Vite
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Maps:** React-Leaflet + OpenStreetMap
- **Styling:** Custom CSS (Glassmorphism + Responsive Design)
- **Backend:** (Your backend technology here, e.g., Flask, Node.js)
- **Authentication:** Token-based auth (localStorage)

---

## 🧑 How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ncd-charity-webapp.git
cd ncd-charity-webapp