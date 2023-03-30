import "./style.css"
import about_article_pic from "../../../../assets/images/about_article_pic.svg"
import search_icon from "../../../../assets/images/search_icon.png"
import facebook from "../../../../assets/images/Facebook_share.png"
import telegram from "../../../../assets/images/Telegram_share.png"
import Instagram from "../../../../assets/images/Instagram_share.png"
import {useState} from "react";
import post_img1 from "../../../../assets/images/post_img1.png"
import post_img2 from "../../../../assets/images/post_img2.png"
import post_img3 from "../../../../assets/images/post_img3.png"

export default function BlogArticleInfo() {
    let [posts, setPosts] = useState([
        {
            id: 1,
            img: post_img1,
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Etiam eu turpis molestie, dictum est a, mattis tellus. Sed " +
                "dignissim, metus nec fringilla accumsan, risus sem sollicitudin " +
                "lacus, ut interdum tellus elit sed risus. ",
        },
        {
            id: 2,
            img: post_img2,
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Etiam eu turpis molestie, dictum est a, mattis tellus. Sed " +
                "dignissim, metus nec fringilla accumsan, risus sem sollicitudin " +
                "lacus, ut interdum tellus elit sed risus. ",
        },
        {
            id: 3,
            img: post_img3,
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Etiam eu turpis molestie, dictum est a, mattis tellus. Sed " +
                "dignissim, metus nec fringilla accumsan, risus sem sollicitudin " +
                "lacus, ut interdum tellus elit sed risus. ",
        },
        {
            id: 4,
            img: post_img1,
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Etiam eu turpis molestie, dictum est a, mattis tellus. Sed " +
                "dignissim, metus nec fringilla accumsan, risus sem sollicitudin " +
                "lacus, ut interdum tellus elit sed risus. ",
        },
        {
            id: 5,
            img: post_img2,
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Etiam eu turpis molestie, dictum est a, mattis tellus. Sed " +
                "dignissim, metus nec fringilla accumsan, risus sem sollicitudin " +
                "lacus, ut interdum tellus elit sed risus. ",
        },
        {
            id: 6,
            img: post_img3,
            title: "Lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Etiam eu turpis molestie, dictum est a, mattis tellus. Sed " +
                "dignissim, metus nec fringilla accumsan, risus sem sollicitudin " +
                "lacus, ut interdum tellus elit sed risus. ",
        },
    ])
    return (
        <div className="blog_article_info_cont">
            <p className='fs-20 c_grey f-600'>Posted On: 21/12</p>
            <div className="d-flex justify-content-space-between blog_article_info_cont_blocks">
                <div className="blog_article_info_block_cont_block1 d-flex fd-column">
                    <p className="c-greenBlue fs-35 f-600 blog_article_info_block_cont_title">How to Work from Home
                        Without Going Bonkers</p>
                    <img src={about_article_pic} alt="" className="blog_article_info_block_cont_img"/>
                    <div className='fs-14 f-500 blog_article_info_block_cont_desc'>
                        Lorem ipsum dolor sit amet consectetur. Purus sit purus tempus accumsan aliquam pellentesque
                        proin nunc. Non tincidunt consequat consectetur volutpat platea scelerisque non molestie.
                        Consectetur molestie duis nam id nam nulla vitae. Donec sem sed aliquet sed vel cras odio augue.
                        Orci nunc mauris euismod egestas. Porta fermentum commodo id morbi bibendum risus maecenas
                        risus. Viverra nec cursus urna velit. Mattis ac consequat tortor nullam ornare pulvinar tortor
                        sed. Maecenas neque sed morbi massa et praesent sed.
                    </div>
                    <div className="fs-14 f-500 blog_article_info_block_cont_desc">
                        Lorem ipsum dolor sit amet consectetur. Sit urna pharetra aliquam eu pulvinar. Libero feugiat et
                        eu turpis scelerisque purus. Erat id vivamus purus at neque lectus nisi. Vitae quis facilisis
                        risus diam neque odio phasellus augue aliquam.
                        Habitant donec mattis ultricies vulputate amet enim sed purus. Faucibus commodo nunc pharetra
                        mauris nisl eu porta purus suspendisse. Leo eleifend odio commodo aliquam turpis eu ante. Cras
                        egestas nunc lacus orci semper. Ac vel consequat eget turpis velit vitae at duis facilisi.
                        Vestibulum id orci orci cursus sit enim. Maecenas ac at et augue feugiat leo sed magnis integer.
                        Non sed pretium est faucibus. Quis enim quis sed vel odio pharetra quisque. Nulla sit purus et
                        scelerisque lacus bibendum et risus consectetur. Sagittis blandit ut aliquam pretium aliquam
                        venenatis. Elit in id ultrices sed eu. Viverra nisl ultricies id ullamcorper.
                    </div>
                    <div className='fs-14 f-500 blog_article_info_block_cont_desc'>
                        Lorem ipsum dolor sit amet consectetur. Diam in nec urna vestibulum in molestie tellus integer.
                        Lectus malesuada dictum non consectetur. Eget sit est risus magna diam. Et viverra elementum
                        risus ut sed et id. A vitae sed amet quam ac. Risus et elementum amet aenean vel fringilla.
                        Dictum id nunc rhoncus egestas elit pulvinar aliquam. Dictum placerat faucibus feugiat congue id
                        egestas. Viverra quis aliquet tortor aliquet morbi ut. Pellentesque quis magna donec interdum
                        purus ipsum lobortis. Duis dictum urna vitae interdum quam lorem sit ornare vitae.
                    </div>
                    <div className="d-flex align-items-center">
                        <p>Share</p>
                        <div className="d-flex">
                            <img src={Instagram} alt="" style={{marginLeft: "20px"}}/>
                            <img src={telegram} alt="" style={{marginLeft: "20px"}}/>
                            <img src={facebook} alt="" style={{marginLeft: "20px"}}/>
                        </div>
                    </div>
                </div>
                <div className="blog_article_info_cont_posted d-flex fd-column">
                    <div className="search_input d-flex justify-content-space-between">
                        <input type="text" placeholder="Search"/>
                        <img src={search_icon} alt=""/>
                    </div>
                    <div className="blog_article_info_cont_posts">
                        <div className="blog_article_info_cont_posts_inner">
                            <p className="c-greenBlue fs-16 f-700">Posted On: 21/12</p>
                            <div className="posts_cont">
                                {
                                    posts.map((item,index)=>{
                                        return (
                                            <div className="posts_cont_block d-flex align-items-end">
                                                <img src={item.img} alt="" className=""/>
                                                <div className="d-flex fd-column posts_cont_block_text">
                                                   <p className="fs-14 f-600">{item.title}</p>
                                                    <div className="fs-10">{item.desc}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
