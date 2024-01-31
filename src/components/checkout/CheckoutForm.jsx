import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const placeOrder = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      if (!stripe || !elements) {
        return;
      }

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      setIsLoading(false);

      if (error) {
        console.error("Error creating payment method:", error);
        setErrorMessage("Error creating payment method. Please try again.");
      } else {
        console.log("PaymentMethod created:", paymentMethod);

        const response = await fetch("/api/checkout/placeOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            cartItems,
          }),
        });

        const result = await response.json();

        if (result.success) {
          console.log("Order placed successfully:", result.order);
        } else {
          console.error("Error placing order:", result.error);
          setErrorMessage("Error placing order. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error placing order:", error);
      setErrorMessage("Unexpected error. Please try again.");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "5px",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginBottom: "5px", display: "block" }}>
          Card Details:
        </label>
        <CardElement style={{ base: { fontSize: "16px" } }} />
      </div>
      {errorMessage && (
        <p style={{ color: "red", marginBottom: "15px" }}>{errorMessage}</p>
      )}
      <button onClick={placeOrder} disabled={isLoading}>
        {isLoading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default CheckoutForm;
