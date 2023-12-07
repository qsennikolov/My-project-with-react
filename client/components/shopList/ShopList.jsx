import { useEffect, useState } from "react";
import './shopList.css'

import * as productServices from '../services/productService';
import ShopListItem from "./shopListItem/shopListItem.jsx";

export default function ShopList() {
   const [products, setProduct] = useState([]);

   useEffect(() =>{
      productServices.getAll()
         .then(result => setProduct(result))
         .catch(err => {
            alert(err)
         })
   }, [])

    return (
        <div className="service_section layout_padding">
               <div className="container">
                  <div className="row2">
                     <div className="col-sm-12">
                        <h1 className="service_taital">ALL PRODUCTS</h1>
                     </div>
                  </div>

                  {products.length == 0 && <h3 className="no-articles">No product yet</h3>}

                  {products.map(product => (
                     <ShopListItem key={product._id} {...product}/>
                  ))}
               </div>
            </div>
    )
} 
