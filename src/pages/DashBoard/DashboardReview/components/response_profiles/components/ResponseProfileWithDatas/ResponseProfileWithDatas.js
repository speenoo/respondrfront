import "../../style.css"
import edit_icon from "../../../../../../../assets/images/Dashboard/edit_icon.png";
import React from "react";

export default function ResponseProfileWithDates(props){
    let {item,index,data,setData}=props
    return(
        <div className="response_profiles_cont_block1" key={index}>
            <div className="d-flex justify-content-space-between align-items-center"
                 style={{marginBottom: "28px"}}>
                <div className="d-flex align-items-start">
                    <label className="switch">
                        <input type="checkbox" checked/>
                        <span className="slider round"></span>
                    </label>
                    <span className="c-purple fs-18"
                          style={{marginLeft: "18px"}}> Does Auto Reply need approval?</span>
                </div>
                <button onClick={() => {
                    data[index].flag = false
                    setData([...data])
                }}><img src={edit_icon} alt=""/></button>
            </div>

            <div className="response_profiles_cont_block1_inputs_block">
                <div
                    className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                    <div className="response_input_block1 d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Business Name</label>
                        <div className="response_input_block_result fs-16 f-500">{item.businessName}</div>
                    </div>
                    <div className="response_input_block2 d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Industry</label>
                        <div className="response_input_block_result fs-16 f-500">{item.industry}</div>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                    <div className="response_input_block d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Business Description</label>
                        <div className="response_input_block_result fs-16 f-500">{item.businessDesc}</div>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                    <div className="response_input_block1 d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Business Website</label>
                        <div className="response_input_block_result fs-16 f-500">{item.BusinessSite}</div>
                    </div>
                    <div className="response_input_block2 d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Special requirements to
                            include in
                            Answer</label>
                        <div className="response_input_block_result fs-16 f-500">{item.requirements}</div>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                    <div className="response_input_block d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Describe who’s
                            Responding</label>
                        <div className="response_input_block_result fs-16 f-500">{item.describe}</div>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                    <div className="response_input_block1">
                        <label htmlFor="" className="fs-16 f-700 c-black">Gender of responder</label>
                        <div className="response_input_block_result fs-16 f-500">{item.gender}</div>
                    </div>
                    <div className="response_input_block2 d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Review notifications</label>
                        <div className="response_input_block_result fs-16 f-500">{item.review}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                    <div className="response_input_block2 d-flex fd-column">
                        <label htmlFor="" className="fs-16 f-700 c-black">Costumer service email</label>
                       <div className="response_input_block_result fs-16 f-500">{item.costumer}</div></div>
                    </div>
            </div>
        </div>
    )
}