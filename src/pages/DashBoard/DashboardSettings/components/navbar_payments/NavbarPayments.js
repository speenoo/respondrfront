import "./style.css"

export default function NavbarPayments({toggleTabName,tabHandler}){
    return(
        <div className="navbar_payment_cont">
            <ul className="navbar_cont navbar_payment_content align-items-center d-flex justify-content-space-between f-400 fs-16">
                <li className={toggleTabName === 'Profile Settings' ? "navbar_btn_active c-purple" : "navbar_btn"}
                    onClick={() => tabHandler('Profile Settings')}>Profile Settings
                </li>
                <li className={toggleTabName === 'Payment Methods' ? "navbar_btn_active c-purple" : "navbar_btn"}
                    onClick={() => tabHandler('Payment Methods')}>Payment Methods
                </li>
                <li className={toggleTabName === 'Payment Information' ? 'navbar_btn_active c-purple' : 'navbar_btn'}
                    onClick={() => tabHandler('Payment Information')}>Payment Information
                </li>
                <li className={toggleTabName === 'Menu 3' ? 'navbar_btn_active c-purple' : 'navbar_btn'}
                    onClick={() => tabHandler('Menu 3')}>Menu 3
                </li>
            </ul>
        </div>
    )
}