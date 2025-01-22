import {  createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export const GlobalContext = createContext(null);



function GlobalState({children}) {
     const publicKey = 'pk_test_ef545c8d586d88daee8f055eb3f3f42d136d4865';
     



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


    const [firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('')


    const ComponentProps = {
        email,
        amount: totalPrice * 100,
        metaData: {
            name: `${firstName} ${lastName}`,
            phone,
            city,
            state,
            address,
            firstName,
            lastName,
        },
        publicKey,
        text: "pay with PayStack",
        onSuccess : ()=> alert('Payment successful'),
        onclose : ()=> alert('are you sure you want to close')

    }
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('city:',city)
    console.log('state:',state)
    console.log('address:',address)
    console.log('phone:',phone)
    console.log('Email:', email);
    console.log('Amount:', totalPrice * 100);
   const handleOnchange = (event)=>{
          const {name, value} = event.target;

            switch (name) {
                case 'firstName':
                   setFirstName(value);   
                   console.log(firstName)       
                    break;
                    
                case 'lastName':
                    setLastName(value); 
                    console.log(lastName)         
                    break;
                    
                case 'email':
                    setEmail(value);   
                    console.log(email)        
                    break;
                    
                case 'amount':
                    setAmount(value);  
                    console.log(amount)        
                    break;
                    
                case 'address':
                    setAddress(value); 
                    console.log(address)         
                    break;

                 case 'phone':
                     setPhone(value)
                     console.log(phone) 
                     break;
                    
                case'city':
                    setCity(value);  
                    console.log(city)        
                    break;
                    
                case 'state':
                    setState(value);  
                    console.log(state)        
                    break;
        
            
                default:
                    break;
            }

    

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
         
          alert('already added to cart')
       
        } else {
            const updatedCart = [...cartItem, { ...newItem, quantity: 1 }];
            setCartItem(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            navigate('/Cart-item')
        }
           
    }

    
    const removeFromCart = (itemId) => {
        const updatedCart = cartItem.filter((item) => item.id !== itemId)
        setCartItem(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart));

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
        ToggleMenu,
        handleOnchange,
        firstName,
        lastName,
        email,
        address,
        amount,
        city,
        state,
        ComponentProps 

    }} > {children} </GlobalContext.Provider>
    
}


export default GlobalState;