import { Link } from "react-router-dom"

export default function ShopListItem({
    _id,
    title,
    imageUrl,

}){
    return(
        <div className="service_section_2">
            <div className="row2">
                <div className="col">
                    <div className="service_box">
                        <div className="breakfast_img">
                        <h4 className="breakfast_text">{title}</h4>
                            <img src={imageUrl}/>
                        </div>
                    </div>w
                           <div className="details_btn"><Link to={`/product/details/${_id}`}>Details</Link></div>
                </div>
            </div>
        </div>
    )
}