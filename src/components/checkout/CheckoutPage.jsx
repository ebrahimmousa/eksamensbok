import { useSelector } from "react-redux";
import cartSlice from "../Redux/cartSlice";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <p>Review your order and complete the checkout process.</p>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
