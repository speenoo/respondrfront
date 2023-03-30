import "./style.css"
import React, {useCallback} from "react";
import {useState} from "react";
import ResponseProfileWithDates from "./components/ResponseProfileWithDatas/ResponseProfileWithDatas";
import Cookies from 'js-cookie';

export default function ResponseProfiles() {
    let [data, setData] = useState([
        {
            flag: false
        }
    ])
    const handleChangeInputs = (e, name, index) => {
       data[index][name] = e
        setData([...data])
    }

    const nameS = Cookies.get("name");
console.log(nameS, "tryrtyryryryrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")

    let SaveData = (index) => {
        data[index].flag = true
        setData([...data])
    }

    let handleAddResponseProfile = () => {
        data.push({flag: false})
        setData([...data])
    }
    let handleResetResponseProfile = () => {
        if (data.length === 1) {
            return setData(data.splice(0, 1))
        }
        data.pop({})
        setData([...data])
    }

    let _renderResponseProfilesItems = () => {
        return data.map((item, index) => {
            return (
                item.flag ?
                    <ResponseProfileWithDates item={item} index={index} data={data} setData={setData}/>
                    :
                    <div className="response_profiles_cont_block1" key={index}>
                        <div className="d-flex align-items-start switch_block">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                            <span className="c-purple fs-18" style={{marginLeft: "18px"}}> Does Auto Reply need approval?</span>
                        </div>
                        <div className="response_profiles_cont_block1_inputs_block">
                            <div
                                className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                                <div className="response_input_block1 d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Business Name</label>
                                    <input type="text"
                                           value={item.businessName}
                                           onChange={(e) => handleChangeInputs(e.target.value, "businessName", index)}/>
                                </div>
                                <div className="response_input_block2 d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Industry?</label>
                                    <input type="text"
                                           value={item.industry}
                                           onChange={(e) => handleChangeInputs(e.target.value, "industry", index)}/>
                                </div>
                            </div>
                            <div
                                className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                                <div className="response_input_block d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Business Description</label>
                                    <textarea name="" id="" cols="" rows="" value={item.businessDesc}
                                              onChange={(e) => handleChangeInputs(e.target.value, "businessDesc", index)}> </textarea>
                                </div>
                            </div>
                            <div
                                className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                                <div className="response_input_block1 d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Business Website</label>
                                    <input type="text" value={item.BusinessSite}
                                           onChange={(e) => handleChangeInputs(e.target.value, "BusinessSite", index)}/>
                                </div>
                                <div className="response_input_block2 d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Special requirements to
                                        include in
                                        Answer?</label>
                                    <input type="text" value={item.requirements}
                                           onChange={(e) => handleChangeInputs(e.target.value, "requirements", index)}/>
                                </div>
                            </div>
                            <div
                                className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                                <div className="response_input_block d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Describe who’s
                                        Responding</label>
                                    <textarea name="" id="" cols="" rows="" value={item.describe}
                                              onChange={(e) => handleChangeInputs(e.target.value, "describe", index)}> </textarea>
                                </div>
                            </div>
                            <div
                                className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                                <div className="response_input_block1">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Gender of responder?</label>
                                    <input type="text" value={item.gender}
                                           onChange={(e) => handleChangeInputs(e.target.value, "gender", index)}/>
                                </div>
                                <div className="response_input_block2 d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Review notifications?</label>
                                    <select name="" id="" className="fs-16" value={item.review}
                                            onChange={(e) => handleChangeInputs(e.target.value, "review", index)}>
                                        <option value="Negative">select</option>
                                        <option value="Negative">Negative</option>
                                        <option value="Positive">Positive</option>
                                        <option value="All">All</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>
                            </div>
                            <div
                                className="d-flex justify-content-space-between align-items-center response_profiles_cont_block1_input_block">
                                <div className="response_input_block2 d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500 c-black">Costumer service email</label>
                                    <input type="text"
                                           value={item.costumer}
                                           onChange={(e) => handleChangeInputs(e.target.value, "costumer", index)}/>
                                </div>
                            </div>
                        </div>
                        <div
                            className="response_profiles_cont_block1_btn_block d-flex justify-content-end align-items-center">
                            <button className="response_profiles_reset_btn f-700 fs-16"
                                    onClick={handleResetResponseProfile}>Reset
                            </button>
                            <button className="response_profiles_save_btn f-700 fs-16"
                                    onClick={() => SaveData(index)}>Save
                            </button>
                        </div>
                    </div>
            )
        })
    }

    return (
        <div className="dashboard_navbars_cont">
            <h4 className="dashboard_navbars_header c-purple fs-20 f-700">
                Response Profiles
            </h4>
            <div className="response_profiles_cont d-grid grid-columns-2fr grid-gab_24">
                {_renderResponseProfilesItems()}
                <div className="response_profiles_cont_block2 d-flex justify-content-center align-items-center">
                    <button className="c-white f-700 fs-20" onClick={handleAddResponseProfile}>+ Add</button>
                </div>
            </div>
        </div>
    )
}