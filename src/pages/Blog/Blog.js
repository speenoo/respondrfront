import Header from "../../components/header/Header";
import ContactContent1 from "../Contact/components/contact_content1/ContactContent1";
import ContactForm from "../Contact/components/contact_form/ContactForm";
import Footer from "../../components/footer/Footer";
import "./style.css"
import {useState} from "react";
import UseCasesAgency from "../UseCases/components/use-cases-agency/UseCasesAgency";
import UseCasesSMB from "../UseCases/components/use-caeses-SMB/UseCasesSMB";
import BlogContentAll from "./components/blog_content_all/BlogContentAll";
import BlogContentArticle from "./components/blog_content_article/BlogContentArticle";
import BlogContentVideo from "./components/blog_content_Video/BlogContentVideo";
import BlogContentWebinary from "./components/blog_content_webinary/BlogContentWebinary";


export default function Blog(){
    const [toggleTabName, setToggleTabName] = useState('Article')

    const tabHandler = (name) => {
        setToggleTabName(name)
    }

    return (
        <div className="main">
            <div>
                <Header/>
                <div className="container">
                    <div className="container_inner d-flex fd-column">
                        <div className="blog_container d-flex fd-column align-items-center">
                            <div className="blog_buttons_cont d-flex justify-content-space-between align-items-center">
                                <li className={toggleTabName === 'Article' ? "fs-20 f-700 blogButtons_btn_active" : "fs-20 f-700 blogButtons_btn"}
                                    onClick={() => tabHandler('Article')}>Article
                                </li>
                                <li className={toggleTabName === 'Video' ? "fs-20 f-700 blogButtons_btn_active" : "fs-20 f-700 blogButtons_btn"}
                                    onClick={() => tabHandler('Video')}>Video
                                </li>
                                <li className={toggleTabName === 'Webinary' ? "fs-20 f-700 blogButtons_btn_active" : "fs-20 f-700 blogButtons_btn"}
                                    onClick={() => tabHandler('Webinary')}>Webinary
                                </li>
                                <li className={toggleTabName === 'All' ? "fs-20 f-700 blogButtons_btn_active" : "fs-20 f-700 blogButtons_btn"}
                                    onClick={() => tabHandler('All')}>All
                                </li>
                            </div>
                            {toggleTabName === 'Article' ? <BlogContentArticle/> : null}
                            {toggleTabName === 'Video' ? <BlogContentVideo/> : null}
                            {toggleTabName === 'Webinary' ? <BlogContentWebinary/> : null}
                            {toggleTabName === 'All' ? <BlogContentAll/> : null}
                            {/*<BlogButtons/>*/}
                        </div>
                        {/*<div className="see_more_btn d-flex align-items-center justify-content-center">*/}
                        {/*    <button className="c-white fs-20">See More</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}