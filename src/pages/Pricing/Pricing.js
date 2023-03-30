import "./style.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PricingContent from "./components/pricing_content/PricingContenrt";
import pricing_img from "../../assets/images/pricing_img.png"

export default  function Pricing(){
    return (
        <div className="main">
            <div>
                <Header/>
                <div className="pricing_header">
                    {/*<img src={pricing_img} alt=""/>*/}
                    <p className="f-700 fs-45 c-orange text-center pricing_title">Pricing</p>
                </div>
                    <PricingContent/>
                <div className="d-flex justify-content-center">
                    <button className="try_demo_btn bc-lightBlue fs-20">Try A Demo</button>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}