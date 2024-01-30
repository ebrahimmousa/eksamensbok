import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cart = ({ cart, removeFromCart, handleCheckout }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.attributes.productPrice * item.quantity,
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "70px",
        maxHeight: "80vh",
        overflowY: "auto",
        color: "black",
        background: "beige",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Cart:
      </Typography>
      {cart.length === 0 ? (
        <h3>The Shopping Cart is empty</h3>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${
                    item.attributes.productImage.data[0].attributes.url
                  }`}
                  alt={item.attributes.productName}
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <div>
                  <p>
                    {item.attributes.productName} (x{item.quantity})
                  </p>
                  <p>{item.attributes.productPrice * item.quantity} kr</p>
                  <Button
                    onClick={() => removeFromCart(item)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    🗑️
                  </Button>
                </div>
              </li>
              {index < cart.length - 1 && <hr style={{ margin: "8px 0" }} />}
            </React.Fragment>
          ))}
        </ul>
      )}
      <Typography variant="h6" style={{ marginTop: "10px" }}>
        Total: {totalPrice} kr
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
