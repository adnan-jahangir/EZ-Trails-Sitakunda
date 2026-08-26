# 🌲 EZ Trails Sitakunda (Tourstk)

> **Complete full-stack travel booking, custom trip planning, and local guide dispatching platform for Sitakunda, Bangladesh.**

[![Live Demo](https://img.shields.io/badge/Demo-Live_Online-0e4d34?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/adnan-jahangir/EZ-Trails-Sitakunda)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📖 Overview

**EZ Trails Sitakunda** is a full-stack modern web application built to streamline eco-tourism, waterfall trekking, and group tours across the iconic mountain trails of Sitakunda, Chattogram. It empowers travelers to discover destinations, customize multi-day itineraries with interactive cost estimators, and complete bookings with bKash/Nagad advance payment verification. 

It also includes an enterprise **Admin Management Console** with real-time audio/push notifications, guide & vehicle dispatching, package management, and customer review moderation.

---

## ✨ Key Features

### 🎒 1. Customer Experience & Booking Flow
* **Curated Tour Packages:** Multi-day and weekend all-inclusive packages (Chandranath sunrise trek, Khaiyachora & Napittachora waterfall expeditions, Guliakhali sea-beach tours).
* **Interactive Custom Trip Planner:** Dynamic price, vehicle, and guide cost estimator for university clubs, corporate outings, and family groups.
* **Instant Checkout & bKash/Nagad Verification:** Step-by-step checkout with transaction ID logging and instant booking code generation.
* **Track Booking Status:** Public booking status tracker allowing customers to verify guide assignment and itinerary details.
* **Live Interactive Maps:** Leaflet.js-powered trail map showcasing all 12+ iconic Sitakunda spots with route difficulty ratings.

### 🛡️ 2. Real-Time Admin Console
* **Live Notification Chime & Toasts:** Synthesized audio chime and browser desktop push notifications on new incoming bookings.
* **Guide & Vehicle Dispatching:** Assign verified local mountain leaders and dedicated 4x4 Chander Gari vehicles.
* **Package & Destination CRUD:** Add, update prices, upload cover photos via Cloudinary, and delete spots directly in MongoDB Atlas.
* **Excel Export & Financials:** One-click spreadsheet generation for booking reports and revenue analytics.
* **Customer Review Moderation:** Approve, edit, and feature real traveler ratings.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | HTML5, JavaScript (ES6+), Tailwind CSS, Material Symbols, Leaflet Maps |
| **Backend** | Node.js, Express.js REST API |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Cloud Storage** | Cloudinary API (Media & Image Uploads) |
| **Security & Validation** | Zod Schema Validation, Helmet, Rate Limiting, JWT Admin Auth, CORS |

