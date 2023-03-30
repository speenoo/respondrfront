import "./style.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import blog_main_pic from "../../assets/images/blog_article_img1.png"
import BlogArticleInfo from "./components/blog_article_info/BlogArticleInfo";
import subcribe_btn from "../../assets/images/subscribe_btn.png"
import PopularNews from "./components/popular_news/PopularNews";
import {useState} from "react";
import Blog from "../Blog/Blog";
import BlogSwiperSlider from "./components/blog_swiper_slider/BlogSwiperSlider";


export default function BlogArticle() {
    let [blogNews,setBlogNews]=useState([
        {
            id:1,
            title:"News Needs to Meet Its Audiences Where They Are",
           desc:"Lorem ipsum dolor sit amet consectetur. Purus sit purus tempus" +
               " accumsan aliquam pellentesque proin nunc. Non tincidunt consequat" +
               " consectetur volutpat platea scelerisque non molestie. Consectetur " +
               "molestie duis nam id nam nulla vitae. Donec sem sed aliquet sed vel " +
               "cras odio augue. Orci nunc mauris euismod egestas. Porta fermentum commodo " +
               "id morbi bibendum risus maecenas risus. Viverra nec cursus urna velit. Mattis " +
               "ac consequat tortor nullam ornare pulvinar tortor sed. Maecenas neque sed morbi massa et praesent sed.",
            day:"Jun 14",
            time: "3 min",
        },
        {
            id:1,
            title:"News Needs to Meet Its Audiences \n" +
                "Where They Are",
            desc:"Lorem ipsum dolor sit amet consectetur. Purus sit purus tempus" +
                " accumsan aliquam pellentesque proin nunc. Non tincidunt consequat" +
                " consectetur volutpat platea scelerisque non molestie. Consectetur " +
                "molestie duis nam id nam nulla vitae. Donec sem sed aliquet sed vel " +
                "cras odio augue. Orci nunc mauris euismod egestas. Porta fermentum commodo " +
                "id morbi bibendum risus maecenas risus.",
            day:"Jun 6",
            time: "3 min",
        },
        {
            id:1,
            title:"News Needs to Meet Its Audiences \n" +
                "Where They Are",
            desc:"Lorem ipsum dolor sit amet consectetur. Purus sit purus tempus" +
                " accumsan aliquam pellentesque proin nunc. Non tincidunt consequat" +
                " consectetur volutpat platea scelerisque non molestie. Consectetur " +
                "molestie duis nam id nam nulla vitae.",
            day:"Jun 4",
            time: "5 min",
        },

    ])
    return (
        <div className="main">
            <div>
                <Header/>
                <div className="container">
                    <div className="container_inner d-flex fd-column">
                        <div className="BlogArticle_container d-flex fd-column align-items-center">
                                <BlogSwiperSlider blogNews={blogNews} setBlogNews={setBlogNews}/>
                        </div>
                        <BlogArticleInfo/>
                    </div>
                </div>
                <div className="subcibe_block">
                    <div className="container">
                        <div className="container_inner">
                            <div
                                className="subcibe_block_inner d-flex justify-content-space-between align-items-center">
                                <p>Newsletter Subcribe</p>
                                <div className="d-flex subcibe_email_block">
                                    <input type="email" placeholder="Enter Your Email" />
                                    <img src={subcribe_btn} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container_inner">
                        <p className="fs-20 c-greenBlue f-600 popular_news_title">Popular News</p>
                    </div>
                </div>
                <PopularNews/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
