import "./App.css";
import "./animation/animations.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Product from "./routes/Product";
import CheckOut from "./routes/CheckOut";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./routes/Category";
import Brand from "./routes/Brands";
import About from "./routes/About";
import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import EditUser from "./routes/EditUser";
import Orders from "./routes/Orders";
import Order from "./routes/Order";
import ScrollToTop from "./hooks/ScrollToTop";
import AuthRequire from "./hooks/AuthRequire";
import NoAuthRequire from "./hooks/NoAuthRequire";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";
import InfoModal from "./components/InfoModal";

import PdfViewer from "./routes/PdfViewer";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  if (splash) {
    return <Splash />;
  } else {
    return (
      <div className="App">
        <div className="w-full fixed z-50">
          <Header />
        </div>
        <div className="min-h-[100vh]">
          <ScrollToTop>
            <Routes>
              <Route element={<NoAuthRequire />}>
                <Route path="/signup" element={<SignUp />} />
              </Route>
              <Route path="/pdf" element={<PdfViewer />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/categories/:slug" element={<Category />} />
              <Route path="/brands/:slug" element={<Brand />} />
              <Route element={<AuthRequire />}>
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit" element={<EditUser />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/orders/:id" element={<Order />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </ScrollToTop>
        </div>
        <InfoModal />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
