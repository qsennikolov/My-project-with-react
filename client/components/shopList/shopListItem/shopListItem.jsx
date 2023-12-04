export default function ShopListItem({
    title,
    category,
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
                           <div className="details_bt"><a href="#">Details</a></div>
                </div>
            </div>
        </div>
    )
}