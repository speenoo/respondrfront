import "./style.css"
import hours_weekly_pic from "../../../../assets/images/hours-service-pic.svg"
import brand_grow_pic from "../../../../assets/images/brand_grow_pic.svg"
import market_pic from "../../../../assets/images/with-line.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function HomeBlock2() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container">
            <div className="container_inner">
                <div className="home_block_2_cont d-flex justify-content-center flex-wrap">
                    <div className="home_block_2_cont_item1" data-aos="zoom-out-right">
                        <div className="home_block_2_cont_item_inner">
                            <p className="f-500 fs-35 text-center home_block_2_cont_item_title">Save 10+ Hours
                                Weekly</p>
                            <div className="f-500 fs-20 home_block_2_cont_item_desc">
                                Stop worrying about responding to your reviews and use Respondr! Our AI creates
                                original, human-like responses for any review saving hours that could be spent
                                elsewhere.
                            </div>
                            <img src={hours_weekly_pic} alt="" className="hours_weekly_pic"/>
                        </div>
                    </div>
                    <div className="home_block_2_cont_item2" data-aos="zoom-in-up">
                        <div className="home_block_2_cont_item_inner">
                            <p className="f-500 fs-35 text-center home_block_2_cont_item_title">Rank Higher 34% on
                                Google</p>
                            <div className="f-500 fs-20 home_block_2_cont_item_desc">
                                By promptly responding to your customer's reviews our average customer sees a 34%
                                increase in online search placement!
                            </div>
                            <img src={brand_grow_pic} alt="" className="brand_grow_pic"/>
                        </div>
                    </div>
                    <div className="home_block_2_cont_item3" data-aos="zoom-in-left">
                        <div className="home_block_2_cont_item_inner">
                            <p className="f-500 fs-35 text-center home_block_2_cont_item_title">Generate More
                                Business</p>
                            <div className="f-500 fs-20 home_block_2_cont_item_desc">
                                After skyrocketing your customer engagement and increasing google ranking, your business
                                will see more customers every day!
                            </div>
                            <img src={market_pic} alt="" className="market_pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
