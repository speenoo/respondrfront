import "./style..css"
import session_strategy_pic from "../../../../../../assets/images/Session_Strategy_img.png";
import {useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useNavigate} from "react-router-dom";

export default function UCASMBBlock1() {
    let navigate=useNavigate()
    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="strategy_session_cont d-flex justify-content-space-between">
                    <div className="strategy_session_cont_block1 " data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="f-500 fs-35">
                            Focus on what matters most
                            <span className="c-orange"> for you business</span>
                        </h2>
                        <div className="f-500 fs-20 c-black">
                            Transform your small or medium-sized business with our review management platform. Put your
                            growth on autopilot and become the business that many strive to engage with. Our AI-powered
                            solution streamlines review management, saving you valuable time to focus on furthering and
                            improving your business.
                        </div>
                        <button className="bc-orange c-black f-700 fs-20" onClick={()=>{
                            if(!token){
                            return   navigate("/signup", {state: {flag: true}})
                        }
                            console.log("no token")
                        }}>Try Now</button>
                    </div>
                    <div className="strategy_session_cont_block2" data-aos="fade-left" data-aos-duration="3000">
                        <img src={session_strategy_pic} alt="" className="strategy_session_pic"/>
                    </div>
                </div>
            </div>
        </div>

    )
}