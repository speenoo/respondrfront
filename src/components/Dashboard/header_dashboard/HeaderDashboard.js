import "./style.css"
import notification_icon from "../../../assets/images/Dashboard/notification_icon.png"
import dashboard_logo from "../../../assets/images/Dashboard/dashboard_logo.png";
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import arrow_down from "../../../assets/images/Dashboard/dashboard-arrow-down.png";
import arrow_up from "../../../assets/images/Dashboard/dashboard-arrow-up.png";
import logout_icon from "../../../assets/images/Dashboard/logout_icon.png";
import {useSelector} from "react-redux";

export default function HeaderDashboard() {
    const UserName=useSelector(function(state){
        return state.currentUser.first_name

    })
    let navigate=useNavigate()
    const [dropdownShow, setDropDawnShow] = useState(false)
    const [dropdownMobileShow, setDropDawnMobileShow] = useState(false)
    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
    let closeHeaderDropDawnRef = useRef(null)
    let closeHeaderDropDawnMobileRef = useRef(null)
    let closeHeaderDropDawnContentRef = useRef(null)
    let closeHeaderDropDawnMobileContentRef = useRef(null)

    const LogoutPage = () => {
        localStorage.removeItem("jwtToken");
        navigate("/login")
        // let token = localStorage.getItem('jwtToken')
        // console.log(token);
        // axios.get(`${config.url}/logout`, {
        //     headers: {
        //         'authorization': `${token}`
        //     }
        // })
        //     .then(response => {
        //         console.log(response, "logout");
        //         localStorage.removeItem("refreshToken")
        //         localStorage.removeItem("jwtToken")
        //         localStorage.removeItem("token")
        //         navigate("/login")
        //     })
        //     .catch(error => {
        //         console.log(error.response)
        //     })
    }

    const handleClickDropdown = () => {
        setDropDawnShow(!dropdownShow)
    }
    const handleClickDropdownMobile = () => {
        setDropDawnMobileShow(!dropdownMobileShow)
    }
    const handleClickOutSide = (e) => {
        let closeDropDawnRef = closeHeaderDropDawnRef;
        let contentRef = closeHeaderDropDawnContentRef;
        let closeDropDawnMobileRef = closeHeaderDropDawnMobileRef;
        let contentMobileRef = closeHeaderDropDawnMobileContentRef;
        if (contentRef.current && !contentRef.current.contains(e.target) && !closeDropDawnRef.current.contains(e.target)) {
            setDropDawnShow(false)
        }
        if (contentMobileRef.current && !contentMobileRef.current.contains(e.target) && !closeDropDawnMobileRef.current.contains(e.target)) {
            setDropDawnMobileShow(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide, true)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide, true)
        }
    }, [])

    return (
        <>
            {/*{ token &&*/}
                <div className="dashboard_header_container">
                    <div className="dashboard_header_container_inner d-flex justify-content-space-between align-items-center">
                        <div className="container">
                            <div className="container_inner d-flex justify-content-space-between align-items-center">
                                <div>
                                    <img src={dashboard_logo} alt="" onClick={()=>navigate("/dashboard")} className="dashboard-logo"/>
                                </div>
                                <div className="notification_settings_block d-flex align-items-center">
                                    <button className="settings_btn c-white fs-16 f-500 log_out" onClick={()=>navigate("/dashboard/replies")}>Replies</button>
                                    <div className="d-flex fd-column align-items-center dashboard_header_dropDown ">
                                        <div className="d-flex align-items-end" style={{marginRight:"15px"}}  onClick={handleClickDropdown}>
                                            <div className="username_btn c-purple fs-16 f-600" ref={closeHeaderDropDawnRef} >{UserName}</div>
                                            {
                                                dropdownShow ?
                                                     <img src={arrow_up} alt=""/>
                                                    :
                                                    <img src={arrow_down} alt=""/>
                                            }

                                        </div>
                                        {
                                            dropdownShow &&
                                            <div
                                                className="d-flex fd-column dashboard_header_dropDown_content f-400" ref={closeHeaderDropDawnContentRef}>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                                    to="/">Home</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                                    to="/dashboard">Dashboard</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active c-purple' : 'dashboard_header_btn'}
                                                    to="/settings">Settings</NavLink>
                                                <a className='dashboard_header_btn' onClick={LogoutPage}>Log Out</a>
                                            </div>
                                        }

                                    </div>
                                    {/*<div><img src={notification_icon} alt=""/></div>*/}
                                    {/*<button className="settings_btn c-white fs-16 f-500 log_out" onClick={LogoutPage}>Log Out</button>*/}
                                </div>
                                <div className="notification_settings_block_mobile d-flex align-items-center">
                                    <div className="d-flex fd-column align-items-center dashboard_header_dropDown ">
                                        <div className="d-flex align-items-end" style={{marginRight:"15px"}}  onClick={handleClickDropdownMobile}>
                                            <div className="username_btn c-purple fs-16 f-600" ref={closeHeaderDropDawnMobileRef} >{UserName}</div>
                                            {
                                                dropdownMobileShow ?
                                                    <img src={arrow_up} alt=""/>
                                                    :
                                                    <img src={arrow_down} alt=""/>
                                            }

                                        </div>
                                        {
                                            dropdownMobileShow &&
                                            <div
                                                className="d-flex fd-column dashboard_header_dropDown_content f-400" ref={closeHeaderDropDawnMobileContentRef}>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                                    to="/">Home</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                                    to="/dashboard">Dashboard</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                                    to="/replies">Replies</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'dashboard_header_btn_active c-purple' : 'dashboard_header_btn'}
                                                    to="/settings">Settings</NavLink>
                                                <div className="dashboard_header_btn" onClick={LogoutPage} style={{marginTop:"10px"}}>Log Out</div>
                                            </div>
                                        }

                                    </div>
                                    {/*<div><img src={notification_icon} alt=""/></div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*}*/}

        </>
    )
}
