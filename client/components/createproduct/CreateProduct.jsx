import './createProduct.css'

import { useNavigate } from 'react-router-dom';
import * as productService from '../services/productService'

export default function CreateProduct() {
    const navigate = useNavigate();

    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget))

        try {
            await productService.create(productData);

            navigate('/ShopList')
        } catch (error) {
            alert('error')
        }

  }

    return (
        <section id='create-page' className="auth">
            <form id="create" onSubmit={createProductSubmitHandler}>
                <div className="product_container">
                    <h1>Create Product</h1>
                    <label htmlFor="leg-title">Product Name:</label>
                    <input type="text" id="title" name="title" placeholder="Enter product name"/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter product category"/>

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" placeholder="Enter product price"/>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                    <label htmlFor="description">Description:</label>
                    <textarea type="text" id="description" name="description" placeholder="Enter product description"></textarea>
                    <input className="create_btn" type="submit" value='Create Product' />               
                </div>
            </form>
       </section>
    )
}
