import { useEffect, useState } from "react";

import * as productServices from '../services/productService';

export default function ShopList() {
   const [product, setProduct] = useState([]);

   useEffect(() =>{
      productServices.getAll()
         .then(result => setProduct(result));
   }, [])

      console.log(product);
    return (
        <div className="service_section layout_padding">
               <div className="container">
                  <div className="row2">
                     <div className="col-sm-12">
                        <h1 className="service_taital">Quick Searches</h1>
                     </div>
                  </div>
                  <div className="service_section_2">
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
                  </div>
               </div>
            </div>
    )
} 
