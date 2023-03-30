import "./style.css"
import star_pic from "../../../../../assets/images/star.png";
import AnalyticsCalendar1 from "./components/analytics_calendar1/AnalyticsCalendar1";
import AnalyticsCalendar2 from "./components/analytics_calendar2/AnalyticsCalendar2";
import analytics_pic1 from "../../../../../assets/images/Dashboard/analytics_pic1.png";
import React from "react";
import "./style.css";
import analytics_pic1_1 from "../../../../../assets/images/Dashboard/analytics_pic1.png"
import analytics_pic2 from "../../../../../assets/images/Dashboard/analytics_pic2.png"
import analytics_pic3 from "../../../../../assets/images/Dashboard/analytics_pic3.png"
import analytics_pic4 from "../../../../../assets/images/Dashboard/analytics_pic4.png"
import AnalyticsDataChart1 from "./components/analytics_data_chart1/AnalyticsDataChart1";
import AnalyticsDataChart2 from "./components/analytics_data_chart2/AnalyticsDataChart2";
import AnalyticsBarChart from "./components/analytics_bar_chart/AnalyticsBarChart";


export default function Analytics() {
    return (
        <div className="dashboard_navbars_cont">
            <div className="dashboard_navbars_header c-purple fs-20 f-700">
                Analytics
            </div>
            <div className="analytics_container1 d-flex fd-column">
                <div className="analytics_container1_block1 d-flex justify-content-space-between">
                    <div className="d-flex fd-column">
                        <div className="d-flex justify-content-space-between">
                            <AnalyticsCalendar1/>
                            <AnalyticsCalendar2/>
                        </div>
                        <div className="analytics_container1_block1_diagrams d-flex justify-content-space-between">
                            {/*<img src={analytics_pic1_1} alt=""/>*/}
                            <AnalyticsDataChart1/>
                            <AnalyticsDataChart2/>
                            {/*<img src={analytics_pic2} alt=""/>*/}
                        </div>
                    </div>
                    <div className="analytics_container1_block1_2 d-flex justify-content-space-between">
                        {/*<img src={analytics_pic4} alt=""/>*/}
                        <AnalyticsBarChart/>
                    </div>
                    <div className="analytics_container1_block1_3">
                        <img src={analytics_pic3} alt=""/>
                    </div>
                </div>
                <div className="analytics_container1_block2 d-flex justify-content-space-between flex-wrap">
                    <div className="analytics_container1_block2_1">
                        <p className='fs-18 c_grey f-500'>Total Reviews</p>
                        <div className="text-center c-black f-700 fs-35">12,150</div>
                        <div className="range">
                            <div className="range_inner"></div>
                        </div>
                    </div>
                    <div className="analytics_container1_block2_2">
                        <p className='fs-18 c_grey f-500'>Average Rate</p>
                        <div className="text-center c-black f-700 fs-35">32.42%</div>
                        <div className="range">
                            <div className="range_inner"></div>
                        </div>
                    </div>
                    <div className="analytics_container1_block2_3">
                        <p className='fs-18 c_grey f-500'>Lorem Ipsum</p>
                        <div className="text-center c-black f-700 fs-35">5,640</div>
                        <div className="range">
                            <div className="range_inner"></div>
                        </div>
                    </div>
                    <div className="analytics_container1_block2_4">
                        <p className='fs-18 c_grey f-500'>Lorem Ipsum</p>
                        <div className="text-center c-black f-700 fs-35">$377.62 K</div>
                        <div className="range">
                            <div className="range_inner"></div>
                        </div>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </div>
    )
}
