import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import Item from '../componens/aru';


export interface CartContextType {
  cart: Item[];
  setCart: Dispatch<SetStateAction<Item[]>>;
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {}
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Item[]>([]);
  
  const addToCart = (item: Item) => {
    console.log("Adding to cart:", item);
    
    setCart((prevCart) => {
     
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        console.log("Item already in cart");
        return prevCart;
      }
      
 
      const newCart = [...prevCart, item];
      console.log("New cart state:", newCart);
      return newCart;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };


  React.useEffect(() => {
    console.log("Current cart state:", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};