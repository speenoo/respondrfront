import "./style.css"

export default function ContactContent1() {
    return (
        <div className="ContactContent1_cont">
            <p className="fs-50 f-500">Get In Touch <span className="c-orange">With Us</span></p>
            <p className="c_grey3 fs-20 f-500 ContactContent1_cont_title2">Want to get started on your next ad campaign? Maybe a new
                website? Let's get started!</p>
            <div className="d-flex fd-column ContactContent1_cont_info_blocks">
                <div className="d-flex justify-content-space-between align-items-start ContactContent1_cont_info_block">
                    <div>
                        <p className="fs-20 c-greenBlue f-700">OFFICE</p>
                        <p className="fs-18 c_grey3 f-500">31956 Via Faisan Trabuco Canyon CA 92697</p>
                    </div>
                    <div>
                        <p className="fs-20 c-greenBlue f-700">OPEN HOURS</p>
                        <p className="fs-18 c_grey3 f-500 d-flex fd-column">Monday - Friday:
                            <span>9AM - 5PM</span></p>
                    </div>
                </div>
                <div className="d-flex justify-content-space-between align-items-start ContactContent1_cont_info_block">
                    <div>
                        <p className="fs-20 c-greenBlue f-700">CALL US</p>
                        <p className="fs-18 c_grey3 f-500  d-flex fd-column">Call Us Now
                            <span> +1(949)633-4964</span>
                        </p>
                    </div>
                    <div>
                        <p className="fs-20 c-greenBlue f-700">Email</p>
                        <p className="fs-18 c_grey3 f-500">jack@respondr.ai</p>
                    </div>
                </div>
            </div>
        </div>
    )
}