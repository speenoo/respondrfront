import "./style.css"
import React, {useState} from "react";
import star_full from "../../../../../assets/images/Dashboard/star_grey_full.png"
import add_answer_pic from  "../../../../../assets/images/Dashboard/add_answer_pic.png"


export default function QuestionsAndAnswers() {
    let [questions, setQuestions] = useState([
        {
            id: 1,
            votesCount: "0",
            author: "William",
            time: "30 minutes ago",
            stars: star_full,
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Ultricies urna fames scelerisque at gravida est elit diam massa?"
        },
        {
            id: 2,
            votesCount: "1",
            author: "William",
            time: "30 minutes ago",
            stars: star_full,
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Ultricies urna fames scelerisque at gravida est elit diam massa?"
        },
        {
            id: 3,
            votesCount: "1",
            author: "William",
            time: "30 minutes ago",
            stars: star_full,
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Ultricies urna fames scelerisque at gravida est elit diam massa?"
        },
        {
            id: 4,
            votesCount: "0",
            author: "William",
            time: "30 minutes ago",
            stars: star_full,
            authorQuestion: "Lorem ipsum dolor sit amet consectetur. Ultricies urna fames scelerisque at gravida est elit diam massa?"
        },
    ])
    return (
        <div className="dashboard_navbars_cont">
            <h4 className="dashboard_navbars_header c-purple fs-20 f-700">
                Q & A
            </h4>
            <div className="questions_answers_cont d-flex fd-column">
                <div className="d-flex justify-content-space-between align-items-center">
                    <div className="questions_answers_cont_title_block">
                        <h4 className="fs-18 f-500 c_grey3">Questions (130)</h4>
                        <select name="" id="" className="fs-14 c_grey2 questions_answers_cont_title_block_select">
                            <option value="">Sort by time posted</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <button className="settings_btn c-white fs-16 f-500">Archive all</button>
                </div>
                {questions.map((item, index) => {
                    return (
                        <div className="questions_answers_cont_block d-flex align-items-center ">
                            <div className="questions_answers_cont_block1 d-flex fd-column align-items-center">
                                <div className="fs-18 f-500">{item.votesCount}</div>
                                <p className='fs-18 f-500'>VOTES</p>
                            </div>
                            <div className="questions_answers_cont_block2 d-flex fd-column">
                                <div className="d-flex align-items-center questions_answers_cont_block2_author_block">
                                    <div className="fs-20 f-500 c-purple">{item.author}</div>
                                    <p className="fs-10 c_grey">{item.time}</p>
                                    <img src={item.stars} alt=""/>
                                </div>
                                <div className="fs-14 c_grey2 f-500">{item.authorQuestion}</div>
                                <div className="add_answer_block d-flex align-items-center">
                                    <img src={add_answer_pic} alt=""/>
                                    <button className='f-500 fs-14 c_grey3'>Add answer</button>
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
