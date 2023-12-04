import { useEffect, useState } from "react";

import * as productServices from '../services/productService';
import ShopListItem from "./shopListItem/shopListItem.jsx";

export default function ShopList() {
   const [products, setProduct] = useState([]);

   useEffect(() =>{
      productServices.getAll()
         .then(result => setProduct(result));
   }, [])

    return (
        <div className="service_section layout_padding">
               <div className="container">
                  <div className="row2">
                     <div className="col-sm-12">
                        <h1 className="service_taital">All Products</h1>
                     </div>
                  </div>

                  {products.map(product => (
                     <ShopListItem key={product._id} {...product}/>
                  ))}

                  {products.length === 0 && <h3 className="no-articles">No product yet</h3>}
                  {/* <div className="service_section_2">
                     <div className="row2">
                        <div className="col">
                           <div className="service_box">
                              <div className="breakfast_img"><img src="../../src/assets/images/breakfast-img.png"/></div>
                           </div>
                           <h4 className="breakfast_text">Breakfast</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              <div className="dessert_img"><img src="../../src/assets/images/dss.png"/></div>
                           </div>
                           <h4 className="breakfast_text">Desserts</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              <div className="breakfast_img"><img src="../../src/assets/images/dinner-img.png"/></div>
                           </div>
                           <h4 className="breakfast_text">Dinner</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              <div className="breakfast_img"><img src="../../src/assets/images/coffee-img.png"/></div>
                           </div>
                           <h4 className="breakfast_text">Coffee</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              <div className="breakfast_img"><img src="../../src/assets/images/alcohol-img.png"/></div>
                           </div>
                           <h4 className="breakfast_text">Alcohol</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              <div className="breakfast_img"><img src="../../src/assets/images/diningtable-img.png"/></div>
                           </div>
                           <h4 className="breakfast_text">Diningtable</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
    )
} 
