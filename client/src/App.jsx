import { Routes, Route } from 'react-router-dom'
import {AuthProvider} from '../components/contexts/authContext'

import AuthGuard from '../components/guard/AuthGuard.jsx'

import Navbar from '../components/navbar/Navbar.jsx'
import Navi from '../components/navigation/Navi.jsx'

import Home from "../components/home/Home.jsx"
import NewProducts from '../components/newproducts/NewProducts.jsx'
import ShopList from '../components/shopList/ShopList.jsx'
import Login from '../components/logIn/LogIn.jsx'
import Register from '../components/register/Register.jsx'
import CreateProduct from '../components/createproduct/CreateProduct.jsx'
import Logout from '../components/logout/Logout.jsx'
import ProductDetails from '../components/productDetails/ProductDetails.jsx'
import ProductEdit from '../components/productEdit/ProductEdit.jsx'
import Footer from '../components/footer/Footer.jsx'


function App() {

	return (
    <AuthProvider>
    <Navbar />
    <Navi />
        <Routes>
            <Route path='/home' element= { <Home />} />
            <Route path='/NewProducts' element={<NewProducts />} />
            <Route path='/shopList' element= { <ShopList />} />
            <Route path='/login' element= { <Login /> } />
            <Route path='register' element= { < Register />} />

            <Route element={<AuthGuard />}>
                <Route path='/createProduct' element={ <CreateProduct />} />
                <Route path='/product/details/:productId' element={<ProductDetails />} />
                <Route path='/product/details/:productId/edit' element={<ProductEdit />} />
                <Route path ='/Logout' element= { <Logout /> } />
            </Route>
            
        </Routes>
    <Footer />

  </AuthProvider>
  )
}

export default App
