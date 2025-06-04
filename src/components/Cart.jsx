import React from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
const Cart = ({ cartItems, updateQuantity, setCartItems }) => {
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleRemoveItem = (index) => {
  setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
};
const handleCheckout = () => {
  if (cartItems.length === 0) {
    toast.warning("Your cart is empty!", {
      autoClose: 3000,
      position: "top-center",
      closeButton: true,
    });
    return;
  }


  toast.success("Thank you for your order ", {
    autoClose: 3000,
    position: "bottom-center",
    closeButton: true,
    style: {
      background: "#fff8f2",
      color: "#a57b63",
    },
  });

  setTimeout(() => {
    setCartItems([]);
  }, 3000);
};
  return (
    <div className="container py-3">
      <h3 className="mb-3">Your Cart</h3>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">Your cart is empty.</div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
                <div className="card shadow-sm h-100" style={{ fontSize: "0.9rem" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      height: "130px",
                      objectFit: "cover",
                      borderRadius: "0.25rem 0.25rem 0 0",
                    }}
                  />
                  <div className="card-body p-2 d-flex flex-column">
     

                    <h6 className="card-title mb-1">{item.name}</h6>
                    <p className="card-text text-muted mb-2" style={{ fontSize: "0.8rem" }}>
                      {item.description}
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <label className="me-1 mb-0">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                        className="form-control form-control-sm"
                        style={{ width: "55px" }}
                      />
                    </div>
                    <p className="mb-1">Price: {item.price} SR</p>
                    <p className="mb-0"><strong>Total:</strong> {item.price * item.quantity} SR</p>
                        <button
  className="btn p-0 border-0 bg-transparent text-danger mt-2"
  onClick={() => handleRemoveItem(index)}
  title="Remove item"
>
  <i className="bi bi-trash fs-5"></i>
</button>

                  </div>
                </div>
              </div>
                
            ))}
          </div>
    

          <div className="text-end mt-3">
            <h5>Total: {getTotal()} SR</h5>


      <Link to="/pay">
  <button
    style={{
      background: "#fff8f2",
      color: "#a57b63",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      border: "1px solid #a57b63",
    }}
  >
    Pay
  </button>
</Link>


          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
