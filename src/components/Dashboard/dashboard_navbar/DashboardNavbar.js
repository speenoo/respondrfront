import "./style.css";
import {useState} from "react";

export default  function DashboardNavbar({toggleTabName,tabHandler}){

    return (
        <div className="rating_navbar">
            <ul className="dashboard_navbar_cont align-items-center d-flex justify-content-space-between f-400 fs-16">
                <li className={toggleTabName === 'Reviews' ? "navbar_btn_active c-purple" : "navbar_btn"}
                    onClick={() => tabHandler('Reviews')}>Reviews
                </li>
                <li className={toggleTabName === 'analytics' ? 'navbar_btn_active c-purple' : 'navbar_btn'}
                    onClick={() => tabHandler('analytics')}>Analytics
                </li>
                <li className={toggleTabName === 'Q&A' ? 'navbar_btn_active c-purple ' : 'navbar_btn'}
                    onClick={() => tabHandler('Q&A')}>Q&A
                </li>
                <li className={toggleTabName === 'Response Profiles' ? 'navbar_btn_active c-purple' : 'navbar_btn'}
                    onClick={() => tabHandler('Response Profiles')}>Response Profiles
                </li>
                <li className={toggleTabName === 'Integrations' ? 'navbar_btn_active c-purple' : 'navbar_btn'}
                    onClick={() => tabHandler('Integrations')}>Integrations
                </li>
                <li className={toggleTabName === 'Reples For Approval' ? 'navbar_btn_active c-purple ' : 'navbar_btn'}
                    onClick={() => tabHandler('Reples For Approval')}>Reples For Approval
                </li>
            </ul>
        </div>
    )

}
