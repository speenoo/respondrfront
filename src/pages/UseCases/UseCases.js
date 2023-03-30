import "./style.css"
import {useState} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import UseCasesButtons from "./components/use-cases-buttons/UseCasesButtons";
import UseCasesEnterPrice from "./components/UseCasesEnterprice/UseCasesEnterPrice";
import UseCasesAgency from "./components/use-cases-agency/UseCasesAgency";
import UseCasesSMB from "./components/use-caeses-SMB/UseCasesSMB";


export default function UseCases() {
    const [toggleTabName, setToggleTabName] = useState('Enterprise')

    const tabHandler = (name) => {
        setToggleTabName(name)
    }

    return (
        <div className="main">
            <div>
                <Header isLogin={true}/>
                <UseCasesButtons toggleTabName={toggleTabName} setToggleTabName={setToggleTabName}
                                 tabHandler={tabHandler}/>
                {toggleTabName === 'Enterprise' ? <UseCasesEnterPrice/> : null}
                {toggleTabName === 'Agency' ? <UseCasesAgency/> : null}
                {toggleTabName === 'SMB' ? <UseCasesSMB/> : null}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}