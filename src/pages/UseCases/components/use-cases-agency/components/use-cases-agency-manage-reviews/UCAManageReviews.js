import "./style.css"
import ManageReviewsSlider from "../../../manage-reviews-slider/MangeReviewsSlider";
import {useState} from "react";
import manage_reviews_sidebar_user_pic from "../../../../../../assets/images/manage-reviews-sidebar-user-icon.png";

export default function UCAManageReviews() {
    let [manageReviews, setManageAgencyReviews] = useState([
        {
            id: 1,
            authorPic: manage_reviews_sidebar_user_pic,
            author: "Jackson Grosshans",
            position: "VP at High Line SEO",
            opinion: "“Respondr gave us the capability to expand our local SEO management customer base " +
                "significantly. We can now take on as many customer as we want without growing pains!”",
        },
        {
            id: 2,
            authorPic: manage_reviews_sidebar_user_pic,
            author: "Jackson Grosshans",
            position: "VP at High Line SEO",
            opinion: "“Respondr gave us the capability to expand our local SEO management customer base significantly." +
                " We can now take on as many customer as we want without growing pains!”",
        },
    ])

    return (
        <div className="container">
            <div className="container_inner">
                <div
                    className="manage_reviews_cont d-flex fd-column justify-content-center align-items-center text-center">
                    <div className="manage_reviews_cont_block1" data-aos="flip-up" data-aos-duration="1500">
                        <h1 className="f-700 fs-45">The New Way To <span className="c-orange f-500"
                                                                         style={{marginLeft: "5px"}}>Manage your Customer’s Reviews</span>
                        </h1>
                        <div className="fs-20 f-500">
                            Other Agency solutions are outdated. Whether you plan to use pre scripted responses or
                            Virtual Assistants they will both fall short. Respondr gives your agency the tools it needs
                            to properly handle review management at scale.
                        </div>
                    </div>
                    <div className="manage_reviews_cont_block2">
                        <ManageReviewsSlider manageReviews={manageReviews} setManageAgencyReviews={setManageAgencyReviews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}