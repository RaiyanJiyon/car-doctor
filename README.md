# **Car Doctor**  
![Car Doctor Banner](https://i.ibb.co.com/5xM24N0R/project-banner.png)  

**Car Doctor** is a modern car service booking platform built with **Next.js**. It allows users to browse available car repair services, book appointments, manage their bookings, and securely authenticate using **Google** or **GitHub**.  

🚀 **Live Demo:** [Car Doctor](#)

---

## 📖 Table of Contents  

- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Installation](#installation)  
- [Configuration (.env)](#configuration-env)  
- [Usage](#usage)  
- [Authentication](#authentication)  
- [Routes](#routes)  
- [Live Demo & Repository](#live-demo--repository)  

---

<h2 id="features">✨ Features</h2>  

- **Service Listings** – Users can browse all available car repair services.  
- **Service Details Page** – View in-depth details about each service.  
- **Service Booking** – Users can book services by filling out a simple form.  
- **Booking Management** – View, update, and delete bookings in the **My Bookings** section.  
- **Authentication** – Secure login/register system with **Google & GitHub** OAuth.  
- **Responsive UI** – Fully mobile-friendly and optimized for all devices.  

---

<h2 id="technology-stack">🛠️ Technology Stack</h2>  

| Category           | Technologies Used |
|------------------|-----------------------------------------------------------|
| **Frontend** | Next.js (15.1.7), React (19), Tailwind CSS (3.4.1), React Icons, Swiper |
| **Backend** | Express.js (4.21.2), MongoDB (6.13.1) |
| **Authentication** | NextAuth.js (4.24.11) with Google & GitHub OAuth |
| **State Management** | React Hook Form |
| **Notifications** | React Toastify |
| **Hosting** | Vercel (for frontend), MongoDB Atlas (for database) |

---

<h2 id="installation">🛠 Installation</h2>  

### Prerequisites  

- **Node.js** (>= 18)  
- **MongoDB Atlas** (or local MongoDB instance)  

### Steps  

1. **Clone the repository**  
   ```sh  
   git clone https://github.com/RaiyanJiyon/car-doctor  
   cd car-doctor  
   ```  

2. **Install dependencies**  
   ```sh  
   npm install  
   ```  

3. **Set up environment variables** (see `.env.local` below)  

4. **Run the development server**  
   ```sh  
   npm run dev  
   ```  

---

<h2 id="configuration-env">⚙️ Configuration (.env)</h2>  

Create a `.env.local` file in the root directory and configure the following:  

```env  
# MongoDB  
NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string  

# NextAuth Configuration  
NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000  
NEXT_PUBLIC_NEXTAUTH_SECRET=your_nextauth_secret  

# Google OAuth  
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id  
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret  

# GitHub OAuth  
NEXT_PUBLIC_GITHUB_ID=your_github_client_id  
NEXT_PUBLIC_GITHUB_SECRET=your_github_client_secret  
```  

---

<h2 id="usage">🚀 Usage</h2>  

### Service Booking Flow  

1. Users browse available services on the **Home Page**.  
2. Clicking a service redirects them to the **Service Details Page**.  
3. On the **Service Details Page**, they can click the **Proceed to Checkout** button.  
4. The **Checkout Page** contains a form where they enter their **name, phone number, and an optional message**.  
5. After submitting the form, the service is booked, and they can view their bookings in the **My Bookings** section.  

### Booking Management  

- **View Bookings:** Users can see all their booked services in a table format.  
- **Update Bookings:** Users can edit their booking details using an **Update Booking Form**.  
- **Delete Bookings:** Users can remove bookings they no longer need.  

---

<h2 id="authentication">🔐 Authentication</h2>  

Car Doctor supports **NextAuth.js** for secure authentication. Users can register and log in using:  

- **Email & Password** (via Register/Login pages)  
- **Google OAuth**  
- **GitHub OAuth**  

---

<h2 id="routes">📌 Routes</h2>  

| Route | Description |
|-------------|-----------------------------------------------------------|
| `/` | Home page with all services |
| `/about` | About the company |
| `/services` | View all available car repair services |
| `/service/[id]` | Dynamic route to view service details |
| `/checkout` | Checkout form to book a service |
| `/my-bookings` | Private route to manage user bookings |
| `/login` | User login page |
| `/register` | User registration page |
| `/blog` | Read car maintenance blogs |
| `/contact` | Contact page |

---

<h2 id="live-demo--repository">🌍 Live Demo & Repository</h2>  

- **Live Site:** [Car Doctor](#) 
- **GitHub Repository:** [GitHub Link](https://github.com/RaiyanJiyon/car-doctor)

---

🚗 **Book your car service with ease using Car Doctor!** 🔧👨‍🔧