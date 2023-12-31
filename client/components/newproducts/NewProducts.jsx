import "./newproducts.css"

const NewProducts = () => {
    return (
       <div className="new-product">
         <div className="row-product">
            <h1 className="news">New Products</h1>
            
         <div className="container-product">
            <div className="product-section">
               <div className="row-pr">
                  <div className="service-product">
                     <h2 className="product">Birthday Cake</h2>
                     <img src="../../dist/assets/cake.webp"/>
                     <div className="product-btn">
                        <a href="/ShopList">Shop List</a>
                     </div>
                  </div>
               </div>
            </div>

              <div className="product-section">
               <div className="row-pr">
                  <div className="service-product">
                     <h2 className="product">Espresso</h2>
                     <img src="../../dist/assets/coffee.png"/>
                     <div className="product-btn">
                        <a href="/ShopList">Shop List</a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="product-section">
               <div className="row-pr">
                  <div className="service-product">
                     <h2 className="product">Fleur Burger</h2>
                     <img src="../../dist/assets/fleur-burger.jpg"/>
                     <div className="product-btn">
                        <a href="/ShopList">Shop List</a>
                     </div>
                  </div>
               </div>
            </div>

              <div className="product-section">
               <div className="row-pr">
                  <div className="service-product">
                     <h2 className="product">Donuts</h2>
                     <img src="../../dist/assets/donuts.webp"/>
                     <div className="product-btn">
                        <a href="/ShopList">Shop List</a>
                     </div>
                  </div>
               </div>
            </div>

          </div>
         </div>
      </div>
    )
}

export default NewProducts;