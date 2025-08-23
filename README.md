
# NextPC – A Next.js Computer Store

NextPC is a modern web application built with **Next.js 15**, **Tailwind CSS**, and **NextAuth.js** that allows users to browse, add, and manage computer products. It supports user authentication, product management, and responsive layouts.

## 🚀 Live Demo
[https://next-pc-ten.vercel.app/](https://next-pc-ten.vercel.app/)

---

## 📖 Project Description

NextPC is an e-commerce style platform for computer products.  
Features include:

- **User Authentication** using NextAuth.js (email/password)
- **Product Management**: Add, view, and manage products
- **Responsive UI** with Tailwind CSS
- **Public Product Browsing** with highlights on the homepage
- **Dynamic Routing** for product details pages
- **Server-side and Client-side Components** (App Router in Next.js 15)
- **MongoDB** as the backend database

---

## ⚙️ Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/next-pc.git
cd next-pc
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

```env
MONGODB_URI=<your-mongodb-uri>
NEXTAUTH_SECRET=<your-secret-key>
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**

```bash
npm run build
npm run start
```

---

## 🗂 Route Summary

### Public Routes

| Route            | Description                              |
| ---------------- | ---------------------------------------- |
| `/`              | Homepage with highlighted products       |
| `/products`      | Browse all products (image, name, price) |
| `/products/[id]` | View product details (all data)          |
| `/login`         | Login page                               |
| `/register`      | Registration page                        |
| `/404`           | Custom 404 page                          |
| `/loading`       | Loading screen component                 |

### Protected Routes (Require login)

| Route                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `/dashboard/add-product` | Add new product (name, category, photo URL, price, warranty, description) |

---

## 🔑 Environment Variables

| Variable          | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `MONGODB_URI`     | MongoDB connection string                                                                   |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js                                                                  |
| `NEXTAUTH_URL`    | Base URL of your app (e.g., `http://localhost:3000` for dev, production URL for deployment) |

---

## 🛠 Tech Stack

* **Frontend:** Next.js 15, Tailwind CSS, DaisyUI
* **Backend:** Node.js, NextAuth.js
* **Database:** MongoDB
* **Hosting:** Vercel
* **Authentication:** NextAuth.js (credentials provider)
* **Animations:** AOS

---

## 📁 Project Structure (Key Folders)

```
/app
  /dashboard
    add-product.jsx
  /products
    [id].jsx
    page.jsx
/components
  Footer.jsx
  Navbar.jsx
  NavbarWrapper.jsx
/lib
  mongodb.js
/api
  /auth
    [...nextauth]/route.js
  /products/route.js
```

---

## 💡 Features

* Automatically log in after registration
* Responsive product forms and cards
* Server and client components optimized
* Public product viewing without authentication
* Custom 404 and loading pages
* Secure protected routes with session checks

---

## 🔗 Live Link

[NextPC Live Demo](https://next-pc-ten.vercel.app/)

---

## 📜 License

MIT License


