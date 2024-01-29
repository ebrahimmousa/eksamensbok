// import React, { useState } from "react";

// const ShoppingCart = () => {
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Functions to add and remove items from the cart
//   const addToCart = (item) => {
//     setCart([...cart, item]);
//     setTotalPrice(totalPrice + item.price);
//   };

//   const removeFromCart = (item) => {
//     const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
//     setCart(updatedCart);
//     setTotalPrice(totalPrice - item.price);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice}</p>
//     </div>
//   );
// };

// export default ShoppingCart;
