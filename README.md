# 🍜 Thai Food Management

A modern restaurant management dashboard built with **React, TypeScript, Vite and Tailwind CSS**.

Thai Food Management is a frontend web application designed to simulate the internal management system of a Thai restaurant. The application provides a dashboard for managing orders and menu items through a clean and responsive interface.

> 🚧 This project is currently under development.

---

## ✨ Features

### 📊 Dashboard

* Overview of restaurant activity
* Order statistics
* Restaurant information
* Quick access to the main sections of the application

### 🧾 Order Management

* View all restaurant orders
* Search and filter orders
* View detailed order information
* Create new orders
* Edit existing orders
* Manage order status
* Manage payment methods
* Display ordered products, quantities and prices
* Calculate product and order totals
* Delete orders

### 🍜 Menu Management

* Display restaurant dishes
* View dish details
* Add and edit menu items
* Organize dishes by category
* Display prices and production costs
* Display ingredients and allergens
* Indicate spicy level

### 🧩 Component-based architecture

The application is organized into reusable React components, contexts, pages, data and TypeScript types.

---

## 🛠️ Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **React**        | UI development                    |
| **TypeScript**   | Static typing                     |
| **Vite**         | Development server and build tool |
| **Tailwind CSS** | Styling and responsive UI         |
| **React Router** | Client-side routing               |
| **Font Awesome** | Icons                             |
| **ESLint**       | Code quality and linting          |

---

## 📁 Project Structure

```text
Thai Food Management/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── DishCard.tsx
│   │   ├── EditOrder.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewOrderForm.tsx
│   │   ├── OrderTable.tsx
│   │   ├── Sidebar.tsx
│   │   └── ViewOrder.tsx
│   │
│   ├── contexts/
│   │   └── OrderContext.tsx
│   │
│   ├── data/
│   │   ├── menu.ts
│   │   ├── order.ts
│   │   ├── orderOptions.ts
│   │   ├── restaurant.ts
│   │   └── users.ts
│   │
│   ├── types/
│   │   ├── menu.ts
│   │   ├── order.ts
│   │   ├── restaurant.ts
│   │   └── user.ts
│   │
│   ├── utils/
│   │
│   ├── Page/
│   │   ├── Dashboard.tsx
│   │   ├── Menu.tsx
│   │   └── Orders.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/TunyawatWinyu/thai_food_management.git
```

Navigate to the application directory:

```bash
cd thai_food_management/Desktop/React-tsx-project/Thai\ Food\ Management
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local address displayed by Vite.

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Build

```bash
npm run build
```

Runs TypeScript compilation and creates the production build.

### Lint

```bash
npm run lint
```

Runs ESLint to check the project for code quality issues.

### Preview

```bash
npm run preview
```

Serves the production build locally.

---

## 🧠 Architecture

The project follows a simple component-based architecture.

### Components

Reusable UI components are located inside:

```text
src/components
```

Examples include:

* `OrderTable`
* `NewOrderForm`
* `EditOrder`
* `ViewOrder`
* `DishCard`
* `Sidebar`
* `Navbar`

### Pages

Application-level views are located inside:

```text
src/Page
```

The application currently contains:

* Dashboard
* Orders
* Menu

Routing is handled with **React Router**.

### Context

Order-related shared state is managed through:

```text
src/contexts/OrderContext.tsx
```

This allows different components to access and update order data without passing props through multiple levels.

### Types

TypeScript models are organized inside:

```text
src/types
```

This keeps application data strongly typed and makes the codebase easier to maintain.

---

## 🍽️ Example Menu

The project includes a sample Thai food menu with dishes such as:

* Pad Thai
* Tom Yum Goong
* Green Curry
* Massaman Curry
* Pad Kra Pao
* Pad See Ew
* Thai Fried Rice
* Chicken Satay
* Spring Rolls
* Pad Thai Goong
* Tom Kha Gai
* Panang Curry

Each dish can contain information such as:

* Name
* Description
* Category
* Price
* Production cost
* Ingredients
* Allergens
* Spicy level
* Image

---

## 📦 Order Model

Orders contain information such as:

```text
Order
├── ID
├── Date
├── Time
├── Customer
├── Products
│   ├── Name
│   ├── Quantity
│   └── Price
├── Type
├── Payment
└── Status
```

Supported order types include:

* Delivery
* Takeaway
* Dine-In

Payment methods include:

* Card
* Bancomat
* Cash
* Online

Order statuses include:

* New
* Confirmed
* Preparing
* Ready
* Delivered
* Completed
* Cancelled

---

## 🎯 Project Goals

This project was created to practice and demonstrate modern frontend development concepts, including:

* React component architecture
* TypeScript
* React Hooks
* Context API
* State management
* React Router
* Form handling
* CRUD operations
* Array manipulation
* Dynamic UI rendering
* Responsive design
* Tailwind CSS
* Reusable components

---

## 🔮 Future Improvements

Possible future improvements include:

* [ ] Connect the application to a real backend
* [ ] Add a database
* [ ] Implement authentication
* [ ] Persist orders and menu items
* [ ] Add real-time order updates
* [ ] Add advanced dashboard analytics
* [ ] Add pagination to the order table
* [ ] Improve form validation
* [ ] Add image upload for menu items
* [ ] Add customer management
* [ ] Add inventory management
* [ ] Add restaurant sales reports
* [ ] Add automated testing

---

## 📌 Current Status

The application currently focuses on the **frontend management experience**, using local/sample data to simulate restaurant operations.

The project is being developed incrementally as a practical application for improving React and TypeScript skills.

---

## 👨‍💻 Author

**Tunyawat Winyu**

GitHub:
https://github.com/TunyawatWinyu

---

## 📄 License

This project is intended for learning and portfolio purposes.
