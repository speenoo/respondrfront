import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/zoom";
import {Navigation} from "swiper";
import "./style.css"
// Import Swiper styles
import 'swiper/css';
import blog_main_pic from "../../../../assets/images/blog_article_img1.png";


export default function BlogSwiperSlider(props){
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#1E376F",
                "--swiper-pagination-color": "#fff",
            }}
            breakpoints={{
                576: {
                    slidesPerView: 1,
                    // spaceBetween: 50,
                },
                768: {
                    slidesPerView: 1,
                    // spaceBetween: 50,
                },
            }}
            // spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            pagination={{
                clickable: true,
            }}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {props.blogNews.map((item, index) => {
                return (
                    <div className="BlogArticle_container_block1 d-flex justify-content-center">
                    <SwiperSlide className="BlogArticle_container_block1 d-flex justify-content-space-between" key={item.id}>
                        <img src={blog_main_pic} alt=""/>
                        <div className="blog_article_info_block">
                            <div className="blog_article_info_block_inner">
                                <p className="f-700 fs-20 d-flex fd-column">{item.title}</p>
                                <div className="fs-14 f-500 blog_article_info_block_desc c_grey3">
                                    {item.desc}
                                </div>
                                <span
                                    className="fs-14 c_grey3 blog_article_info_block_time">{item.day} • {item.time} read</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    </div>
                )
            })
            }
        </Swiper>
    )
}