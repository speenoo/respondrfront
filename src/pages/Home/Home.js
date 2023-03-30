import "./style.css"
import Header from "../../components/header/Header";
import CustomerReviews from "./components/customer_reviews/CustomerReviews";
import Footer from "../../components/footer/Footer";
import HomeBlock2 from "./components/home_block2/HomeBlock2";
import ForReviews from "./components/for_reviews/ForReviews";
import Customers from "./components/customers/Customers";
import WorkWith from "./components/work_with/WorkWith";
import InformationBlock from "./components/information_block/InformationBlock";
import {useEffect} from "react";
import AOS from "aos";
import HomeBlock4 from "./components/home_block4/HomeBlock4";
import arrow_animate_orange from "../../assets/images/arrow_animate_orange.png";
import arrow_blue_animation from "../../assets/images/arrow_blue_animation.png";


export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])

    AOS.init({
        disable: function() {
            let maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });
    return (
        <div className="main">
            <div>
                <Header isLogin={true}/>
                <CustomerReviews/>
                <HomeBlock2/>
                <ForReviews/>
                <div className="arrow_for_block4"  data-aos="zoom-in-down"  data-aos-duration="2000" >
                    <img src={arrow_animate_orange} alt="" className="arrow_animation_for_block4"/>
                </div>
                <HomeBlock4/>
                <div className="arrow_for_block_customers d-flex justify-content-center"  data-aos="zoom-in-down"  data-aos-duration="4000" >
                    <img src={arrow_blue_animation} alt="" className="arrow_animation_for_customers"/>
                </div>
                <Customers/>
                <WorkWith/>
                <InformationBlock/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
