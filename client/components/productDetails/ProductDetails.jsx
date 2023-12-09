import "../productDetails/productDetails.css"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as productService from '../services/productService';
import * as commentService from '../services/commentService';

import AuthContext from "../contexts/authContext";

export default function ProductDetails() {
    const navigate = useNavigate()
    const {email, userId } = useContext(AuthContext)
    const [product, setProduct] = useState({})
    const [comments, setComments] = useState([])
    const { productId } = useParams();
    const[records, setRecords] = useState([]);
    const [formValues, setFormValues] = useState({
        username: "",
        comment: "",
    })

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct)

            commentService.getAll(productId)
                .then(setComments)
    },[productId]);
    
    const addCommentHandler = async(e) => {
        e.preventDefault();
        setRecords([...records,formValues]);
        setFormValues({
            username: "",
            comment: "",
        })

        const formData= new FormData(e.currentTarget)
        
        const createComment = await commentService.create(
            productId,
            formData.get('username'),
            formData.get('comment'),
            );
            
        setComments(state => [...state, createComment])
    }
    
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${product.title}`);
        
        if(hasConfirmed){
            await productService.remove(productId);
            
            navigate('/shopList')
        }
    }

    return(
        <section id="product-details">
            <h1>Product Details</h1>
            <div className="info-section">
                <div className="product-header">
                    <h2>{product.title}</h2>
                    <img className="product-img" src={product.imageUrl} alt={product.title} />
                </div>
                <div className="about_product">
                    <p className="type">Type: {product.category}</p>
                    <span className="price">Price: {(Number(product.price)).toFixed(2)}$</span>
                <p className="description">Description: {product.description}</p>
                </div>
            </div>
                        {userId === product._ownerId && (
                            <div className="buttons">
                                <Link to={`/product/details/${productId}/edit`} className="button-edit">Edit</Link>
                                <Link to="/shopList" className="button-delete" onClick={deleteButtonClickHandler}>Delete</Link>
                            </div>
                        )}

               <div className="details-comments">
                        <h2>Comments:</h2>
                            {comments.map(({_id,username, text}) => (
                                <ul key={_id}>
                            <li className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        </ul>
                            ))}
                        {comments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                            )}
                    </div>


             <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>

                    <div className="comment-username">
                        <input type="text" name="username" value={formValues.username} onChange={(e) => setFormValues({...formValues, username: e.target.value})} placeholder="username" />
                    </div>

                    <div className="new-comment">
                        <textarea name="comment" value={formValues.comment} onChange={(e) => setFormValues({...formValues, comment: e.target.value})} placeholder="Comment......."></textarea>
                    </div>
                    
                    <input className="btn-comment" type="submit" value="Add Comment" />
                </form>
             </article>
        </section>
    );
}