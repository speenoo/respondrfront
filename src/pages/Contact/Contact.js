import "./style.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactContent1 from "../Contact/components/contact_content1/ContactContent1";
import ContactForm from "./components/contact_form/ContactForm";
import Contact_back_pic from "../../assets/images/contacts_back_pic.png"

export default function Contact(){
    return (
        <div className="main">
            <div>
                <Header/>
                <div className="container">
                    <div className="container_inner d-flex justify-content-space-between">
                <div className="contact_container d-flex justify-content-space-between align-items-center">
                    <ContactContent1/>
                    <ContactForm/>
                </div>
                    </div>
                </div>
                <div className="contact_back_pic">
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}