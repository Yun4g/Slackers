import {  createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export const GlobalContext = createContext(null);



function GlobalState({children}) {
    const navigate = useNavigate()
    const [cartItem, setCartItem] = useState( ()=>{
       const storeData = localStorage.getItem('cart');
       return storeData ? JSON.parse(storeData) : [];
    })
    const [totalPrice, setTotalPrice] = useState(0)
    
    const [toggleState, setToggleState] = useState(false)

    const ToggleMenu = ()=>{
          setToggleState(!toggleState)
    }

    
    useEffect(() => {
        const total = cartItem.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        setTotalPrice(total);
    }, [cartItem]);

    console.log(cartItem) 

    const navigatIon = ()=>{
          navigate('/productsList')
    }

    const addToCart = (newItem) => {
        const existingCart = cartItem.find((item)=> item.id === newItem.id)
       
        
        if (existingCart) {        
           const updatedCart = cartItem.map((item)=>(
            item.id === newItem.id ? {...item, quantity : item.quantity + 1 }  : item 
            
           ))           
           setCartItem(updatedCart)
           localStorage.setItem("cart", JSON.stringify(updatedCart));
         
  

       
        } else {
            const updatedCart = [...cartItem, { ...newItem, quantity: 1 }];
            setCartItem(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))

        }
            navigate('/Cart-item')
    }

    
    const removeFromCart = (itemId) => {
        const updatedCart = cartItem.filter((item) => item.id !== itemId)
        setCartItem(updatedCart)
         localStorage.removeItem(updatedCart)
    }


    const increamentQuantity = (newItem) => {
        const updatedCart = cartItem.map((item)=>(
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item    
           ))           
           setCartItem(updatedCart)
           localStorage.setItem("cart", JSON.stringify(updatedCart));
           console.log(updatedCart);
          
    }


    
    const DecreamentQuantity = (newItem) => {
        const updatedCart = cartItem.map((item)=>(
            item.id === newItem.id  && item.quantity > 1   ? { ...item, quantity: item.quantity - 1 } : item    
           ))           
           setCartItem(updatedCart)
           localStorage.setItem("cart", JSON.stringify(updatedCart));
           console.log(updatedCart);
           
    }
 

    return  <GlobalContext.Provider value={{navigatIon,
        addToCart,
        cartItem, 
        removeFromCart, 
        increamentQuantity ,
        DecreamentQuantity ,
        toggleState,
        totalPrice,
        ToggleMenu
    }} > {children} </GlobalContext.Provider>
    
}


export default GlobalState;