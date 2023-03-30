import "./style.css"
import HeaderDashboard from "../../../components/Dashboard/header_dashboard/HeaderDashboard";
import React, {useState} from "react";
import NavbarRating from "../../../components/Dashboard/nav_bar_rating/NavbarRating";
import GoogleRating from "../DashboardReview/components/google_rating/GoogleRating";
import YelpRating from "../DashboardReview/components/yelp_rating/YelpRating";
import FacebookRating from "../DashboardReview/components/facebook_rating/FacebookRating";
import NavbarPayments from "./components/navbar_payments/NavbarPayments";
import PaymentMethods from "./components/payment_methods/PaymentMethods";
import PaymentInformation from "./components/payment_information/PaymentInformation";
import ProfileSettings from "./components/profile_settings/ProfileSettings";


export default function DashboardSettings(){
    const [toggleTabName, setToggleTabName] = useState('Profile Settings')

    const tabHandler = (name) => {
        setToggleTabName(name)
    }

    return(
        <div className="main">
            <div>
                <HeaderDashboard isLogin={true}/>
                <div className="container">
                    <div className="container_inner">
                        <h2 style={{marginTop:"130px"}}>Settings</h2>
                        <div className="dashboard_settings_cont">
                            <div className="dashboard_settings_cont_navbar">
                                <div>
                                    <NavbarPayments tabHandler={tabHandler}
                                                  toggleTabName={toggleTabName}/>
                                </div>
                                {toggleTabName === 'Profile Settings' ? <ProfileSettings /> : null}
                                {toggleTabName === 'Payment Methods' ? <PaymentMethods /> : null}
                                {toggleTabName === 'Payment Information' ? <PaymentInformation /> : null}
                                {toggleTabName === 'Menu 3' ? <div>Menu 3</div> : null}
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