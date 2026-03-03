# Gaming Gear Ecommerce Store

A high-performance, cyberpunk-themed ecommerce web application built with React and Vite. This project focuses on a premium gaming aesthetic with neon visuals, smooth animations, and interactive elements designed for the elite gamer.

## 🚀 Features

### 🎨 Visual & UI/UX

- **Cyberpunk Aesthetic**: Immersive dark mode with neon orange (`#FF5722`) accents, glassmorphism, and glitch text effects.
- **Premium Design**:
  - Custom-styled `ProductCard` with inline feature specifications (icons + text).
  - Deep slate and black backgrounds for a true "gamer" vibe.
  - Orbitron and Roboto fonts for a futuristic typography hierarchy.
- **Smooth Animations**:
  - Infinite scrolling brand marquee with seamless loop.
  - Hover effects on product cards (lift, glow, & image zoom).
  - Entry animations for a premium feel.

### 🛍️ Store Functionality

- **Home Page**:
  - **Smart Product Slider**: Dynamically selects **one best-selling, in-stock product from each category** (Keyboards, Mice, Cabinets, Processors, Graphics Cards) for a curated showcase.
  - **Marquee**: Rotating list of top gaming brands.
  - **Category Navigation**: Quick links to Keyboards, Mice, Headsets, and PC Building.
  - **Why Choose Us**: Value proposition section.
- **Custom PC Builder (`/build-pc`)**:
  - **Dual Pathways**: Users select between "Custom PC" (hand-picked components) or "Budget PC" (slider-based auto-build).
  - **State Persistence**: Component selections and tab states are saved via URL Search Params so users don't lose progress on page reload.
  - **Interactive Component Grid**: Dynamic SVG icons and hover-glow tiles for selecting Motherboards, Processors, RAM, GPUs, Coolers, Storage, and Peripherals.
  - **Smart Checkout Sidebar**: A sticky summary panel that calculates totals, logs compatibility ("System Health Check"), and estimates power/thermal thresholds.
- **Store Page**:
  - **Expanded Catalog**: Comprehensive listings for **Keyboards**, **Mice**, **Cabinets**, **Processors**, and **Graphics Cards**.
  - **Product Grid**: Responsive grid layout adapting to screen size (`repeat(3, 1fr)` on desktop).
  - **Structured Data**: Modular data files for easy management (`keyboardData.js`, `mouseData.js`, etc.).
- **Shopping Mechanics**:
  - **Wishlist**: Toggle products in/out of wishlist with heart icon.
  - **Cart Dropdown**:
    - **Quick View**: Hover/Click cart icon to see a dropdown summary.
    - **Quantity Controls**: Adjust item counts (`+`, `-`) or remove items directly from the dropdown.
    - **Real-time Totals**: Instant price calculation updates.
    - **Smart Badge**: Cart icon displays a live count badge of total items.
  - **Search**:
    - **Auto-Focus**: Search input automatically focuses when opened for instant typing.
    - **Real-time Navigation**: Navigates to store with search query parameters.
  - **Checkout Flow**:
    - **Dynamic Payment Options**: Seamless inputs for Credit/Debit Card, UPI (with ID verification), and Cash on Delivery.
    - **Smart Logic**: Automatically calculates dynamic shipping and applies a flat ₹50 handling fee specifically for COD orders.
    - **Collision-Free Cart Engine**: Uses category-prefixed unique IDs (e.g., `keyboard-1`) to accurately track distinct items across different hardware categories.

### 👤 User Interaction & Authentication

- **Authentication System**:
  - **Guest Mode**: "Log In" button opens the Auth Modal.
  - **Logged In Mode**: Displays user avatar (initials) and a dropdown menu (Profile, Orders, Settings, Logout).
  - **User Context**: Global state management for user sessions.
- **Authentication Modal**:
  - Custom modal with backdrop blur.
  - **Isolated Styling**: Uses specific `.auth-modal` namespaces to guarantee zero conflicts with external UI libraries like Bootstrap.
  - Toggle between **Log In** and **Sign Up** views.
  - Real-time form input handling.
