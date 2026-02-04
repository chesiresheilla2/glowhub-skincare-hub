import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SkincareSteps from "./pages/SkincareSteps";
import CleansingPage from "./pages/skincare/CleansingPage";
import ToningPage from "./pages/skincare/ToningPage";
import SerumsPage from "./pages/skincare/SerumsPage";
import MoisturizingPage from "./pages/skincare/MoisturizingPage";
import SunProtectionPage from "./pages/skincare/SunProtectionPage";
import SkinTypePage from "./pages/shop/SkinTypePage";
import SkinConcernPage from "./pages/shop/SkinConcernPage";
import IngredientsPage from "./pages/shop/IngredientsPage";
import SignUpPage from "./pages/SignUpPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Skincare Steps Routes */}
              <Route path="/skincare-steps" element={<SkincareSteps />} />
              <Route path="/skincare-steps/cleansing" element={<CleansingPage />} />
              <Route path="/skincare-steps/toning" element={<ToningPage />} />
              <Route path="/skincare-steps/serums" element={<SerumsPage />} />
              <Route path="/skincare-steps/moisturizing" element={<MoisturizingPage />} />
              <Route path="/skincare-steps/sun-protection" element={<SunProtectionPage />} />
              
              {/* Shop Routes */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/shop/skin-type" element={<SkinTypePage />} />
              <Route path="/shop/skin-concern" element={<SkinConcernPage />} />
              <Route path="/shop/ingredients" element={<IngredientsPage />} />
              
              {/* Cart & Checkout */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              
              {/* Other Pages */}
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
