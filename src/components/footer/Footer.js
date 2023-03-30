import "./style.css"
import {Link, NavLink, useNavigate} from "react-router-dom";
import logoFooter from "../../assets/images/LogoFooter.svg"
import PrivacyPDF from "../../assets/pdf/PRIVACY-NOTICE.pdf";
import TermsPDF from "../../assets/pdf/TERMS-OF-USE.pdf";


export default function Footer() {
    let navigate = useNavigate()
    return (
        <>
            <footer className="bc-black footer_cont">
                <div className="footer_cont_inner d-flex justify-content-space-between align-items-center">
                    <div className="d-flex fd-column footer_cont_logo_block">
                        <img src={logoFooter} alt="" className="logoFooter"/>
                    </div>
                    <div className="fs-16 d-flex align-items-center footer_items_block c-white f-500">
                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}
                                 to="/features">Features</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}
                                 to="/use-cases">Use cases</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}
                                 to="/pricing">Pricing</NavLink>
                        {/*<NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="/contact">For Social</NavLink>*/}
                        {/*<NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="">For Reviews</NavLink>*/}
                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}
                                 to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div className="footer_cont_block2">
                        <div className="footer_cont_block2_inner d-flex justify-content-space-between">
                            <div>
                               {/* <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}
                                         to="">Terms & Conditions</NavLink>
                                <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}
                                         to="">Privacy Policy</NavLink>*/}
                                <Link className="footer_item c-white" to={TermsPDF} download target="_blank">Terms & Conditions</Link>
                                <Link className="footer_item c-white" to={PrivacyPDF} download target="_blank">Privacy Policy</Link>
                            </div>
                            <div className="c_grey">
                                © 2023 Respondr. All Rights Reserved
                            </div>
                        </div>
                </div>
            </footer>

            <footer className="bc-black footer_cont_mobile">
                <div className="footer_cont_inner d-flex fd-column" style={{width:"100%"}}>
                    <div className="d-flex justify-content-space-between align-items-end">
                        <div className="d-flex fd-column align-items-start footer_cont_logo_block">
                            <img src={logoFooter} alt="" className="logoFooter"/>
                        </div>
                        <div className="fs-16 d-flex fd-column footer_mobile_items_blocks">
                            <div className="d-flex align-items-center justify-content-center">
                                <NavLink
                                    className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'}
                                    to="/features">Features</NavLink>
                                <NavLink
                                    className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'}
                                    to="/use-cases">Use cases</NavLink>
                                {/*<NavLink className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'} to="/pricing">Pricing</NavLink>*/}
                            </div>
                            <div className="d-flex justify-content-center">
                                {/*<NavLink className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'} to="">For Social</NavLink>*/}
                                {/*<NavLink className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'} to="">For Reviews</NavLink>*/}
                                <NavLink
                                    className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'}
                                    to="/pricing">Pricing</NavLink>
                                <NavLink
                                    className={({isActive}) => isActive ? 'footer_item_mobile c-greenBlue' : 'footer_item_mobile c-white'}
                                    to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_cont_block2 bc-black">
                    <div className="footer_cont_block2_inner d-flex justify-content-space-between">
                        <div>
                            {/*<NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}*/}
                            {/*         to="">Terms & Conditions</NavLink>*/}
                            {/*<NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'}*/}
                            {/*         to="">Privacy Policy</NavLink>*/}
                            <Link className="footer_item c-white" to={TermsPDF} download target="_blank">Terms & Conditions</Link>
                            <Link className="footer_item c-white" to={PrivacyPDF} download target="_blank">Privacy Policy</Link>
                        </div>
                        <div className="c_grey">
                            © 2023 Respondr. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