- **Responsive Navigation**:
  - Mobile-friendly navbar with slide-down menu.
  - **Expandable Search Bar**: Smooth slide-open animation.
- **Responsive Layout**:
  - Fully responsive design optimized for Mobile, Tablet, and Desktop.

### 🛡️ Admin Dashboard (`/admin`)

- **Overview**: A comprehensive command center for store management.
- **Dashboard Tab**:
  - **Quick Stats**: 4 key metric cards (Sales, Orders, Products, Users) with trend indicators.
  - **Visuals**: Weekly Sales mini-chart with **theme-consistent grid lines** and **glassmorphism tooltips** (blur + transparency).
  - **Recent Orders**: Status-coded table for quick order review.
- **Analytics Tab**:
  - **Deep Dive**: Monthly revenue, average order value, conversion rates.
  - **Charts**:
    - **Revenue Trend**: Line chart visualization.
    - **Top Products**: Bar chart for product performance.
    - **Order Status**: Pie chart distribution.
  - **Interact**: Date range filters for custom data views.
- **Layout**:
  - **Collapsible Sidebar**: Smooth animation for maximized workspace.
  - **Topbar**: Breadcrumbs, **Real-time Notifications dropdown**, and quick profile access.

### 🎨 Theme Customization

- **Dark/Light Mode**:
  - **Comfort White Theme**: Premium background using `linear-gradient(180deg, #f5f6fa, #eceff4)` for better readability.
  - **Apple-Style Toggle**: Premium glassmorphism switch with animated knob.
  - **Adaptive Visuals**: Grid background (`bg-grid`) and chart elements dynamically adjust opacity and color based on the selected theme.
  - **Persistent State**: Remembers user preference across sessions.
  - **Global Context**: Theme state managed via `ThemeContext` API.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom properties, CSS Variables, Flexbox/Grid)
- **Typography**: Self-hosted Google Fonts via `@fontsource` (Rajdhani, Orbitron) for optimal performance and offline support.
- **State Management**: React Context API (`UserContext`, `CartContext`, `ThemeContext`)
- **Routing**: [React Router](https://reactrouter.com/)
- **Charts**: [Recharts](https://recharts.org/) (Interactive data visualization)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Fa, Md, etc.)

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Ecommerce-React-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
ecommerce-react-app/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/             # Banners, backgrounds, and SVGs
│   │   ├── icons/          # Custom SVG icons & JSX icon components
│   │   └── images/         # Static images used across the site
│   ├── components/         # Reusable UI components
│   │   ├── admin/          # Admin Dashboard pieces (Sidebar, Topbar)
│   │   ├── cart/           # Cart dropdown menu and calculations
│   │   ├── common/         # Global Layouts (Header, Footer, Modals)
│   │   ├── ui/             # Base UI elements (Buttons, Headings)
│   │   └── css/            # Scoped CSS for all components
│   ├── context/            # React Context Providers
│   │   ├── CartContext.jsx # Cart logic & quantities
│   │   ├── ThemeContext.jsx# Light/Dark mode state
│   │   └── UserContext.jsx # Auth & Guest modes
│   ├── Data/               # Local JSON-like data stores
│   │   ├── keyboardData.js # Static catalog items
│   │   └── [...]
│   ├── pages/              # Core Application Routes
│   │   ├── css/            # Scoped page styling (BuildPC.css, etc)
│   │   ├── AdminDashboard.jsx
│   │   ├── BuildPC.jsx     # The PC Configurator Logic
│   │   ├── CustomBuilds.jsx# Configurator Landing Page
│   │   ├── Home.jsx        # Storefront
│   │   ├── Store.jsx       # Main Catalog
│   │   └── Support Pages   # (FAQs, Contact, Return, Terms, Privacy)
│   ├── routes/             # React Router configuration
│   ├── App.css             # Global CSS Variables & Overrides
│   ├── App.jsx             # Main Route wrapper
│   └── main.jsx            # React Initialization
├── index.html              # Entry HTML
├── package.json            # Dependencies & Scripts
├── vite.config.js          # Vite config
└── README.md
```

---

_Built for the elite gamers._ 🎮
