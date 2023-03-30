import "./style.css"
import star_pic from "../../../../../assets/images/star.png"
import {useEffect, useState} from "react";
import user_img from "../../../../../assets/images/Dashboard/user_img.png"
import axios from "axios";

export default function ReviewsAndResponses(props) {
    let [reviews, setReviews] = useState([])

    useEffect(() => {
        getBusinessReview()
    }, [])
    let getBusinessReview = async (index) => {
        try {
            let token = localStorage.getItem('jwtToken')
            let response = await axios.get(`http://178.128.205.52:8372/business/review/${props.business_id}`, {
                headers: {
                    'authorization': token
                }
            })
            setReviews(response.data.review.reviews)
            console.log(response.data,"yuu")
            console.log(response.data.review.method)
        } catch (e) {
            console.log(e);
        }
    }

    function repeatRate(count) {
        let arr = []
        for (let i = 0; i < count; i++) {
            arr.push({})
        }
        return arr.map(() => {
            return (
                <img src={star_pic} alt=""/>
            )
        })
    }

    return (
        <div className="dashboard_navbars_cont">
            <div className="dashboard_navbars_header c-purple fs-20 f-700">
                Reviews and Responses
            </div>
            <div className="d-flex fd-column dashboard_navbars_cont_reviews_block">
                <h3 className="f-600 fs-16">{props.name}</h3>
                <p className="c_grey3 fs-10 dashboard_navbars_cont_reviews_address">{props.address}</p>
                <div className="d-flex align-items-center reviews_stars_block">
                    <div className="fs-16 c-orange">{props.rating}</div>
                    {
                        props.rating ?
                            <div>
                                {repeatRate(props.rating)}
                            </div>
                            :
                            null
                    }
                    <div className="fs-8"><span className="fs-10"
                                                style={{marginRight: "3px"}}>{props.review_count}</span>reviews
                    </div>
                </div>
            </div>
            <div className="reviews_comment_blocks">
                {
                    reviews.map((item, index) => {
                        return (
                            <div className="reviews_comment_block d-flex align-items-start" key={item.id}>
                                <img src={item.user.image_url} alt="" className="user_img"/>
                                <div className="d-flex fd-column reviews_comment_block_block2">
                                    <div className="d-flex justify-content-space-between align-items-center">
                                        <h3 className="c-darkBlue fs-16 f-500">{item.user.name}</h3>
                                        <span className="f-700">{item.method}</span>
                                    </div>
                                    <div className="d-flex c_grey3 fs-10">
                                        <div>{item.rating} reviews</div>
                                        <div style={{marginLeft: "10px"}}>Created at <span
                                            style={{marginLeft: "10px"}}>{item.time_created}</span></div>
                                    </div>
                                    {
                                        item.rating ?
                                            <div>
                                                {repeatRate(item.rating)}
                                            </div>
                                            :
                                            null
                                    }
                                    <div
                                        className="d-flex align-items-center c_grey3 fs-8 reviews_comment_block_block2_stars">
                                        <span style={{marginLeft: "10px"}}>{item.updatedAt}</span>
                                    </div>
                                    <div className="fs-14 c-darkBlue">{item.text}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
