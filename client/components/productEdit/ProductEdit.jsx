import "../productEdit/ProductEdit.css"

import { useNavigate, useParams } from 'react-router-dom';

import * as productService from '../services/productService';
import useForm from '../../hooks/useForm.js';
import { useEffect, useState } from 'react';

export default function ProductEdit() {
    const navigate = useNavigate();
    const { productId } = useParams();
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
            
            navigate(`/product/details/${productId}`)
        } catch (error) {
            alert("404 Bad request!")
        }
  }

  const { values, onChange, onSubmit } = useForm(editProductSubmitHandler, product);

    return (
        <section id='create-page' className="edit_product">
            <form id="create" onSubmit={onSubmit}>
                <div className="product_edit">
                    <h1>Edit Product</h1>
                    <label htmlFor="leg-title">Product Name:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChange} placeholder="Enter product name"/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChange} placeholder="Enter product category"/>

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={values.price} onChange={onChange} placeholder="Enter product price"/>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} placeholder="Upload a photo..."/>

                    <label htmlFor="description">Description:</label>
                    <textarea type="text" value={values.description} onChange={onChange} id="description" name="description" placeholder="Enter product description"></textarea>
                    <input className="btn-submit" name='create-product' type="submit" value='Edit Product' />               
                </div>
            </form>
       </section>
    )
}
