import "./style.css"
import {useEffect, useState} from "react";
import cloud_img from "../../../../assets/images/handy-line-cloud-storage-with-files.png"
import robot_img from "../../../../assets/images/matey-robot-explains.png"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function InformationBlock() {

    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({disable: 'mobile'});
    AOS.init({
        disable: function() {
            let maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });


    let [itemBlock, setItemBlock] = useState([
        {
            title: "Always learning",
            content: "Our AI is base don GPT-3 and uses millions of data points to create better, more humanlike responses."
        },
        {
            title: "Auto Response",
            content: "Our AI will automatically respond for your or give you the option to approve each review before it goes out."
        },
        {
            title: "Multiple Locations",
            content: "You have more than one location? Not a problem! Manage all reviews from one spot."
        },
        {
            title: "analytics",
            content: "Our advanced analytics give you in-depth views of what people are saying!"
        },
        {
            title: "Get notified",
            content: "We can notify you whenever theres a new review under any of your websites!"
        },
        {
            title: "Platforms",
            content: "We easily integrate with all the major review platforms to ensure highest visibility"
        },
    ])
    return (
        <div className="information_block_cont">
            <img src={cloud_img} alt="" className="cloud_img" data-aos="zoom-out-top"  data-aos-duration="5000"/>
            <div className="information_block_cont_inner d-grid grid-columns-3fr grid-gab">
                {
                    itemBlock.map((item, index) => {
                        return (
                            <div className="information_block_item bc-white"  data-aos="flip-left"
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="3020">
                                <div className="information_block_item_inner">
                                    <p className="fs-22 f-600">{item.title}</p>
                                    <div className="fs-14 f-600 information_block_item_content">{item.content}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <img src={robot_img} alt="" className="robot_img" data-aos="fade-up"/>
        </div>
    )
}
