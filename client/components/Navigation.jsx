const Navigation = () =>{ 
    return(
        <div className="header_section">
            <div className="container">
               <nav className="navbar navbar-light bg-light justify-content-between">
                  <div id="mySidenav" className="sidenav">
                     <a  className="closebtn" >&times;</a>
                     <a href="index.html">Home</a>
                     <a href="service.html">Services</a>
                     <a href="about.html">About</a>
                     <a href="blog.html">Blog</a>
                     <a href="shop.html">Shop</a>
                     <a href="contacts.html">Contacts</a>
                  </div>
                  <form className="form-inline ">
                     <div className="login_text"><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left10">Call : +01 1234567890</span></a></div>
                  </form>
                  <a className="logo" 
                  href="index.html"
                  >
                    {/* <img src="images/logo.png"/> */}
                  </a>
                  <span className="toggle" ><i className="fa fa-bars"></i></span>
                  <div className="login_text"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left10">Email : Demo@gmail.com</span></a></div>
               </nav>
            </div>
         </div>
    )

}
export default Navigation;