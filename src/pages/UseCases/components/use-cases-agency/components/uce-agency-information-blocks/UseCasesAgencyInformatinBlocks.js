import "./style.css"
import {useEffect, useState} from "react";
import UCE_agency_animation1 from "../../../../../../assets/images/uce_agency_animation1.png"
import UCE_info_animation3 from "../../../../../../assets/images/UCE_info_animation3.png"
import UCE_info_animation4 from "../../../../../../assets/images/UCE_info_animation4.png"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function UCEAgencyInformationBlock(){
    useEffect(() => {
        AOS.init();
    }, [])

    let [UCEItemBlock, setUCEItemBlock] = useState([
        {
            title: "Manage all business reviews",
            content: "See all your clients from one dashboard and view detailed analytics review from each dashboard. "
        },
        {
            title: "Tailored Responses",
            content: "Our Response Profiles let you tailor the AI for each business, so every response is designed for your client’s needs"
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
            title: "Beat the competition",
            content: "Customers will come back again and again after always having their reviews fell heard"
        },
    ])
    return (
        <div className="UCE_information_block_cont">
            <img src={UCE_agency_animation1} alt="" className="UCE_agency_animation1" data-aos="zoom-out-top"  data-aos-duration="2000" />
            <img src={UCE_info_animation3} alt="" className="UCE_info_animation3" data-aos="fade-down"  data-aos-duration="2000"/>
            <img src={UCE_info_animation4} alt="" className="UCE_info_animation4" data-aos="fade-up-right"  data-aos-duration="1000" />
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