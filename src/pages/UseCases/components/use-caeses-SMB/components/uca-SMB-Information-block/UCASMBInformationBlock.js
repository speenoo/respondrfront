import "./style.css"
import {useEffect, useState} from "react";
import UCA_animation1 from "../../../../../../assets/images/uca_animation1.png"
import UCA_animation2 from "../../../../../../assets/images/uca_animation2.png"
import UCA_animation3 from "../../../../../../assets/images/uca_animation3.png"
import UCA_animation4 from "../../../../../../assets/images/uca_animation4.png"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function UCASMBInformationBlock(){
    useEffect(() => {
        AOS.init();
    }, [])

    let [UCEItemBlock, setUCEItemBlock] = useState([
        {
            title: "Manage all business reviews",
            content: "Manage all your reviews from one single dashboard. Giving you an easy, high level view of what people are saying about your business."
        },
        {
            title: "Tailored Responses",
            content: "Our ‘Response Profiles’ let you tailor the AI for your business, so each response is made as if you were typing it yourself!"
        },
        {
            title: "Optimize your brand’s visibility",
            content: "Enhance the ranking of your business listings in local search results for near me searches and outperform your rivals"
        },
        {
            title: "Generate new reviews",
            content: "Keep track of review volume and observe your average rating improve, elevating your position in the Google local pack"
        },
        {
            title: "Never miss a review response",
            content: "Never miss a response again! Our AI well seamlessly respond to reviews and ensure your customers are always satisfied "
        },
        {
            title: "Crazy Analytics",
            content: "Our analytics give you an in-depth view of your reviews. Showing positive and negative trends, sentiment, " +
                "keyword analysis, and even suggests possible improvement’s based on reviews!"
        },
    ])
    return (
        <div className="UCE_information_block_cont">
            <img src={ UCA_animation1} alt="" className="UCA_animation1" data-aos="zoom-in"  data-aos-duration="1000"/>
            <img src={ UCA_animation2} alt=""  className="UCA_animation2" data-aos="flip-up"  data-aos-duration="1500"/>
            <img src={ UCA_animation3} alt="" className="UCA_animation3"  data-aos="fade-up-right" data-aos-duration="2000"/>
            <img src={ UCA_animation4} alt=""  className="UCA_animation4" data-aos="fade-right"/>
            <div className="UCE_information_block_cont_inner d-grid grid-columns-3fr grid-gab">
                {
                    UCEItemBlock.map((item, index) => {
                        return (
                            <div className="UCE_information_block_item bc-white"  data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="3020">
                                <div className="UCE_information_block_item_inner">
                                    <p className="fs-22 f-600">{item.title}</p>
                                    <div className="fs-14 f-600 UCE_information_block_item_content">{item.content}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <img src="" alt="" className="robot_img" data-aos="fade-up"/>
        </div>
    )
}