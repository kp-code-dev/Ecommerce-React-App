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
  - **Dynamic Carousel**: specialized "Popular Products" slider that interleaves Keyboards and Mice content.
  - **Marquee**: Rotating list of top gaming brands.
  - **Category Navigation**: Quick links to Keyboards, Mice, Headsets, and PC Building.
  - **Why Choose Us**: Value proposition section.
  - **Build Your PC**: Parallax CTA section for custom rigs.
- **Store Page**:
  - **Categorized Listings**: Distinct sections for **Keyboards** and **Mice** with dedicated headers.
  - **Product Grid**: Responsive grid layout adapting to screen size (`repeat(3, 1fr)` on desktop).
  - **Smart Data Management**: Separate data files (`keyboardData.js`, `mouseData.js`) for organized product management.
- **Product Interaction**:
  - **Wishlist**: Toggle products in/out of wishlist with heart icon.
  - **Cart System**: `CartContext` implementation for global cart state management.
  - **Action Buttons**: distinct "Buy Now" (Gradient) and "Add to Cart" (Outline) buttons.

### 👤 User Interaction & Authentication

- **Authentication System**:
  - **Guest Mode**: "Log In" button opens the Auth Modal.
  - **Logged In Mode**: Displays user avatar (initials) and a dropdown menu (Profile, Orders, Settings, Logout).
  - **User Context**: Global state management for user sessions.
- **Authentication Modal**:
  - Custom modal with backdrop blur.
  - Toggle between **Log In** and **Sign Up** views.
  - Real-time form input handling.
- **Responsive Navigation**:
  - Mobile-friendly navbar with slide-down menu.
  - **Expandable Search Bar**: Smooth slide-open animation.
- **Responsive Layout**:
  - Fully responsive design optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom properties, CSS Variables, Flexbox/Grid)
- **State Management**: React Context API (`UserContext`, `CartContext`)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Fa, Pi, etc.)

## 📦 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd Ecommerce-React-App
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

- `src/Components`: Reusable UI components
  - `Product-Card`: Core component for displaying items with features, price, and actions.
  - `Header`, `Footer`: Global layout components.
  - `Modal`: Auth handling.
  - `Marquee-Container`: Brand showcase.
- `src/Context`: Global state providers
  - `UserContext`: Authentication state.
  - `CartContext`: Shopping cart state.
- `src/Data`: Static data files
  - `keyboardData.js`: Keyboard product inventory.
  - `mouseData.js`: Gaming mouse inventory.
  - `marqueeData.js`: Brand logos.
- `src/Pages`: Route pages
  - `Home.jsx`: Landing page with carousel and sections.
  - `Store.jsx`: Main catalog page.
- `src/Pages/Styles` & `src/Components/css`: Dedicated CSS files for modular styling.

---

_Built for the elite gamers._ 🎮
