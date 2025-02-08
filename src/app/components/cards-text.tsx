"use client";
import React from "react";
// import Image from "next/image";6
// import colours from "@/images/product-colors.png";
// import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Product } from "../../../types/products";
import { addToCart } from "../actions/action";
import { product } from "@/sanity/schemaTypes/product";
import Swal from "sweetalert2";

export default function CardText() {
  // const notify = () => toast(" Item added to cart! ✅");

   

   
     const handleAddToCart = (e: React.MouseEvent, product: Product) =>{
       e.preventDefault()
       Swal.fire({
        position:"top-right",
        icon : "success",
        title : `${product.title} added to cart`,
        showConfirmButton : false,
        timer : 1000
       })
       addToCart(product)
       
     }

  return (
    <div className="w-[239px] h-[200px] py-[5px] px-[25px] flex flex-col items-center justify-center gap-[10px] border border-gray-200 rounded-lg shadow-sm">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
     
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
          $16.48 
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>


      {/* <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours}
         alt="colours"
         height={100}
         width={100}
          />
      </div>  */}
        {/* <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
       <ToastContainer />  */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-200 ease-out
                "
                onClick={(e) => handleAddToCart(e, product)}
                >
                 Add To Cart
                </button>
    </div>
  );
}