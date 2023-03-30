import "./style.css"
import {useState} from "react";
import blog_img1 from "../../../../assets/images/blog_img1.png";
import blog_img2 from "../../../../assets/images/blog_img2.png";
import blog_img3 from "../../../../assets/images/blog_img3.png";
import {useNavigate} from "react-router-dom";
import post1 from "../../../../assets/images/Post1.png";

export default function PopularNews() {
    let navigate=useNavigate()
    let [popular, setPopular] = useState([
        {
            id: 1,
            backImg: blog_img1,
            day: "FRI JUN 19 2022",
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Sample small text. Lorem ipsum dolor sit amet.",
            allDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " +
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra," +
                " per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        },
        {
            id: 2,
            backImg: blog_img2,
            day: "FRI JUN 19 2022",
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Sample small text. Lorem ipsum dolor sit amet.",
            allDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " +
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra," +
                " per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",

        },
        {
            id: 3,
            backImg: blog_img3,
            day: "FRI JUN 19 2022",
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Sample small text. Lorem ipsum dolor sit amet.",
            allDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " +
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra," +
                " per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        },
        {
            id: 4,
            backImg: blog_img1,
            day: "FRI JUN 19 2022",
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Sample small text. Lorem ipsum dolor sit amet.",
            allDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " +
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra," +
                " per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        },
        {
            id: 5,
            backImg: blog_img2,
            day: "FRI JUN 19 2022",
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Sample small text. Lorem ipsum dolor sit amet.",
            allDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " +
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra," +
                " per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
        },
    ])
    return (
        <div className="popular_news_cont">
            <div className="container">
                <div className="container_inner">
                    <div className="popular_news_cont_inner d-flex align-items-center justify-content-space-between">
                        {
                            popular.map((item,index)=>{
                                return (
                                    <div className="popular_news_cont_item" onClick={()=>navigate("/blog-article")}>
                                        <img src={post1} alt=""/>
                                        <div className="popular_news_cont_item_text">
                                            <div className="pop_news_info">
                                                <p className="fs-14 f-600 c_grey3 pop_news_info_day">{item.day}</p>
                                                <p className="fs-14 f-700 c-orange pop_news_info_title">{item.title}</p>
                                                <p className="fs-12 c_grey3 pop_news_info_desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
