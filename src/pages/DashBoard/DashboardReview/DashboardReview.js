import "./style.css"
import HeaderDashboard from "../../../components/Dashboard/header_dashboard/HeaderDashboard";
import DashboardReviewBlock1 from "./components/dashboard_review_block1/DashboardReviewBlock1";
import DashboardReviewBlock2 from "./components/dashboard_review_block2/DashboardReviewBlock2";
import DashboardReviewBlock3 from "./components/dashboard_review_block3/DashboardReviewBlock3";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


export default function DashboardReview() {
    let location = useLocation()
    console.log(location, 'location');


    return (
        <div className="main">
            <div style={{background:" #F8F8F8"}}>
                <HeaderDashboard/>
                <div className="dashboard_review_cont">
                <div className="container">
                    <div className="container_inner d-flex fd-column">
                        <div className="d-flex justify-content-space-between dashboard_review_cont_blocks flex-wrap">
                            <DashboardReviewBlock1 rating={location.state.rating} review_count={location.state.review_count}/>
                            <DashboardReviewBlock2/>
                        </div>
                        <div>
                            <DashboardReviewBlock3 business_id={location.state.id} name={location.state.name} address={location.state.address}
                                                   rating={location.state.rating} review_count={location.state.review_count}/>
                        </div>
                    </div>
                    </div>
                </div>

        </div>
    <div>

    </div>
</div>
)
}