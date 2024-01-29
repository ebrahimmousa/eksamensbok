import React, { useState } from "react";

const CheckoutPage = ({ cart, totalPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState(null);

  const allProductsAPI = "/products?populate=*/checkout";

  const handleCheckout = async () => {
    try {
      const orderDetails = {
        paymentMethod,
        cart,
        totalAmount: totalPrice - appliedDiscount,
        personalInformation: { name, email, phoneNumber, postalAddress },
        discountCode,
      };

      console.log("Order details:", orderDetails);

      // Assuming allProductsAPI is correctly defined
      const response = await fetch(allProductsAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        console.log("Order placed successfully!");
        setOrderPlaced(true);
        setPaymentMethod("");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPostalAddress("");
        setDiscountCode("");
        setAppliedDiscount(0);
      } else {
        const errorMessage = await response.text();
        setError(`Error placing order: ${errorMessage}`);
        console.error("Error placing order:", errorMessage);
      }
    } catch (error) {
      setError(`Error processing checkout: ${error.message}`);
      console.error("Error processing checkout:", error);
    }
  };

  const handleApplyDiscount = () => {
    const validDiscountCode = "SAVE10";
    const enteredDiscountCode = discountCode.trim();

    if (enteredDiscountCode === validDiscountCode) {
      const discountAmount = 10;
      setAppliedDiscount(discountAmount);
      console.log("Discount applied successfully!");
    } else {
      setError("Invalid discount code. Please enter a valid code.");
      console.log("Invalid discount code. Please enter a valid code.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      {orderPlaced ? (
        <div>
          <p>Order placed successfully! Thank you for your purchase.</p>
        </div>
      ) : (
        <div>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div>
            <h3>Payment Method</h3>
            <input
              type="text"
              placeholder="Enter Payment Method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <div>
            <h3>Cart Items</h3>
            <ul>
              {Array.isArray(cart) &&
                cart.map((item) => (
                  <li
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
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <div>
                      <p>{item.attributes.productName}</p>
                      <p>{item.attributes.productPrice} kr</p>
                      <Button
                        onClick={() => removeFromCart(item)}
                        style={{ cursor: "pointer", color: "red" }}
                      >
                        🗑️
                      </Button>
                    </div>
                  </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice - appliedDiscount}</p>
          </div>

          <div>
            <h3>Personal Information</h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              placeholder="Postal Address"
              value={postalAddress}
              onChange={(e) => setPostalAddress(e.target.value)}
            ></textarea>
          </div>

          <div>
            <h3>Discount Code</h3>
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button onClick={handleApplyDiscount}>Apply Discount</button>
            {appliedDiscount > 0 && <p>Discount Applied: ${appliedDiscount}</p>}
          </div>

          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
