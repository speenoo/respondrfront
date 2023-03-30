import "./style.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import get_ahead_general_pic from "../../../../assets/images/get_ahead_gen_pic.png"
import get_ahead_text_pic from "../../../../assets/images/get_ahead_text_pic.png"
import analytics_animation1 from "../../../../assets/images/analytics_animation1.png"
import analytics_animation2 from "../../../../assets/images/analytics_animation2.png"
import analytics_animation3 from "../../../../assets/images/analytics_animation3.png"
import get_ahead_arrow_pic from "../../../../assets/images/get_ahead_arrow.png"
import HB4_animation2 from "../../../../assets/images/HB4_animation2.png"
import {useEffect} from "react";

export default function GetAhead() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="get_ahead_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="get_ahead_cont_block1 d-flex align-items-center">
                        {/*<div>*/}
                        {/*    <img src={get_ahead_general_pic} alt="" className="get_ahead_general_pic"/>*/}
                        {/*</div>*/}
                        {/*<div data-aos="fade-right" data-aos-once="true">*/}
                        {/*    <img src={get_ahead_text_pic} alt="" className=" get_ahead_text_pic"/>*/}
                        {/*</div>*/}
                        <div>
                            <div className="d-flex justify-content-start">
                                <img src={analytics_animation1} alt="" className="analytics_animation1"/>
                            </div>
                            <h2 className="fs-45 c-orange f-500 get_ahead_cont_block1_title">Analytics</h2>
                            <div className="fs-20" >Discover insights like never before with our advanced analytics. By harnessing the power of
                                artificial intelligence, you can effortlessly track positive and negative trends, perform
                                keyword analysis, gauge sentiment, and receive actionable suggestions to improve your
                                business based on incoming reviews.
                            </div>
                            <div className="d-flex justify-content-end">
                                <img src={analytics_animation2} alt=""  className="analytics_animation2" />
                            </div>
                        </div>
                        <div data-aos="fade-right"
                             data-aos-offset="300"
                             data-aos-easing="ease-in-sine" data-aos-duration="5000">
                            <img src={get_ahead_arrow_pic} alt="" className="get_ahead_arrow_pic"/>
                        </div>
                    </div>

                    <div className="get_ahead_cont_block2">
                        <img src={analytics_animation3} alt="" className="analytics_animation3" data-aos="flip-left"/>
                        <img src={HB4_animation2} alt="" className="analytics_animation4"  data-aos="fade-down"  data-aos-duration="5000"/>
                        {/*<h2 className="c-orange fs-45 f-500">Get Ahead</h2>*/}
                        {/*<div className="f-500 fs-16">*/}
                        {/*    Stay on top of your competition with unparalleled customer service! See what customers like*/}
                        {/*    so you can focus on that and what they don't like so you can quickly identify issues. As an*/}
                        {/*    added bonus, by having more and better responses, your SEO will increase by 34% on average!*/}
                        {/*    Making sure you are always ranking first on google searches*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
