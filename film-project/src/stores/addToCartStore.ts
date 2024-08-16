import { create } from 'zustand';
import { Movies } from '../types';

interface CartItem extends Movies {
  quantity: number;
  price: number; // Ensure price is included
}

const loadCartItems = (): CartItem[] => {
  const savedCartItems = localStorage.getItem('cartItems');
  return savedCartItems ? JSON.parse(savedCartItems) : [];
};

const saveCartItems = (cartItems: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

interface CartStore {
  cartItems: CartItem[];
  totalPrice: number;
  addCartItem: (movie: Movies) => void;
  increaseQuantity: (movieId: number) => void;
  decreaseQuantity: (movieId: number) => void;
  removeCartItem: (movieId: number) => void;
}

const calculateTotalPrice = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: loadCartItems(),
  totalPrice: calculateTotalPrice(loadCartItems()),
  addCartItem: (movie) => set((state) => {
    const moviePrice = movie.vote_average > 7 ? 1000 : 500; // Example pricing logic
    const existingItem = state.cartItems.find(item => item.id === movie.id);
    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = state.cartItems.map(item =>
        item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...state.cartItems, { ...movie, quantity: 1, price: moviePrice }];
    }
    saveCartItems(updatedCartItems);
    return { cartItems: updatedCartItems, totalPrice: calculateTotalPrice(updatedCartItems) };
  }),
  increaseQuantity: (movieId) => set((state) => {
    const updatedCartItems = state.cartItems.map(item =>
      item.id === movieId ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCartItems(updatedCartItems);
    return { cartItems: updatedCartItems, totalPrice: calculateTotalPrice(updatedCartItems) };
  }),
  decreaseQuantity: (movieId) => set((state) => {
    const updatedCartItems = state.cartItems.map(item =>
      item.id === movieId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    saveCartItems(updatedCartItems);
    return { cartItems: updatedCartItems, totalPrice: calculateTotalPrice(updatedCartItems) };
  }),
  removeCartItem: (movieId) => set((state) => {
    const updatedCartItems = state.cartItems.filter(item => item.id !== movieId);
    saveCartItems(updatedCartItems);
    return { cartItems: updatedCartItems, totalPrice: calculateTotalPrice(updatedCartItems) };
  }),
}));

export default useCartStore;
