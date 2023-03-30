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
import manage_reviews_pic from "../../../../assets/images/manage-reviews_pic.png";


export default function ManageReviewsSlider(props) {
    let {manageReviews, setManageReviews,manageAgencyReviews} = props
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
            {manageReviews.map((item, index) => {
                return (
                    <SwiperSlide className="swiper_slider_manage_reviews" key={item.id}>
                        <img src={manage_reviews_pic} alt="" className="manage_reviews_pic"/>
                        <div className="manage_reviews_cont_block2-sidebar-content d-flex fd-column align-items-start ">
                            <img src={item.authorPic} alt="" className="sidebar_user_pic"/>
                            <h2 className="f-700 fs-35 c-white">{item.author}</h2>
                            <p className='f-700 fs-18 c-white'>{item.position}</p>
                            <div className="f-500 fs-20 c-white" style={{textAlign: "left"}}>{item.opinion}</div>
                        </div>
                        <div className="sidebar_item_number f-700" data-aos="flip-up" data-aos-duration="1500">0{item.id}</div>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}