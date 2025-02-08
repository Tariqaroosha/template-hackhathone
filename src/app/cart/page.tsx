"use client"


import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/action'
import Swal from "sweetalert2";

function CartPage() {
 
    const [cartItems, setCartItems ] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems()) 
    }, []);

    const handleRemove = (id : string) => {
        Swal.fire({
            title : "Are you sure",
            text : "you wil not be able to recover this item!",
            icon : "warning" ,
            showCancelButton : true,
            confirmButtonColor : "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "yes, remove it!"
        }).then((result)=> {
            if(result.isConfirmed){
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire("Removed! , item has been removed., success" );

            }
        })
    }

  const handleQuantityChange = (id : string, quantity : number) => {
      updateCartQuantity(id , quantity);
      setCartItems(getCartItems())
  }

  const handleIncrement = (id : string) =>{
    const product = cartItems.find((item) => item._id === id)
    if(product)
        handleQuantityChange(id, product.inventory + 1)
  }
  const handleDecrement = (id : string) =>{
    const product = cartItems.find((item) => item._id === id)
    if(product && product.inventory > 1)
        handleQuantityChange(id, product.inventory - 1)
  }
 const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory,0)
 }

 const handleProceed = () => {
    Swal.fire({
        title : "procced to cheeckout",
        text : "please review your cart before checkout",
        icon : "question",
        showCancelButton : true ,
        confirmButtonColor : "#3085d6",
        cancelButtonColor : "#d33",
        confirmButtonText : "yes , proceed!"

    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire("success , your order has been succesfully procceed, succes")
        }
    })





 }

    return (
    <div>
        <div>
            {cartItems.map((item)=>(
                <div key={item._id}>
                 {item.title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default CartPage
