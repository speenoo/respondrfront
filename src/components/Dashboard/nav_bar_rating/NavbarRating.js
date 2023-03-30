import "./style.css";
import {useState} from "react";

export default  function NavbarRating({toggleTabName,tabHandler}){

    return (
        <div className="rating_navbar">
            <ul className="navbar_cont align-items-center d-flex  f-400 fs-16">
                <li className={toggleTabName === 'Google Rating' ? "navbar_btn_active c-purple" : "navbar_btn"}
                    onClick={() => tabHandler('Google Rating')}>Google Rating
                </li>
                <li className={toggleTabName === 'Yelp Rating' ? 'navbar_btn_active c-purple' : 'navbar_btn'}
                    onClick={() => tabHandler('Yelp Rating')}>Yelp Rating
                </li>
                {/*<li className={toggleTabName === 'Facebook Rating' ? 'navbar_btn_active c-purple' : 'navbar_btn'}*/}
                {/*    onClick={() => tabHandler('Facebook Rating')}>Facebook Rating*/}
                {/*</li>*/}
            </ul>
        </div>
    )

}
