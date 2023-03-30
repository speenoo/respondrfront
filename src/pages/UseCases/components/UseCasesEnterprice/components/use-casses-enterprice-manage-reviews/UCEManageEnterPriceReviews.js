import "./style.css"
import manage_reviews_pic from "../../../../../../assets/images/manage-reviews_pic.png";
import manage_reviews_sidebar_user_pic from "../../../../../../assets/images/manage-reviews-sidebar-user-icon.png"
import {useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import ManageReviewsSlider from "../../../manage-reviews-slider/MangeReviewsSlider";

export default function UCEManageEnterPriceReviews() {
    useEffect(() => {
        AOS.init();
    }, [])
    let [manageReviews, setManageReviews] = useState([
        {
            id: 1,
            authorPic: manage_reviews_sidebar_user_pic,
            author: "Mexencel Lacroix",
            position: "CEO at Javfry",
            opinion: "“Respondr has cut our customer service costs, enabling our teams to focus elsewhere. " +
                "We used to spend hours going through all our reviews, now we barely worry about them!”",
        },
        {
            id: 2,
            authorPic: manage_reviews_sidebar_user_pic,
            author: "Mexencel",
            position: "CEO at Javfry",
            opinion: "“Respondr has cut our customer service costs, enabling our teams to focus elsewhere. " +
                "We used to spend hours going through all our reviews, now we barely worry about them!”",
        },
    ])

    return (
        <div className="container">
            <div className="container_inner">
                <div
                    className="manage_reviews_cont d-flex fd-column justify-content-center align-items-center text-center">
                    <div className="manage_reviews_cont_block1" data-aos="flip-up" data-aos-duration="1500">
                        <h1 className="f-700 fs-45">The New Way To <span className="c-orange f-500"
                                                                         style={{marginLeft: "5px"}}>Manage Enterprise Reviews</span>
                        </h1>
                        <div className="fs-20 f-500">
                            Other review management softwares are outdated and still use pre scripted responses giving
                            your customers the impression that you don't care enough to look at their reviews.
                        </div>
                    </div>
                    <div className="manage_reviews_cont_block2">
                        <ManageReviewsSlider manageReviews={manageReviews} setManageReviews={setManageReviews}/>
                    </div>
                </div>
            </div>
        </div>

    )
}