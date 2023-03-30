import {useNavigate} from "react-router-dom";
import {useState} from "react";
import blog_img1 from "../../../../assets/images/blog_img1.png";
import blog_img2 from "../../../../assets/images/blog_img2.png";
import blog_img3 from "../../../../assets/images/blog_img3.png";

export default function BlogContentWebinary() {
    let navigate=useNavigate()
    let [blog, setBlog] = useState([
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
    ])
    return (
        <>
            <div className="blog_content_cont d-grid grid-gab_30 grid-columns-3fr">
                {
                    blog.map((item,index)=>{
                        return (
                            <div className="blog_content_cont_item" onClick={()=>navigate("/blog-article")}>
                                <img src={item.backImg} alt=""/>
                                <div className="blog_content_item_textBlock">
                                    <div className="blog_content_item_textBlock_inner">
                                        <p className="fs-14 f-600 c_grey3 blog_content_item_textBlock_day">{item.day}</p>
                                        <p className="fs-14 f-600 blog_content_item_textBlock_title">{item.title}</p>
                                        <p className="fs-18 c_grey3 blog_content_item_textBlock_desc">{item.desc}</p>
                                        <p className="fs-18 c_grey3 blog_content_item_textBlock_allDesc">{item.allDesc}</p>
                                        <div className="d-flex justify-content-end">
                                            <button className="fs-8 blog_content_item_textBlock_more">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="see_more_btn d-flex align-items-center justify-content-center">
                <button className="c-white fs-20">See More</button>
            </div>
        </>
    )
}