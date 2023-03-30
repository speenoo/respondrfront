import "./style.css"
import session_strategy_pic from "../../../../../../assets/images/Session_Strategy_img.png";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useNavigate} from "react-router-dom";

export default function UCEAgencyBlock1() {
    let navigate=useNavigate()
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="strategy_session_cont d-flex justify-content-space-between">
                    <div className="strategy_session_cont_block1 " data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="f-500 fs-35">
                            Supercharge your agency's customer experience and online <span className="c-orange">reputation with Respondr</span>
                        </h2>
                        <div className="f-500 fs-20 c-black">
                            Our Agency level solution offers a seamless way to put your client's reviews on autopilot.
                        </div>
                        <div className="f-500 fs-20 c-black">
                            No matter the amount of clients and locations, our solution will enable your agency to
                            improve customer satisfaction and save hundreds of hours that can be spent focusing on your
                            agency.
                        </div>
                        <button className="bc-orange c-black f-700 fs-20"  onClick={()=>navigate("/contact")}>Book a strategy session</button>
                    </div>
                    <div className="strategy_session_cont_block2" data-aos="fade-left" data-aos-duration="3000">
                        <img src={session_strategy_pic} alt="" className="strategy_session_pic"/>
                    </div>
                </div>
            </div>
        </div>

    )
}