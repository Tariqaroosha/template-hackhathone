// import { Navigation } from "lucide-react";

import BlueHeader from "./components/blue-header";


import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Lastdiv from "./components/lastdiv";
import Navbar1 from "./components/navbar";
// import Navigation from "./components/navbar2";

import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      {/* <Navigation/> */}
       <Navbar1/>
       <Carausel/>
        <Editors/> 
       <ProductCard/>
      <GreenDiv/>
       <Whitediv/>
      <Lastdiv/>
      <Footer/>   
             
    </div>
  )
}


