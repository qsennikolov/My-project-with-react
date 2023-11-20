const Contact = () => {
    return (
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
    )
}
export default Contact;