

const Main = () => {
    return (
    <div className="container-fluid">
         <div className="layout_main">
            {/* // banner section start --> */}
            <div className="banner_section">
               <div className="container">
                  <div className="menu_main">
                     <div className="custome_menu">
                        <ul>
                           <li className="active"><a href="index.html">Home</a></li>
                           <li><a href="service.html">Services</a></li>
                           <li><a href="about.html">About</a></li>
                           <li><a href="blog.html">Blog</a></li>
                           <li><a href="shop.html">Shop</a></li>
                           <li><a href="contact.html">Contacts</a></li>
                        </ul>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li><a href="#">Login</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
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
                     <div className="carousel-item">
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
                                          <input type="text" className="form-control" placeholder="Search this blog"/>
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
                     <div className="carousel-item">
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
                                          <input type="text" className="form-control" placeholder="Search this blog"/>
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
                  </div>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
            {/* // banner section end --> */}
            {/* <!-- service section start --> */}
            <div className="service_section layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <h1 className="service_taital">Quick Searches</h1>
                     </div>
                  </div>
                  <div className="service_section_2">
                     <div className="row">
                        <div className="col">
                           <div className="service_box">
                              {/* <div className="breakfast_img"><img src="images/breakfast-img.png"/></div> */}
                           </div>
                           <h4 className="breakfast_text">Breakfast</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              {/* <div className="breakfast_img"><img src="images/delivery-img.png"/></div> */}
                           </div>
                           <h4 className="breakfast_text">Delivery</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              {/* <div className="breakfast_img"><img src="images/dinner-img.png"/></div> */}
                           </div>
                           <h4 className="breakfast_text">Dinner</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              {/* <div className="breakfast_img"><img src="images/coffee-img.png"/></div> */}
                           </div>
                           <h4 className="breakfast_text">Coffee</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              {/* <div className="breakfast_img"><img src="images/alcohol-img.png"/></div> */}
                           </div>
                           <h4 className="breakfast_text">Alcohol</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                        <div className="col">
                           <div className="service_box">
                              {/* <div className="breakfast_img"><img src="images/diningtable-img.png"/></div> */}
                           </div>
                           <h4 className="breakfast_text">Diningtable</h4>
                           <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- service section end --> */}
            {/* <!-- blog section start --> */}
            <div className="blog_section layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <h1 className="blog_taital">Collections Food In city</h1>
                     </div>
                  </div>
               </div>
            </div>
            <div className="blog_section_2 layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        {/* <div className="blog_img"><img src="images/blog-img1.png"/></div> */}
                     </div>
                     <div className="col-md-6">
                        <div className="blog_taital_main">
                           <h1 className="blog_text">This Week going</h1>
                           <p className="lorem_text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                           <div className="readmore_btn"><a href="#">Read More</a></div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        {/* <div className="blog_img"><img src="images/blog-img2.png"/></div> */}
                     </div>
                     <div className="col-md-6">
                        <div className="blog_taital_main">
                           <h1 className="blog_text">Just Delivery Food</h1>
                           <p className="lorem_text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                           <div className="readmore_btn"><a href="#">Read More</a></div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        {/* <div className="blog_img"><img src="images/blog-img3.png"/></div> */}
                     </div>
                     <div className="col-md-6">
                        <div className="blog_taital_main">
                           <h1 className="blog_text">Newly Opened Cafe</h1>
                           <p className="lorem_text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                           <div className="readmore_btn"><a href="#">Read More</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- blog section end --> */}
            {/* <!-- shop section start --> */}
            <div className="shop_section layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <h1 className="shop_taital">Get the
                        {/* <span style="color: #18191a;">Food Finda App</span> */}
                            </h1>
                        <p className="shop_text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
                        <div className="app_icon_main">
                           {/* <div className="app_icon"><img src="images/icon-1.png"/></div> */}
                           {/* <div className="app_icon"><img src="images/icon-2.png"/></div> */}
                        </div>
                        <div className="download_bt"><a href="#">Download Now</a></div>
                     </div>
                     <div className="col-md-6">
                        {/* <div className="mobile_img"><img src="images/mobile-img.png"/></div> */}
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- shop section end --> */}
            {/* <!-- testimonial section start --> */}
            <div className="testimonial_section layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <h1 className="testimonial_taital">Customers Says</h1>
                     </div>
                  </div>
                  <div id="my_slider" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="testimonial_section_2">
                              <div className="row">
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Loliy Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Den Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Jonshon Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="testimonial_section_2">
                              <div className="row">
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Loliy Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Den Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Jonshon Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="testimonial_section_2">
                              <div className="row">
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Loliy Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Den Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                                 <div className="col-md-4">
                                    <h4 className="customer_text">Jonshon Mark</h4>
                                    <p className="many_text">Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                     <i className="fa fa-arrow-left"></i>
                     </a>
                     <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                     <i className="fa fa-arrow-right"></i>
                     </a>
                  </div>
               </div>
            </div>
            {/* <!-- testimonial section end --> */}
            {/* <!-- contact section start --> */}
            <div className="contact_section layout_padding">
               <div className="container">
                  <div className="contact_section_2">
                     <div className="row">
                        <div className="col-md-12">
                           <h1 className="contact_taital">Get In Touch</h1>
                           <form action="">
                              <div className="mail_section_1">
                                 <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                                 <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                                 <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                                 <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                                 <div className="send_bt"><a href="#">SEND</a></div>
                              </div>
                           </form>
                        </div>
                     </div>
                     {/* <!-- order section start --> */}
                     <div className="order_section">
                        <div className="order_taital_main">
                           <h1 className="order_taital">Order Best food at time</h1>
                           <div className="order_bt"><a href="#">Order Now</a></div>
                        </div>
                     </div>
                     {/* <!-- order section end --> */}
                  </div>
               </div>
            </div>
            {/* <!-- contact section end --> */}
          
         </div>
      </div>
    )
}

export default Main;