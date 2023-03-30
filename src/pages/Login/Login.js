import "./style.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoginContent from "./components/login_content/LoginContent";

export default function Login() {
    return (
        <div className="main">
            <div>
                <Header/>
                <LoginContent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    )
}