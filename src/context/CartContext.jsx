import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([]); 
   const clearCart = () => setCart([]);
   const isInCart = (id) => cart.some(item => item.id === id);
   const [providerLoading, setProviderLoading] = useState(false);

   const removeItem = (id) => setCart(cart.filter(item => item.id !== id ));

   const addToCart = (item, quantity) => {
      if(isInCart(item.id)){
         const newCart = cart.map(el =>{
            if(el.id === item.id){
               return{ ...el, quantity: el.quantity + quantity}
            }else return el;
         }) 
         setCart(newCart);
      }else{
         setCart(prev => [ ...prev, { ...item, quantity}]);
      }
      window.alert(`Has añadido ${quantity} al carrito  !`);
   };

   const realStock = product => {
      const foundItem = cart.find(e => e.id === product.id);
      return foundItem ? product.stock - foundItem.quantity : product.stock;
   }

   useEffect(() => {
      const localCart = localStorage.getItem('cart');
      if (!localCart) localStorage.setItem('cart', JSON.stringify([]));
      else setCart(JSON.parse(localCart))
      setProviderLoading(true)

   }, []);
   
   return (
      <CartContext.Provider value={{cart, setCart, clearCart, addToCart, realStock, providerLoading, removeItem }}>
      {children}
      </CartContext.Provider>)
}