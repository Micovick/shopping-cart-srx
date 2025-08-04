# 🛒 Shopping Cart - SRX

This is a shopping store web application built with **React** and **Next.js**, as part of a technical challenge. The app uses the [Fake Store API](https://fakestoreapi.com/products) to display product data, manage a shopping cart, and provide a product detail view.

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand) – state management
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [Lucide React](https://lucide.dev/) – icons

---

## 🔧 Features

### 🏠 Home Page
- Lists products from the Fake Store API.
- Add-to-cart button on each product.
- Local pagination (3 products per row).
- Local search filter.
- Product image and title link to the detail page.
- Price badge in purple corner ribbon.

### 🛒 Cart Page
- Displays cart items with quantity, title, and total price.
- Remove individual items or clear entire cart.
- Total sum calculation.
- Continue Shopping button.

### 🔍 Product Detail Page
- Shows product image, title, description, and price.
- Add-to-cart button.
- Back to Home link.

---

## 💡 Technical Decisions

- **Zustand** was chosen for its simplicity and performance as a global state manager.
- **Tailwind CSS** allows for fast and responsive UI styling.
- **Local filtering and pagination** improve performance and UX.
- Component architecture ensures clean separation and reusability.

---

## ✅ Extra UX Enhancements

- Button icons (e.g. eye for "View More", search icon, plus icon).
- Responsive layout.
- Component reuse and state management through custom hook `useProducts`.
- Event propagation handled for clean click behavior.

---

## 📁 Folder Structure

```
src/
├── components/         # UI components (Header, ProductCard, etc.)
├── hooks/              # Custom hooks (e.g. useProducts)
├── pages/              # Next.js page routes
├── services/           # API integration
├── stores/             # Zustand store
└── styles/             # Tailwind global styles
```

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/Micovick/shopping-cart-srx.git
cd shopping-cart-srx

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👨‍💻 Author

**Euclides Cardoso Júnior**  
[LinkedIn](https://www.linkedin.com/in/euclides-cjr)  
[GitHub](https://github.com/Micovick)
