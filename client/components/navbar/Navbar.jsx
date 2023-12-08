import "../navbar/Navbar.css"
import logo from  '../../dist/assets/logo.png'

const Navbar = () =>{ 
    return(
        <div className="header_section">
            <div className="container">
               <nav className="navbar navbar-light bg-light justify-content-between">
                  <form className="form-inline ">
                     <div className="login_text"><a href="/home"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left10">Call : +01 1234567890</span></a></div>
                  </form>
                  <a className="logo"href="/home">
                    <img src={logo}/>
                  </a>
                  <div className="login_text"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left10">Email : Demo@gmail.com</span></a></div>
               </nav>
            </div>
         </div>
    )

}
export default Navbar;