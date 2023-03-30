import "./style.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import review_responses_gen_pic from "../../../../assets/images/review_responses_gen_pic.png"
import review_responses_pic1 from "../../../../assets/images/review_responses_pic1.png"
import review_responses_pic2 from "../../../../assets/images/reviews_responses_pic2.png"
import review_responses_pic3 from "../../../../assets/images/reviews_responses_pic3.png"
import review_responses_pic4 from "../../../../assets/images/review_responses_pic4.png"
import best_responses_text_pic from "../../../../assets/images/best_responses_text_pic.png"

export default function ReviewResponses() {
    useEffect(() => {
        AOS.init();
    }, [])
    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div
                    className="review_responses_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="review_responses_cont_block1">
                        <h2 className="c-orange fs-45 f-500">The Best Review Responses</h2>
                        <div className="f-500 fs-20">
                            After creating a 'Response Profile' each generated reply is hyper personalized to the
                            requests made by the user. No more pre-scripted and impersonal responses, instead Respondr
                            ensures every review is different and has a human feel.
                        </div>
                        <div className="d-flex justify-content-center best_responses_text_pic_block">
                            <img src={best_responses_text_pic} alt="" data-aos="fade-down" data-aos-duration="3000"/>
                        </div>
                    </div>
                    <div className="review_responses_cont_block2">
                        <div>
                            <img src={review_responses_gen_pic} alt="" className="review_responses_general_pic"/>
                        </div>
                        <div>
                            <img src={review_responses_pic1} alt="" className="review_responses_pic1"/>
                        </div>
                        <div>
                            <img src={review_responses_pic2} alt="" className="review_responses_pic2"/>
                        </div>
                        <div>
                            <img src={review_responses_pic3} alt="" className="review_responses_pic3"/>
                        </div>
                        <div>
                            <img src={review_responses_pic4} alt="" className="review_responses_pic4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
