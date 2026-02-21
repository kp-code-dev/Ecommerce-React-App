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
  - **Build Your PC**: Parallax CTA section for custom rigs.
- **Store Page**:
  - **Expanded Catalog**: Comprehensive listings for **Keyboards**, **Mice**, **Cabinets**, **Processors**, and **Graphics Cards**.
  - **Product Grid**: Responsive grid layout adapting to screen size (`repeat(3, 1fr)` on desktop).
  - **Structured Data**: Modular data files for easy management (`keyboardData.js`, `mouseData.js`, `cabinetData.js`, `processorData.js`, `graphicData.js`).
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

- `src/components`: Reusable UI components
  - `ProductCard`, `Header`, `Footer`, `Sidebar`, `Topbar`, `StatCard`.
  - `css/`: Modular CSS files for all components.
- `src/context`: Global state providers
  - `UserContext.jsx`: Authentication state.
  - `CartContext.jsx`: Shopping cart state with quantity logic.
  - `ThemeContext.jsx`: Theme switching logic and persistence.
- `src/data`: Static data files
  - Inventory data files for Keyboards, Mice, Components, etc.
- `src/pages`: Route pages
  - `Home.jsx`, `Store.jsx`, `Checkout.jsx`, `AdminDashboard.jsx`, `CustomBuilds.jsx`.
  - `styles/`: Page-specific CSS.

---

_Built for the elite gamers._ 🎮
