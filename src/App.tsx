import { Route, Routes } from "react-router-dom";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import GalleryPage from "./pages/Gallery";
import HomePage from "./pages/Home";
import ManufacturingPage from "./pages/Manufacturing";
import NotFoundPage from "./pages/NotFound";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import WhyUsPage from "./pages/WhyUs";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-midnight"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pb-20 sm:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
