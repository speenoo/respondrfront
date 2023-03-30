import "./style.css"
import {useState} from "react";
import DashboardNavbar from "../../../../../components/Dashboard/dashboard_navbar/DashboardNavbar";
import ReviewsAndResponses from "../review_and_responses/ReviewsAndResponses";
import Analytics from "../analytics/Anaytics";
import QuestionsAndAnswers from "../questions_and_answers/QuestionsAndAnswers";
import ReplesForApproval from "../reoles_for_approval/ReplesForApproval";
import ResponseProfiles from "../response_profiles/ResponseProfiles";
import Integrations from "../Integrations/Integrations";


export default function DashboardReviewBlock3(props){
    const [toggleTabName, setToggleTabName] = useState('Reviews')

    const tabHandler = (name) => {
        setToggleTabName(name)
    }
    return(
        <div className="container">
            <div className="container_inner">
                <div className="dashboard_review_block3_cont">
                    <div>
                        <DashboardNavbar tabHandler={tabHandler}
                                      toggleTabName={toggleTabName}/>
                    </div>
                    {toggleTabName === 'Reviews' ? <ReviewsAndResponses business_id={props.business_id} name={props.name} address={props.address}
                                                                        rating={props.rating}  review_count={props.review_count} method={props.method}
                                                                        setReviews={props.setReviews} reviews={props.reviews}/> : null}
                    {toggleTabName === 'analytics' ? <Analytics /> : null}
                    {toggleTabName === 'Q&A' ? <QuestionsAndAnswers /> : null}
                    {toggleTabName === 'Response Profiles' ? <ResponseProfiles /> : null}
                    {toggleTabName === 'Integrations' ? <Integrations /> : null}
                    {toggleTabName === 'Reples For Approval' ? <ReplesForApproval /> : null}
                </div>
            </div>
        </div>
    )
}
