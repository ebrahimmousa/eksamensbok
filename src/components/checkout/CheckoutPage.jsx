import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Typography from "@mui/material/Typography";
import Navbar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Nw5ZcFZHoD1e3i2tCNsG6kJQ18ar9AKxuSHqapIw9WRADSPVoEKZml4pSLrwTnWxIf0zrNiO2gu6nM8wPQzTI4Y00cRzSqrFc"
);

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);

  const uniqueProductIds = new Set();

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.attributes.productPrice,
      0
    );
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Checkout</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <div>
            <h3>Review your order and complete the checkout process.</h3>
            {cartItems.map((item) => {
              if (!uniqueProductIds.has(item.id)) {
                uniqueProductIds.add(item.id);

                return (
                  <div
                    key={item.id}
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
                      style={{
                        width: "70px",
                        height: "70px",
                        marginRight: "10px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        style={{ marginRight: "10px" }}
                      >
                        {item.attributes.productName}
                        {item.quantity > 1 && ` (x${item.quantity})`}
                      </Typography>
                      <Typography variant="subtitle1">
                        {item.attributes.productPrice} kr
                      </Typography>
                    </div>
                  </div>
                );
              }

              return null;
            })}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Typography variant="h5">Total: {getTotal()} kr</Typography>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm cartItems={cartItems} />
            </Elements>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
