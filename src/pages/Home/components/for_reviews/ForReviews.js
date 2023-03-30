import "./style.css"
import VButton from "../../../../cors/button/v_button";
import for_reviews_pic from "../../../../assets/images/for_reviews_back_pic.png";
import for_reviews_pic_animation1 from "../../../../assets/images/for_reviews_pic_animation1.png"
import for_reviews_pic_animation2 from "../../../../assets/images/for_reviews_pic_animation2.png"
import for_reviews_pic_animation3 from "../../../../assets/images/for_reviews_pic_animation3.png"
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import arrow_animate_orange from "../../../../assets/images/arrow_animate_orange.png";

export default function ForReviews() {
    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
    useEffect(() => {
        AOS.init();
    }, [])

    AOS.init({
        disable: function() {
            let maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });

    let navigate = useNavigate()
    return (
        <div className="container gsap-1">
            <div className="container_inner">
                <div className="for_reviews_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="for_reviews_pic_animations_block">
                        <img src={for_reviews_pic} alt="" className="for_reviews_pic"/>
                        <div className="for_reviews_pic_animation1" data-aos="fade-right" >
                            <img src={for_reviews_pic_animation1} alt=""/>
                        </div>
                        <div className="for_reviews_pic_animation2" data-aos="zoom-out-up"  data-aos-duration="2000"  >
                            <img src={for_reviews_pic_animation2} alt=""/>
                        </div>
                        <div className="for_reviews_pic_animation3" data-aos="fade-up"
                             data-aos-duration="3000"  >
                            <img src={for_reviews_pic_animation3} alt=""/>
                        </div>
                    </div>
                    <div className="for_reviews_cont_block" data-aos="flip-down"  data-aos-duration="1000" >
                        <p className="f-600 fs-45 c-orange"  >For Reviews</p>
                        <p className="fs-45 f-500">A better way to talk with your customers.</p>
                        <div className="fs-20 f-500 for_reviews_content_block">
                            <p>Respondr makes customer engagement easy by automating review responses, generating custom replies in real-time, and managing all your locations from one dashboard.</p>
                        </div>
                        <div className="d-flex for_reviews_btn_block ">
                            <div className="learn_more_btn bc-grey fs-20 f-700">
                                <VButton title={"Sign Up Free"} onPress={()=> {
                                    if(!token){
                                        return   navigate("/signup", {state: {flag: true}})
                                    }
                                }}/>
                            </div>
                            <div className="click_here_btn bc-orange fs-20 f-700">
                                <VButton title={"Read More"} onPress={() => navigate("/features")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
