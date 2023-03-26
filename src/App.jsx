import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Products from "./routes/Products";
import Product from "./routes/Product";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import CheckOut from "./routes/CheckOut";
import AboutUs from "./routes/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="w-full fixed z-10">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/chekout" element={<CheckOut />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
