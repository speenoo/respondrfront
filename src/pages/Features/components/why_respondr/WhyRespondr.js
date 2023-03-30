import "./style.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import why_respondr_general_pic from "../../../../assets/images/why_respondr_gen_pic.png"
import Why_respondr_question_pic from "../../../../assets/images/Why_respondr_question_pic.png"
import whyRespondr_meesage_pic from "../../../../assets/images/whyRespondr_meesage_pic.png"
import why_responder_text_pic from "../../../../assets/images/why_respondr_text_pic.png"
import {useEffect} from "react";

export default function WhyRespondr() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="why_respandr_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="why_respandr_cont_block1">
                        <div>
                            <img src={why_respondr_general_pic} alt="" className="why_respondr_general_pic"/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="3000">
                            <img src={Why_respondr_question_pic} alt="" className="Why_respondr_question_pic"/>
                        </div>
                        <div data-aos="fade-down-right" data-aos-duration="5000">
                            <img src={whyRespondr_meesage_pic} alt="" className="whyRespondr_meesage_pic"/>
                        </div>

                    </div>
                    <div className="why_respandr_cont_block2">
                        <h2 className="c-orange fs-45 f-500">Why Respondr?</h2>
                        <p className="fs-20 c-greenBlue f-500">Respondr saves you time, improves SEO, improves customer
                            satisfaction, customer retention, and helps to increase profits. Need I say more?</p>
                        <div className="f-500 fs-16">
                            Your customer service team no longer needs to spend hours responding to reviews. Simply sign
                            up for Respondr and watch as your online presence improves!
                        </div>
                        <div className="d-flex justify-content-center why_respondr_text_pic_block">
                            <img src={why_responder_text_pic} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
