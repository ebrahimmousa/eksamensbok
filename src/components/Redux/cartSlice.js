import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const updatedCart = [...state, action.payload];
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
