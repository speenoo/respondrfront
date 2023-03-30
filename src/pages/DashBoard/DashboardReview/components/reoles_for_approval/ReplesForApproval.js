import "./style.css"
import React, {useState} from "react";
import star_full from "../../../../../assets/images/star.png";
import google_img from "../../../../../assets/images/Dashboard/google_icon.png";
import yelp_img from "../../../../../assets/images/Dashboard/yelp_icon.png";
import facebook_img from "../../../../../assets/images/Dashboard/facebook_icon.png";
import ok_icon from "../../../../../assets/images/Dashboard/ok_icon.png";
import edit_icon from "../../../../../assets/images/Dashboard/edit_icon.png";
import remove_icon from "../../../../../assets/images/Dashboard/remove_icon.png";

export default function ReplesForApproval() {
    let [replesQuestions, setReplesQuestions] = useState([
        {
            id: 1,
            logo: google_img,
            site: "Google",
            createdAt: "03.10.20 at 10:53 AM",
            stars: star_full,
            time: "7 months ago",
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Leo turpis elit non amet " +
                "tempus bibendum turpis. Ac adipiscing auctor aliquet cras facilisis pellentesque " +
                "nulla proin lacus. Volutpat donec facilisis porttitor mattis. Senectus sed massa " +
                "facilisis mauris. Nunc id semper dictum sed at quam duis. Commodo sapien lacinia " +
                "laoreet congue elit mauris amet duis sit. Id risus felis viverra massa diam neque ut " +
                "mauris et. Vivamus nunc at aliquam dictum fermentum venenatis mi. Porttitor sed sed est " +
                "id ultricies viverra sit. Porttitor sagittis fermentum feugiat quam iaculis aliquet lectus " +
                "quam. Vitae urna sed et nibh eu. Faucibus scelerisque feugiat eget turpis commodo.\n",
            answer: "Lorem ipsum dolor sit amet consectetur. Leo turpis elit non amet tempus bibendum turpis." +
                " Ac adipiscing auctor aliquet cras facilisis pellentesque nulla proin lacus. Volutpat donec" +
                " facilisis porttitor mattis. Senectus sed massa facilisis mauris. Nunc id semper dictum sed at " +
                "quam duis. Commodo sapien lacinia laoreet congue elit mauris amet duis sit. \n"
        },
        {
            id: 2,
            logo: yelp_img,
            site: "Yelp",
            createdAt: "03.10.20 at 10:53 AM",
            stars: star_full,
            time: "30 minutes ago",
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Leo turpis elit non amet " +
                "tempus bibendum turpis. Ac adipiscing auctor aliquet cras facilisis pellentesque " +
                "nulla proin lacus. Volutpat donec facilisis porttitor mattis. Senectus sed massa " +
                "facilisis mauris. Nunc id semper dictum sed at quam duis. Commodo sapien lacinia " +
                "laoreet congue elit mauris amet duis sit. Id risus felis viverra massa diam neque ut " +
                "mauris et. Vivamus nunc at aliquam dictum fermentum venenatis mi. Porttitor sed sed est " +
                "id ultricies viverra sit. Porttitor sagittis fermentum feugiat quam iaculis aliquet lectus " +
                "quam. Vitae urna sed et nibh eu. Faucibus scelerisque feugiat eget turpis commodo.\n",
            answer: "text"
        },
        {
            id: 3,
            logo: facebook_img,
            site: "Facebook",
            createdAt: "03.10.20 at 10:53 AM",
            stars: star_full,
            time: "7 months ago",
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Leo turpis elit non amet " +
                "tempus bibendum turpis. Ac adipiscing auctor aliquet cras facilisis pellentesque " +
                "nulla proin lacus. Volutpat donec facilisis porttitor mattis. Senectus sed massa " +
                "facilisis mauris. Nunc id semper dictum sed at quam duis. Commodo sapien lacinia " +
                "laoreet congue elit mauris amet duis sit. Id risus felis viverra massa diam neque ut " +
                "mauris et. Vivamus nunc at aliquam dictum fermentum venenatis mi. Porttitor sed sed est " +
                "id ultricies viverra sit. Porttitor sagittis fermentum feugiat quam iaculis aliquet lectus " +
                "quam. Vitae urna sed et nibh eu. Faucibus scelerisque feugiat eget turpis commodo.\n",
            answer: ""
        },
    ])
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState()

    const handleChangeAnswer = (e) => {
        setValue(value)
    }
    const onChangeText = (e, index) => {
        replesQuestions[index].answer = e
        setReplesQuestions(replesQuestions)
    }
    const handleChangeSave = () => {
        setValue(value)
    }
    const handleChangeRemove = (index) => {
        console.log('revg');
        replesQuestions[index].answer = ''
        setReplesQuestions([...replesQuestions])
    }


    return (
        <div className="dashboard_navbars_cont">
            <h4 className="dashboard_navbars_header c-purple fs-20 f-700">
                Reples For Approval
            </h4>
            <div className="reples_approval_cont d-flex fd-column">
                <div className="questions_answers_cont_title_block">
                    <h4 className="fs-18 f-500 c_grey3">Lorem Ipsum</h4>
                </div>
                {replesQuestions.map((item, index) => {
                    return (
                        <div className="reples_approval_cont_block d-flex fd-column " key={item.id}>
                            <div className="reples_approval_cont_block1">
                                <div className="d-flex align-items-center reples_approval_cont_block1_title_block">
                                    <img src={item.logo} alt=""/>
                                    <p className="f-600 fs-20">{item.site}</p>
                                    <div className="fs-12 c_grey3 f-500">Created at: <span
                                        style={{marginLeft: "10px"}}>{item.createdAt}</span></div>
                                </div>
                                <div className="d-flex align-items-center reples_approval_cont_block1_stars_block">
                                    <div>
                                        <img src={item.stars} alt=""/>
                                        <img src={item.stars} alt=""/>
                                        <img src={item.stars} alt=""/>
                                        <img src={item.stars} alt=""/>
                                        <img src={item.stars} alt=""/>
                                    </div>
                                    <p className="c_grey2 f-500 fs-14">{item.time}</p>
                                </div>
                                <div
                                    className="reples_approval_cont_block1_authorQuestion fs-14 c-black f-500">{item.authorQuestion}</div>
                            </div>
                            {
                                item.answer ?
                                    <div className="reples_approval_cont_block2">
                                        <div className="d-flex align-items-end justify-content-end">
                                            <button onClick={() => handleChangeSave(index)}><img src={ok_icon} alt=""/>
                                            </button>
                                            <button onClick={() => handleChangeRemove(index)}><img src={remove_icon}
                                                                                                   alt=""/>
                                            </button>
                                            <button onClick={() => handleChangeAnswer(index)}><img src={edit_icon}
                                                                                                   alt=""/></button>
                                        </div>
                                                <textarea name="" id="" cols="" rows=""
                                                          value={value}
                                                          onChange={(e) => onChangeText(e.target.value, index)}>{item.answer}</textarea>
                                                {/*<p className="fs-16 f-500">{item.answer}</p>*/}
                                    </div>
                                    :
                                    null
                            }

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


