import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Navbar,
  Headphones,
  Earphones,
  Speakers,
  Promotion,
  Footer,
  ScrollToTop,
  HeadphonesProductDetail1,
  HeadphonesProductDetail2,
  HeadphonesProductDetail3,
  SpeakerProductDetail1,
  SpeakerProductDetail2,
  EarphonesProductDetail,
  CartProvider
} from "./index";


// Archivo App funcionara para tener todas las pages de mi sitio web y enviarla a main
export const App = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="headphones" element={<Headphones />}></Route>
        <Route path="earphones" element={<Earphones />}></Route>
        <Route path="speakers" element={<Speakers />}></Route>
        <Route
          path="headphones/xx99-mark-II-headphones"
          element={<HeadphonesProductDetail1 />}
        ></Route>
        <Route
          path="headphones/xx99-mark-I-headphones"
          element={<HeadphonesProductDetail2 />}
        ></Route>
        <Route
          path="headphones/xx59-headphones"
          element={<HeadphonesProductDetail3 />}
        ></Route>
        <Route
          path="speakers/zx9-speaker"
          element={<SpeakerProductDetail1 />}
        ></Route>
        <Route
          path="speakers/zx7-speaker"
          element={<SpeakerProductDetail2 />}
        ></Route>
        <Route
          path="earphones/yx1-wireless-earphones"
          element={<EarphonesProductDetail />}
        ></Route>
        
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
      <Promotion />
      <Footer />
    </CartProvider>
  );
};
