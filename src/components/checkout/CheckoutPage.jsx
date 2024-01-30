import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CheckoutPage = ({ cart, removeFromCart, handlePayment }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.attributes.productPrice * item.quantity,
    0
  );

  const removeCartItem = (item) => {
    removeFromCart(item);
  };

  const handleCheckout = async (paymentMethod) => {
    const paymentResult = await handlePayment(paymentMethod);

    if (paymentResult.success) {
      console.log("Payment successful!");
    } else {
      console.error("Payment failed:", paymentResult.error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Checkout:
      </Typography>
      <div>
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
                      onClick={() => removeCartItem(item)}
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
      </div>
      <Typography variant="h6" style={{ marginTop: "10px" }}>
        Total: {totalPrice} kr
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCheckout("klarna")}
      >
        Pay with Klarna
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCheckout("swish")}
      >
        Pay with Swish
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCheckout("applePay")}
      >
        Pay with Apple Pay
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCheckout("creditCard")}
      >
        Pay with Credit Card
      </Button>
    </div>
  );
};

export default CheckoutPage;
