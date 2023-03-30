import "./style.css"
import review_pic_2 from "../../../../../assets/images/Dashboard/review_pic2.png";
import LineChart from "./google_rating_chart/GoogleRatingChart";
import {useState} from "react";
import GoogleRatingChart from "./google_rating_chart/GoogleRatingChart";

export default function GoogleRating(){
    return(
        <div className="dashboard_review_block2_cont_block2">
          <GoogleRatingChart/>
            {/*<img src={review_pic_2} alt=""/>*/}
        </div>
    )
}