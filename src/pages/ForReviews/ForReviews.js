import "./style.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function ForReviews(){
    return(
        <div className="main">
            <div>
                <Header isLogin={true}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}