import "../footer/footer.css"

const Footer = () => {
    return(
            <div className="footer_section">
               <div className="container">
                  <div className="footer_sectio_2">
                     <div className="row-footer">
                        <div className="col-lg-3 col-md-6">
                           <h2 className="footer_logo">Foodfinda</h2>
                           <p className="footer_text">The best site to find the incredible drinks and something so delicious to eat! </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <h2 className="useful_text">Contact Info</h2>
                           <p className="address_text">Office Address</p>
                           <div className="map_icon"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left15"> New York, NY 36524</span></a></div>
                           <p className="address_text">Customer Service:</p>
                           <div className="map_icon">
                              <a href="/Login"><i className="fa fa-envelope" aria-hidden="true"></i>
                                 <span className="padding_left15">( +01 1234567890 )</span>
                              </a>
                           </div>
                           <div className="map_icon"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left15">demo@gmail.com</span></a></div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <h2 className="useful_text_discover">Discover</h2>
                           <div className="subscribe_menu">
                              <ul>
                                 <li><a href="#">Help</a></li>
                                 <li><a href="#">How It Works</a></li>
                                 <li><a href="#">subscribe</a></li>
                                 <li><a href="#">Contact Us</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2023 All Rights Reserved. <a href=""></a></p>
         </div>
      </div>
            </div>
    )
}
export default Footer;