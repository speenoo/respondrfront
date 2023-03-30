import "./style.css"
import {useNavigate} from "react-router-dom";
import work_with_pic from "../../../../assets/images/work_with_pic_back.png";
import work_with_pic1 from "../../../../assets/images/work_with_pic1.png";
import work_with_pic2 from "../../../../assets/images/work_with_pic2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function WorkWith() {

    useEffect(() => {
        AOS.init();
    }, [])

    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div className="workWith_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="workWith_cont_animation_block">
                        <img src={work_with_pic} alt=""/>
                        <div className="workWith_cont_animation1" data-aos="fade-right">
                            <img src={work_with_pic1} alt=""/>
                        </div>
                        <div className="workWith_cont_animation2" data-aos="fade-left" data-aos-duration="3000">
                            <img src={work_with_pic2} alt=""/>
                        </div>
                    </div>
                    <div className="workWith_cont_block1" data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1000">
                        <p className="f-600 fs-45 c-orange">Who do we work with?</p>
                        <div className="fs-20 f-500 workWith_content_block">
                            <p>Respondr easily integrates with any size business or agency!</p>
                            <p className="_yellow_text">Small and Medium Business</p>
                            <p>
                                Good business relies on quality reviews and prompt customer satisfaction. Respondr gives
                                you the tools to manage your customer service from one, simple dashboard.
                            </p>
                            <p className="_yellow_text">
                                Agency
                            </p>
                            <p>
                                Stop wasting time responding to endless reviews and let our intelligent system go to
                                work for your agency. It doesn't matter if you have one client or a million, we can
                                handle your reviews.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
