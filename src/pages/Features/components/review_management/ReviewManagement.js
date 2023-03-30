import "./style.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import reviews_management_pic from "../../../../assets/images/reviews_management_pic.png"
import VButton from "../../../../cors/button/v_button";

export default function ReviewManagement() {


    useEffect(() => {
        AOS.init();
    }, [])


    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div
                    className="customer_reviews_cont reviews_management_cont d-flex align-items-center justify-content-space-between flex-wrap">
                    <div className="customer_reviews_cont_block1 reviews_management_block1" data-aos="fade-right"
                         data-aos-duration="1000">
                        <p className="f-500 fs-45">Put your Customer Service <span
                            className="c-orange" style={{marginLeft: "5px"}}> on Autopilot</span></p>
                        <div className="d-flex fd-column reviews_management_block_reviews">
                            {/*<h2 className="fs-35 c-orange f-500" data-aos="flip-left">Reviews</h2>*/}
                            <div className="f-500 fs-20 c-black">Stay on top of your competition with unparalleled
                                customer service! See what customers like and don't like so you can quickly identify
                                strengths or concerns. As an added bonus, by having timely and engaging responses, your
                                SEO will increase by 34% on average!
                            </div>
                        </div>
                        {/*<div className="d-flex fd-column reviews_management_block_analytics">*/}
                        {/*    <h2 className="fs-35 c-orange f-500" data-aos="flip-right">Analytics</h2>*/}
                        {/*    <div className="f-500 fs-20 c-black">Analytics like never before. Easily view positive and*/}
                        {/*        negative trends, keyword*/}
                        {/*        analysis, sentiment, and suggestions to improve your business based off incoming*/}
                        {/*        reviews. All this so you can focus on what works and what doesn't within your business!*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="d-flex justify-content-start for_reviews_btn_block reviews_management_btn_block">
                            <div className="features_reviews_btn fs-20 f-700" data-aos="zoom-in" data-aos-easing="linear"
                                 data-aos-duration="1500">
                                <VButton title={"Reviews"} onPress={() => navigate("/login")} className="fs-20"/>
                            </div>
                            <div className="features_analytics_btn fs-20 f-700" data-aos="zoom-in" data-aos-easing="linear"
                                 data-aos-duration="1500">
                                <VButton title={"Analytics"} onPress={() => navigate("/login")} className="fs-20"/>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_management_block2" data-aos="fade-left" data-aos-duration="3000">
                        <img src={reviews_management_pic} alt="" className="reviews_management_pic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
