import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from '../services/productService';
import * as commentService from '../services/commentService';


export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const [comments, setComments] = useState([])
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct)

            commentService.getAll(productId)
                .then(setComments)
    },[productId]);

    const addCommentHandler = async(e) => {
        e.preventDefault();

        const formData= new FormData(e.currentTarget)

        const createComment = await commentService.create(
            productId,
            formData.get('username'),
            formData.get('comment')
        );

        setComments(state => [...state, createComment])
    }

    return(
        <section id="product-details">
            <h1>Product Details</h1>
            <div className="info-section">
                <div className="product-header">
                    <h1>{product.title}</h1>
                    <img className="product-img" src={product.imageUrl} alt={product.title} />
                    <p className="type">Type: {product.category}</p>
                    <span className="price">Price: {product.price}$</span>
                </div>
                <p className="text">Description: {product.description}</p>
            </div>

               <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {comments.map(({_id,username, text}) => (
                                <li key={_id} className="comment">
                                    <p>{username}: {text}</p>
                                </li>
                            ))}
                        </ul>

                        {comments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                        )}
                    </div>

             <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......."></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
             </article>
        </section>
    );
}