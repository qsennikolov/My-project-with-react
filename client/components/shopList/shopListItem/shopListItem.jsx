import { Link } from "react-router-dom"

export default function ShopListItem({
    _id,
    title,
    category,
    price,
    imageUrl,

}){
    return(
        <div className="service_section_2">
            <div className="row2">
                <div className="col">
                    <div className="service_box">
                        <div className="breakfast_img">
                            <img src={imageUrl}/>
                        </div>
                    </div>
                        <h4 className="breakfast_text">{title}</h4>
                        <h5 className="category">{category}</h5>
                           <div className="details_btn"><Link to={`/product/${_id}`}>Details</Link></div>
                </div>
            </div>
        </div>
    )
}