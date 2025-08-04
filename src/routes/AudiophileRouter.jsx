import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  CategoryPage,
  ProductDetailPage,
  Navigation,
  Footer,
  CartProvider,
  CheckoutPage,
} from "../index";
import { PageLoader } from "../components/PageLoader/PageLoader";

export const AudiophileRouter = () => {
  return (
    <CartProvider>
      <Navigation />
      <PageLoader>
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
      </PageLoader>
    </CartProvider>
  );
};
