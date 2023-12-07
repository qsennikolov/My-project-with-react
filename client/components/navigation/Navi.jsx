import { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../contexts/authContext";

const Navi = () => {
   const {
      isAuthenticated,
      username,
   } = useContext(AuthContext);
   
   return (
         <div>
            {isAuthenticated && (
               <div className="custome_menu">
                   <div className="user">
                     <li className="user_name">Welcome {username}</li>
                     <li><Link to="/home">Home</Link></li>
                     {/* <li><Link to="/collections">News</Link></li> */}
                     {/* <li><Link to="/blog">Blog</Link></li> */}
                     <li><Link to="/ShopList">Shop List</Link></li>
                     {/* <li><Link to="/contact">Contacts</Link></li> */}
                     <li><Link to="/createproduct">Create Product</Link></li>
                     <li><Link to="/logout">Log out</Link></li>
                  </div>
               </div>
                           )}
                           {/* <li><Link to="#"><i className="fa fa-search" aria-hidden="true"></i></Link></li> */}
                    
            {!isAuthenticated && (
               <div className="menu_main">
                  <div className="custome_menu" id = "guest">
                     <li className="active"><Link to="/home">Home</Link></li>
                     <li><Link to="/collections">Collections</Link></li>
                     <li><Link to="/ShopList">Shop List</Link></li>
                     <li><Link to="/login">Login</Link></li>
                     <li><Link to="/register">Sing Up</Link></li>
                  </div>
               </div> 
                           )}
                           {/* <li><a href="/appdownload">Food App</a></li> */}
            </div>    
    )
}
export default Navi;