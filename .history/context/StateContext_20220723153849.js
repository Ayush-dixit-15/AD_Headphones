import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';


const Context = createContext();


export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
     const [totalPrice, setTotalPrice] = useState();
     const [totalQuantities, setTotalQuantities] = useState();
     const [qty, setQty] = useState(1);
    const onAdd = (product,quantity)=>{
       const checkProductInCart = cartItems.find((item) => item._id === product._id);
  
        if (checkProductInCart){
            
        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
          
        const updatedCartItems = cartItems.map((cartProduct)=>{
                if(cartProduct._id=== product._id)return{
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
         
            // this logic simply checks of the order that the user is trying to add in the cart already exists in the cart . If yes, a new instance will not be created but the old one will be updated.If not, a new instance will be created 
        }
        else{
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`);
    }
     const incQty = () =>{
        setQty((prevQty)=> prevQty+1 );
     }
     const decQty = () =>{
        setQty((prevQty)=>{ 
            if (prevQty - 1 < 1)
               return 1;
            
           
            return prevQty-1
        
        } );
     }
     return(
        <Context.Provider value ={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd
        }}>
            {children}
        </Context.Provider>
     )
}

export const useStateContext = () => useContext(Context);