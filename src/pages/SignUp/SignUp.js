import "./style.css"
import Header from "../../components/header/Header";
import LoginContent from "../Login/components/login_content/LoginContent";
import Footer from "../../components/footer/Footer";
import SignUpContent from "./componentss/sign_up_content/SignUpContent";
import {useLocation} from "react-router-dom";
import {useState} from "react";

export default function SignUp() {
    const {state} = useLocation();

    return (
        <div className="main">
            <div>
                <Header />
                <SignUpContent flag={state?.flag} />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}