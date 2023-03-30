import "./style.css"
import {useState} from "react";
import manage_reviews_sidebar_user_pic from "../../../../../../assets/images/manage-reviews-sidebar-user-icon.png";
import ManageReviewsSlider from "../../../manage-reviews-slider/MangeReviewsSlider";

export default function UCSMBManageReviews() {
    let [manageReviews, setManageAgencyReviews] = useState([
        {
            id: 1,
            authorPic: manage_reviews_sidebar_user_pic,
            author: "Michael Barron",
            position: "CEO at New World Packaging",
            opinion: "“Respondr has been a miracle! I used to spend so much time going through online reviews and " +
                "responding to them. After setting up with Respondr I just check the dashboard once a week!”",
        },
        {
            id: 2,
            authorPic: manage_reviews_sidebar_user_pic,
            author: "Michael Barron",
            position: "CEO at New World Packaging",
            opinion: "“Respondr has been a miracle! I used to spend so much time going through online reviews and " +
                "responding to them. After setting up with Respondr I just check the dashboard once a week!”",
        },
    ])
    return (
        <div className="container">
            <div className="container_inner">
                <div
                    className="manage_reviews_cont d-flex fd-column justify-content-center align-items-center text-center">
                    <div className="manage_reviews_cont_block1" data-aos="flip-up" data-aos-duration="1500">
                        <h1 className="f-700 fs-45">The New Way To <span className="c-orange f-500"
                                                                         style={{marginLeft: "5px"}}>Manage your Business’ Reviews</span>
                        </h1>
                        <div className="fs-20 f-500">
                            Other review management softwares are outdated and still use pre scripted responses giving
                            your customers the impression that you don't care enough to look at their reviews. With
                            Respondr, each review is unique and different guaranteeing your customers' satisfaction!
                        </div>
                    </div>
                    <div className="manage_reviews_cont_block2">
                        <ManageReviewsSlider manageReviews={manageReviews}
                                             setManageAgencyReviews={setManageAgencyReviews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}