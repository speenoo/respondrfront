import "./style.css"
import {useState} from "react";
import NavbarRating from "../../../../../components/Dashboard/nav_bar_rating/NavbarRating";
import GoogleRating from "../google_rating/GoogleRating";
import YelpRating from "../yelp_rating/YelpRating";
import FacebookRating from "../facebook_rating/FacebookRating";


export default function DashboardReviewBlock2(){
    const [toggleTabName, setToggleTabName] = useState('Google Rating')

    const tabHandler = (name) => {
        setToggleTabName(name)
    }

    return(
        <div className="dashboard_review_block2_cont">
            <div>
                <NavbarRating tabHandler={tabHandler}
                        toggleTabName={toggleTabName}/>
            </div>
            {toggleTabName === 'Google Rating' ? <GoogleRating /> : null}
            {toggleTabName === 'Yelp Rating' ? <YelpRating /> : null}
            {toggleTabName === 'Facebook Rating' ? <FacebookRating /> : null}
        </div>
    )
}