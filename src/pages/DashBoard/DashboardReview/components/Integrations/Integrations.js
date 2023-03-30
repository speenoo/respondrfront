import "./style.css"
import "../../../../../App.css"
import React, {useState} from "react";
import google_map from "../../../../../assets/images/Dashboard/GoogleMapTA 1.png";
import google_icon from "../../../../../assets/images/Dashboard/google_icon.png";
import star_icon from "../../../../../assets/images/star.png";
import reviews_author_logo from "../../../../../assets/images/Dashboard/new-york-cafe-logo.png"
import place_logo from "../../../../../assets/images/Dashboard/new-york-cafe-logo.png"

export default function Integrations() {
    let [integrationItem, setIntegrationItem] = useState([
        {
            img: google_icon,
            reviewsFrom: "Google",
            map: google_map,
            place: "New York Café",
            rating: "5.0",
            stars: star_icon,
            reviewsCount: "69",
            reviewsAuthorLogo: reviews_author_logo,
            sphere: "Restaurant",
            serviceOptions: "Dine-in · No takeaway · No delivery",
            address: "Budapest, Erzsébet krt. 9-11, 1073 Hungary",
            WeekDay1: "Monday",
            WeekDay2: "Tuesday",
            WeekDay3: "Wednesday",
            WeekDay4: "Thursday",
            WeekDay5: "Friday",
            WeekDay6: "Saturday",
            WeekDay7: "Sunday",
            HoursDay1: "8AM-12AM",
            HoursDay2: "8AM-12AM",
            HoursDay3: "8AM-12AM",
            HoursDay4: "8AM-12AM",
            HoursDay5: "8AM-12AM",
            HoursDay6: "8AM-12AM",
            HoursDay7: "8AM-12AM",
            phone: "+36 1 886 6167",
            WebSite: "newYork.con"
        },
        {
            img: google_icon,
            reviewsFrom: "Google",
            map: google_map,
            place: "New York Café",
            rating: "5.0",
            stars: star_icon,
            reviewsCount: "69",
            reviewsAuthorLogo: reviews_author_logo,
            sphere: "Restaurant",
            serviceOptions: "Dine-in · No takeaway · No delivery",
            address: "Budapest, Erzsébet krt. 9-11, 1073 Hungary",
            WeekDay1: "Monday",
            WeekDay2: "Tuesday",
            WeekDay3: "Wednesday",
            WeekDay4: "Thursday",
            WeekDay5: "Friday",
            WeekDay6: "Saturday",
            WeekDay7: "Sunday",
            HoursDay1: "8AM-12AM",
            HoursDay2: "8AM-12AM",
            HoursDay3: "8AM-12AM",
            HoursDay4: "8AM-12AM",
            HoursDay5: "8AM-12AM",
            HoursDay6: "8AM-12AM",
            HoursDay7: "8AM-12AM",
            phone: "+36 1 886 6167",
            WebSite: "newYork.con"
        },
        {
            img: google_icon,
            reviewsFrom: "Google",
            map: google_map,
            place: "New York Café",
            rating: "5.0",
            stars: star_icon,
            reviewsCount: "69",
            reviewsAuthorLogo: reviews_author_logo,
            sphere: "Restaurant",
            serviceOptions: "Dine-in · No takeaway · No delivery",
            address: "Budapest, Erzsébet krt. 9-11, 1073 Hungary",
            WeekDay1: "Monday",
            WeekDay2: "Tuesday",
            WeekDay3: "Wednesday",
            WeekDay4: "Thursday",
            WeekDay5: "Friday",
            WeekDay6: "Saturday",
            WeekDay7: "Sunday",
            HoursDay1: "8AM-12AM",
            HoursDay2: "8AM-12AM",
            HoursDay3: "8AM-12AM",
            HoursDay4: "8AM-12AM",
            HoursDay5: "8AM-12AM",
            HoursDay6: "8AM-12AM",
            HoursDay7: "8AM-12AM",
            phone: "+36 1 886 6167",
            WebSite: "newYork.con"
        },
    ])
    return (
        <div className="dashboard_navbars_cont">
            <h4 className="dashboard_navbars_header c-purple fs-20 f-700">
                Integrations
            </h4>
            <div className="integrations_cont d-flex flex-wrap">
                {
                    integrationItem.map((item, index) => {
                        return (
                            <div className="integrations_cont_item d-flex fd-column">
                                <div className="integrations_cont_item_header d-flex">
                                    <img src={item.img} alt=""/>
                                    <span className="f-600 c-purple fs-18">{item.reviewsFrom}</span>
                                </div>
                                <div className="integrations_cont_item_body">
                                <div className="integrations_cont_item_map_area">
                                    <img src={item.map} alt=""/>
                                </div>
                                    <div className="integrations_cont_item_body_content">
                                <div>{item.name}</div>
                                <div className="d-flex fd-column">
                                    <div className="d-flex">
                                        <span className="f-500 fs-22 c-black place_name">{item.place}</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-space-between integrations_cont_item_body_content_block1">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex fd-column">
                                                <div className="d-flex align-items-center">
                                                    <span className="rating f-500 fs-18">{item.rating}</span>
                                                    <div className="rating_stars">
                                                        <img src={item.stars} alt=""/>
                                                        <img src={item.stars} alt=""/>
                                                        <img src={item.stars} alt=""/>
                                                        <img src={item.stars} alt=""/>
                                                        <img src={item.stars} alt=""/>
                                                    </div>
                                                    <div className="d-flex reviews c-darkBlue fs-18 f-500">
                                                        <span>{item.reviewsCount}</span>
                                                        <span>{item.reviewsFrom} reviews</span>
                                                    </div>
                                                </div>
                                                <span className="sphere f-500 fs-18 c_grey2">{item.sphere}</span>
                                            </div>
                                        </div>
                                        <div className="place_logo">
                                            <img src={place_logo} alt=""/>
                                        </div>
                                    </div>
                                    <div className="integrations_cont_item_body_content_block2">
                                    <div className="d-flex integrations_cont_item_body_content_block2_item">
                                        <span className="f-600 fs-16 c-black">Service options</span>
                                        <div className="f-500 fs-16 c_grey2">{item.serviceOptions}</div>
                                    </div>
                                    <div className="d-flex integrations_cont_item_body_content_block2_item">
                                        <span className="f-600 fs-16 c-black">Address</span>
                                        <div className="f-500 fs-16 c_grey2">{item.address}</div>
                                    </div>
                                    <div className="d-flex  integrations_cont_item_body_content_block2_item">
                                        <span className="f-600 fs-16 c-black">Hours</span>
                                        <div className="d-flex fd-column">
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay1} {item.HoursDay1}</div>
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay2} {item.HoursDay2}</div>
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay3} {item.HoursDay3}</div>
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay4} {item.HoursDay4}</div>
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay5} {item.HoursDay5}</div>
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay6} {item.HoursDay6}</div>
                                            <div className="f-500 fs-16 c_grey2" style={{marginBottom:"4px"}}>{item.WeekDay7} {item.HoursDay7}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center integrations_cont_item_body_content_block2_item">
                                        <span className="f-600 fs-16 c-black">Phone</span>
                                        <div className="f-500 fs-16 c_grey2">{item.phone}</div>
                                    </div>
                                    <div className="d-flex align-items-center integrations_cont_item_body_content_block2_item">
                                        <span className="f-600 fs-16 c-black">WebSite</span>
                                        <div className="f-500 fs-16 c_grey2">{item.WebSite}</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}