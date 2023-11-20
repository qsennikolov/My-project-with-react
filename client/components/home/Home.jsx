
const Home = () => {
return (
     <div className="banner_section">
              
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container">
                           <div className="row">
                              <div className="col-md-12">
                                 <h1 className="banner_taital">Find The Best Restaurants Cafes And Bars in </h1>
                                 <h1 className="banner_text">YOUR CITY</h1>
                                 <div className="banner_main">
                                    <div className="dropdown">
                                       {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category  */}
                                       {/* </button> */}
                                       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="#">Action</a>
                                          <a className="dropdown-item" href="#">Another action</a>
                                          <a className="dropdown-item" href="#">Something else here</a>
                                       </div>
                                    </div>
                                    <div className="main">
                                       {/* // Another variation with a button --> */}
                                       <div className="input-group">
                                          <input type="text" className="form-control" placeholder="Search"/>
                                          <div className="input-group-append">
                                             {/* <button className="btn btn-secondary" type="button" style="background-color: #ffffff; border-color:#ffffff "> */}
                                             {/* <i className="fa fa-search" style="color: #191919;"></i> */}
                                             {/* </button> */}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="ordernow_bt"><a href="#">Order Now</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="carousel-item"> */}
                        {/* <div className="container">
                           <div className="row">
                              <div className="col-md-12">
                                 <h1 className="banner_taital">Find The Best Restaurants Cafes And Bars in </h1>
                                 <h1 className="banner_text">YOUR CITY</h1>
                                 <div className="banner_main">
                                    <div className="dropdown">
                                       <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                                       </button>
                                       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="#">Action</a>
                                          <a className="dropdown-item" href="#">Another action</a>
                                          <a className="dropdown-item" href="#">Something else here</a>
                                       </div>
                                    </div>
                                    <div className="main">
                                       // Another variation with a button -->
                                       <div className="input-group">
                                          <input type="text" className="form-control" placeholder="Search this blog"/>
                                          <div className="input-group-append">
                                             <button className="btn btn-secondary" type="button" style="background-color: #ffffff; border-color:#ffffff ">
                                             <i className="fa fa-search" style="color: #191919;"></i>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="ordernow_bt"><a href="#">Order Now</a></div>
                              </div>
                           </div>
                        </div> */}
                     </div>
                     {/* <div className="carousel-item">
                        <div className="container">
                           <div className="row">
                              <div className="col-md-12">
                                 <h1 className="banner_taital">Find The Best Restaurants Cafes And Bars in </h1>
                                 <h1 className="banner_text">YOUR CITY</h1>
                                 <div className="banner_main">
                                    <div className="dropdown">
                                       <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                                       </button>
                                       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="#">Action</a>
                                          <a className="dropdown-item" href="#">Another action</a>
                                          <a className="dropdown-item" href="#">Something else here</a>
                                       </div>
                                    </div>
                                    <div className="main">
                                       // Another variation with a button -->
                                       <div className="input-group">
                                          <input type="text" className="form-control" placeholder="Search this blog"/>
                                          <div className="input-group-append">
                                             <button className="btn btn-secondary" type="button" style="background-color: #ffffff; border-color:#ffffff ">
                                             <i className="fa fa-search" style="color: #191919;"></i>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="ordernow_bt"><a href="#">Order Now</a></div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                  </div>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            // </div>
)

    
}
export default Home;