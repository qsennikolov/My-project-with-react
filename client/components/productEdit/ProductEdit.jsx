import { useNavigate, useParams } from 'react-router-dom';
import * as productService from '../services/productService'

import '../createproduct/createProduct.module.css'
import useForm from '../../hooks/useForm.js';
import { useEffect, useState } from 'react';

export default function ProductEdit() {
    const navigate = useNavigate();
    const {productId} = useParams();
    const [product, setProduct] = useState({
        title: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setProduct(result);
            });
    }, [productId])

    const editProductSubmitHandler = async (values) => {
        try {
            await productService.edit(productId, values);

            navigate('/ShopList')
        } catch (error) {
            alert('error')
        }
  }

    const { values, onChange, onSubmit } = useForm(editProductSubmitHandler, product);

    return (
        <section id='create-page' className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="product_container">
                    <h1>Edit Product</h1>
                    <label htmlFor="leg-title">Product Name:</label>
                    <input type="text" id="title" name="leg-title" value={values.title} onChange={onChange} placeholder="Enter product name"/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChange} placeholder="Enter product category"/>

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={values.price} onChange={onChange} placeholder="Enter product price"/>

                    <label htmlFor="product-img">Image:</label>
                    <input type="text" id="imageUrl" name="product-img" value={values.imageUrl} onChange={onChange} placeholder="Upload a photo..."/>

                    <label htmlFor="description">Description:</label>
                    <textarea type="text" value={values.description} onChange={onChange} id="description" name="description" placeholder="Enter product description"></textarea>
                    <input className="btn submit" name='create-product' type="submit" value='Edit Product' />               
                </div>
            </form>
       </section>
    )
}
