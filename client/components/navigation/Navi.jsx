const Navi = () => {
    return (
        
         <div className="container">
                  <div className="menu_main">
                     <div className="custome_menu">
                        <ul>
                           <li className="active"><a href="/home">Home</a></li>
                           <li><a href="/blog">Blog</a></li>
                           <li><a href="/collections">News</a></li>
                           <li><a href="/shop">Shop</a></li>
                           <li><a href="/contact">Contacts</a></li>
                           {/* <li><a href="/appdownload">Food App</a></li> */}
                        </ul>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li><a href="/login">Login</a></li>
                           <li><a href="/register">Register</a></li>
                           <li><a href="/logout">Log out</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
    
    )
}
export default Navi;