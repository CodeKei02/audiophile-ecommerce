import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  CategoryPage,
  ProductDetailPage,
  Navigation,
  Promotion,
  Footer,
  ScrollToTop,
  CartProvider,
  CheckoutPage
} from "../index";

export const AudiophileRouter = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="/:category" element={<CategoryPage />} />
        <Route
          path="/:category/:product"
          element={<ProductDetailPage />}
        ></Route>
        <Route path="/*" element={<Navigate to="home" />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </CartProvider>

  );
};