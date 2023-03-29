import "./App.css";
import "./animation/animations.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Products from "./routes/Products";
import Product from "./routes/Product";
import SignUp from "./routes/SignUp";
import CheckOut from "./routes/CheckOut";
import AboutUs from "./routes/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./routes/Category";
import About from "./routes/About";
import { useEffect, useState } from "react";
import Splash from "./components/Splash";

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
        <div className=" min-h-[100vh]">
          <Routes>
            {/*           <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/chekout" element={<CheckOut />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
