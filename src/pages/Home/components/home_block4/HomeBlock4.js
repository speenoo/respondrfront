import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import animation1 from "../../../../assets/images/HB4_animate1.png"
import animation2 from "../../../../assets/images/HB4_animation2.png"
import animation3 from "../../../../assets/images/HB4_animation3.png"

export default function HomeBlock4(){
    return(
        <div className="container">
            <div className="container_inner">
                <div className="home_block_4_cont d-flex justify-content-space-between flex-wrap">
                    <div className="fs-35 f-700 text-center home_block_4_cont_item">
                        <img src={animation1} alt="" className="HB4_animation1"/>
                        <p>+400% Increase in Views</p>
                    </div>
                    <div  className="fs-35 f-700 text-center home_block_4_cont_item">
                        <p>Rank 34% Higher in Local SEO</p>
                        <img src={animation2} alt="" className="HB4_animation2"/>
                    </div>
                    <div  className="fs-35 f-700 text-center home_block_4_cont_item">
                        <p>Increase Web Traffic by 200%</p>
                        <img src={animation3} alt="" className="HB4_animation3"/>
                    </div>
                </div>
            </div>
        </div>
    )
}