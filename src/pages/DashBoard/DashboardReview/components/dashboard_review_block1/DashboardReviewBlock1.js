import "./style.css"
import google_icon from "../../../../../assets/images/Dashboard/google_icon.png"
import yelp_icon from "../../../../../assets/images/Dashboard/yelp_icon.png"
import view_all_icon from "../../../../../assets/images/Dashboard/touch-svgrepo-com.png"
import facebook_icon from "../../../../../assets/images/Dashboard/facebook_icon.png"
import edit_icon from "../../../../../assets/images/Dashboard/edit_icon.png"
import google_review_pic from "../../../../../assets/images/Dashboard/google_review_block1_img.png"
import star_grey_full from "../../../../../assets/images/Dashboard/star_grey_full.png"
import Charts from "../chart/Charts";
import star_pic from "../../../../../assets/images/star.png";
import React from "react";
import GaugeChart from 'react-gauge-chart';
const chartStyle = {
    height: 250,
}

export default function DashboardReviewBlock1(props) {

    function repeatRate(count) {
        let arr = []
        for (let i = 0; i < count; i++) {
            arr.push({})
        }
        return arr.map(() => {
            return (
                <img src={star_grey_full} alt=""/>
            )
        })
    }
    return (
        <div className="dashboard_review_block1_cont d-flex fd-column">
            <div className="d-flex">
                <div className="dashboard_review_block1">
                    <div
                        className="dashboard_review_block1_inner d-flex justify-content-space-between align-items-center">
                        <div className="d-flex dashboard_review_block1_1 align-items-center">
                            <img src={google_icon} alt=""/>
                            <p className="fs-20 f-700" style={{color:"#177EE6"}}>Google</p>
                        </div>
                        <div className="dashboard_review_block1_2 d-flex justify-content-space-between">
                            <p className="fs-14 c_grey" style={{marginRight: "2px"}}>2.2</p>
                            <div>
                                <img src={star_grey_full} alt=""/>
                                <img src={star_grey_full} alt=""/>
                                <img src={star_grey_full} alt=""/>
                            </div>
                            {/*<img src={edit_icon} alt=""/>*/}
                            {/*<label className="switch">*/}
                            {/*    <input type="checkbox"/>*/}
                            {/*        <span className="slider round"></span>*/}
                            {/*</label>*/}
                        </div>
                    </div>
                </div>
                <div className="dashboard_review_block2">
                    <div
                        className="dashboard_review_block1_inner d-flex justify-content-space-between align-items-center">
                        <div className="d-flex dashboard_review_block1_1 align-items-center">
                            <img src={yelp_icon} alt=""/>
                            <p className="fs-20 f-700" style={{color:"#FE1A19"}}>Yelp</p>
                        </div>
                        <div className="dashboard_review_block1_2 d-flex justify-content-space-between">
                            <p className="fs-14 c_grey" style={{marginRight: "2px"}}>{props.rating}</p>
                            {
                                props.rating ?
                                    <div>
                                        {repeatRate(props.rating)}
                                    </div>
                                    :
                                    null
                            }
                            {/*<div>*/}
                            {/*    <img src={star_grey_full} alt=""/>*/}
                            {/*    <img src={star_grey_full} alt=""/>*/}
                            {/*    <img src={star_grey_full} alt=""/>*/}
                            {/*    <img src={star_grey_full} alt=""/>*/}
                            {/*    <img src={star_grey_full} alt=""/>*/}
                            {/*</div>*/}
                            {/*<img src={edit_icon} alt=""/>*/}
                            {/*<label className="switch">*/}
                            {/*    <input type="checkbox"/>*/}
                            {/*        <span className="slider round"></span>*/}
                            {/*</label>*/}
                        </div>
                    </div>
                </div>
                <div className="dashboard_review_block3">
                    <div className="dashboard_review_block1_inner d-flex justify-content-space-between align-items-center">
                        <div className="d-flex dashboard_review_block1_1 align-items-center">
                            <img src={view_all_icon} alt=""/>
                            <p className="c-greenBlue fs-20">View All</p>
                        </div>
                        {/*<div className="dashboard_review_block1_2 d-flex justify-content-space-between">*/}
                        {/*    <p className="fs-14 c_grey" style={{marginRight: "2px"}}>4.2</p>*/}
                        {/*    <div>*/}
                        {/*        <img src={star_grey_full} alt=""/>*/}
                        {/*        <img src={star_grey_full} alt=""/>*/}
                        {/*        <img src={star_grey_full} alt=""/>*/}
                        {/*        <img src={star_grey_full} alt=""/>*/}
                        {/*    </div>*/}
                        {/*    /!*<img src={edit_icon} alt=""/>*!/*/}
                        {/*    /!*<label className="switch">*!/*/}
                        {/*    /!*    <input type="checkbox"/>*!/*/}
                        {/*    /!*    <span className="slider round"></span>*!/*/}
                        {/*    /!*</label>*!/*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="dashboard_review_block1_cont_block2 d-flex align-items-center" style={{marginTop: "51px"}}>
                {/*<Charts/>*/}
                <GaugeChart id="gauge-chart5"
                            nrOfLevels={420}
                            arcsLength={[0.3, 0.5, 0.2]}
                            colors={['#ff4942', '#ffc916', '#a4cd3c']}
                             percent={0.37}
                            arcPadding={0.02}
                    // style={chartStyle}
                />
                <div className="d-flex fd-column dashboard_review_block1_cont_block2_percent">
                    <div className="dashboard_review_block1_cont_block2_percent1 d-flex align-items-center">
                        <button className="c-white f-500 fs-12">50%</button>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="dashboard_review_block1_cont_block2_percent2  d-flex align-items-center">
                        <button className="c-white f-500 fs-12">25%</button>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="dashboard_review_block1_cont_block2_percent3  d-flex align-items-center">
                        <button className="c-white f-500 fs-12">25%</button>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                {/*<img src={google_review_pic} alt=""/>*/}
            </div>
        </div>

    )
}
