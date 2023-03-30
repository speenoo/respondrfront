import "./style.css"
import session_strategy_pic from "../../../../../../assets/images/Session_Strategy_img.png";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useNavigate} from "react-router-dom";

export default function UCEStrategySession() {
    let navigate=useNavigate()
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="strategy_session_cont d-flex justify-content-space-between flex-wrap">
                    <div className="strategy_session_cont_block1 " data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="f-500 fs-35">
                            An enterprise-grade solution for optimizing <span className="c-orange">customer experience and online reputation through a
                            unified view</span>
                        </h2>
                        <div className="f-500 fs-20 c-black">
                            Transform the way you manage your enterprise reputation with our individually-crafted
                            enterprise solutions. Our AI-powered responses and analytics ensure accurate and
                            personalized responses for each organization. With our omnichannel dashboard, effortlessly
                            manage all your locations in one place, or focus on individual locations. Regardless of the
                            size or reach of your enterprise, our platform provides the most convenient way to manage
                            your reputation.
                        </div>
                        <button className="bc-orange c-black f-700 fs-20" onClick={()=>navigate("/contact")}>Book a strategy session</button>
                    </div>
                    <div className="strategy_session_cont_block2" data-aos="fade-left" data-aos-duration="3000">
                        <img src={session_strategy_pic} alt="" className="strategy_session_pic"/>
                    </div>
                </div>
            </div>
        </div>

    )
}