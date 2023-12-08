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
                     <img src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"/>
                     <div className="product-btn">
                        <a href="/shopList">Shop List</a>
                     </div>
                  </div>
               </div>
            </div>

              <div className="product-section">
               <div className="row-pr">
                  <div className="service-product">
                     <h2 className="product">Espresso</h2>
                     <img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"/>
                     <div className="product-btn">
                        <a href="/shopList">Shop List</a>
                     </div>
                  </div>
               </div>
            </div>
                          <div className="product-section">
               <div className="row-pr">
                  <div className="service-product">
                     <h2 className="product">Fleur Burger</h2>
                     <img src="https://lifebeyondsportmedia.com/bestanden/Most-expensive-meals/5._Fleur_Burger_at_Fleur.jpg"/>
                     <div className="product-btn">
                        <a href="/shopList">Shop List</a>
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