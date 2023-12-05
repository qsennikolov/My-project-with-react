import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from '../services/productService';


export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct)
    },[productId])

    return(
        <section id="product-details">
            <h1>Product Details</h1>
            <div className="info-section">
                <div className="product-header">
                    <h1>{product.title}</h1>
                    <img className="product-img" src={product.imageUrl} alt={product.title} />
                    <p className="type">Type: {product.category}</p>
                    <span className="price">Price: {product.price}</span>
                </div>

                <p className="text">Description: {product.description}</p>
            </div>
        </section>
    );
}