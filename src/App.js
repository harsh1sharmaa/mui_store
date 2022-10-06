import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/card";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Checkout from "./components/checkout/checkout";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Signup from "./components/signup/signup";
import Login from "./components/login/login.js";
import Cart from "./components/cart/cart";
import './components/style/global.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Navbar />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/checkout" element={<Checkout />} /  > */}
          <Route path="/home" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" >
              <Route index element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="detail" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
