import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { removeFromCart } from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const groupedReduxCart = useSelector((state) =>
    state.cart.reduce((grouped, item) => {
      const existingItem = grouped.find(
        (groupedItem) => groupedItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        grouped.push({ ...item, quantity: 1 });
      }

      return grouped;
    }, [])
  );

  const cart = groupedReduxCart;

  const totalPrice = cart.reduce(
    (total, item) => total + item.attributes.productPrice * item.quantity,
    0
  );

  const handleCheckout = () => {
    dispatch(addToCart(productInfo));
    history.push("/checkout");
  };

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        color="White"
        onClick={toggleCart}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <ShoppingCartIcon />
      </IconButton>
      {isCartOpen && (
        <div
          style={{
            position: "fixed",
            top: 70,
            right: 60,
            zIndex: 1,
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "beige",
            padding: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Shopping Cart</Typography>
            <IconButton onClick={toggleCart}>
              <CloseIcon sx={{ color: "red" }} />
            </IconButton>
          </div>
          {cart.map((item) => (
            <div key={item.id}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}${
                  item.attributes.productImage.data[0].attributes.url
                }`}
                alt={item.attributes.productName}
                style={{ width: "50px", marginRight: "10px" }}
              />
              <Typography color={"black"}>
                {item.attributes.productName}{" "}
                {item.quantity > 1 && `(x${item.quantity})`}
              </Typography>
              <Typography color={"black"}>
                {item.attributes.productPrice} kr
              </Typography>
              <Button
                style={{ cursor: "pointer", color: "red" }}
                variant="outlined"
                color="error"
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
              >
                Remove
              </Button>
            </div>
          ))}

          <Typography color={"black"} variant="h6">
            Total: {totalPrice} kr
          </Typography>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
