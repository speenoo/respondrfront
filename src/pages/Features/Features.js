import "./style.css"
import Header from "../../components/header/Header";
import ReviewManagement from "../Features/components/review_management/ReviewManagement"
import Footer from "../../components/footer/Footer";
import WhyRespondr from "./components/why_respondr/WhyRespondr";
import ReviewResponses from "./components/review_responses/ReviewResponses";
import arrow_animation_orange from "../../assets/images/arrow_animation_orange.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import GetAhead from "./components/get_ahead/GetAhead";

export default function Features() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="main">
            <div>
                <Header isLogin={true}/>
                <ReviewManagement/>
                <WhyRespondr/>
                <div className="arrow_animation_orange_block"  data-aos="zoom-in-down" >
                    <img src={arrow_animation_orange} alt="" className="arrow_animation_orange_pic"/>
                </div>
                <div style={{background: "#F8F9FC"}}>
                    <ReviewResponses/>
                </div>
                <GetAhead/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
