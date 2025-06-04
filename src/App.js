import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layout/Mainlayout";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import About from "./components/About";
import Cart from "./components/Cart";
import Pay from "./components/Pay";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((i) => i.name === item.name);
      if (existingIndex !== -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (index, newQty) => {
    setCartItems((prevItems) => {
      const updated = [...prevItems];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} />} />
            <Route path="/offers" element={<Offers onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                   setCartItems={setCartItems}
                />
              }
            
            />
            <Route path="/pay" element={<Pay setCartItems={setCartItems} />} />

          </Route>
        </Routes>
      </Router>

      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>


</>
  );
}

export default App;
