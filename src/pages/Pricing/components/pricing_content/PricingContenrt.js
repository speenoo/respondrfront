import "./style.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function PricingContent() {
    let navigate=useNavigate()
    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
    let [pricingItem, setPricingItem] = useState([
        {
            id: "1",
            title: "Pay Per Location",
            price: "$49",
            title2: "Intuitive, world-class support tools \n" +
                "for growing teams",
            btn: "Try For Free",
            desc: " One location Integrates with Yelp, Google, and Facebook Detailed location analytics\n" +
                "                                Review analytics"

        },
        {
            id: "2",
            title: "Agency",
            price: "",
            title2: "Intuitive, world-class support tools \n" +
                "for growing teams",
            btn: "Contact us for pricing",
            desc: "Price based on amount of locations Integrates with Yelp, Google, and Facebook" +
                " Detailed location analytics Review analytics Overall Performance Dashboard\n"
        },
        {
            id: "3",
            title: "Enterprise",
            price: "",
            title2: "Intuitive, world-class support tools \n" +
                "for growing teams",
            btn: "Contact us for pricing",
            desc: "Price based on amount of locations Integrates with Yelp, Google, and Facebook" +
                " Detailed location analytics Review analytics Overall Performance Dashboard\n"
        },
    ])


    const [pricingActive, setPricingActive] = useState(null)

    return (
        <div className="container">
            <div className="container_inner d-flex align-items-end">
                <div className="pricing_cont d-grid grid-columns-3fr grid-gab">
                    {
                        pricingItem.map((item, index) => {
                            return (
                                <div className="pricing_cont_item" key={item.id}>
                                    <div
                                        className="pricing_cont_item_inner d-flex fd-column justify-content-center align-items-center text-center">
                                        <div>
                                            <p className="f-700 fs-35 c-black pricing_cont_title">{item.title}</p>
                                            <p className="c-black fs-50 f-500 pricing_cont_price">{item.price}</p>
                                            <p className="pricing_cont_title2">{item.title2}</p>
                                            <div className="pricing_cont_try_free_btn_block"
                                                 onClick={() => setPricingActive(index)}>
                                                <button className={pricingActive === index ? "pricing_cont_try_free_btn fs-14 f-700 c-white bc-lightBlue " : "pricing_cont_try_free_btn fs-14 f-500  c-greenBlue" && (index === 0 ? "pricing_cont_try_free_btn fs-14 f-700 c-white bc-lightBlue" : "pricing_cont_try_free_btn fs-14 f-500  c-greenBlue")}
                                                        onClick={()=> {
                                                            if(index === 0 && !token){
                                                              return   navigate("/signup", {state: {flag: true}})
                                                            }
                                                            navigate("/contact")
                                                        }}>{item.btn}</button>
                                            </div>
                                            <p>Get started with</p>
                                            <div>{item.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
