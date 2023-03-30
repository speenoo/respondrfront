import "./style.css"
import login_img from "../../../../assets/images/login_img.png"
import sign_up_pic from "../../../../assets/images/sign_up_pic.png"
import sign_in_pic from "../../../../assets/images/sign_in_pic.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import {useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import Modal from 'react-modal';
import axios from "axios";
import config from "../../../../config";
import {useDispatch} from "react-redux";
import ForgetPasswordModal from "../../../../components/forget-password-modal/ForgetPasswordModal";


export default function  LoginContent() {
    let dispatch = useDispatch()
    let navigate=useNavigate()
    const [forgetPassModalIsOpen, setIsForgetPassModalOpen] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState("")
    const [loginBtn, setLoginBtn] = useState(false)

    const handleChangeLogin = (e, name) => {
        setLogin({...login, [name]: e})
        setError("")
    }
    useEffect(() => {
        AOS.init();
    }, [])

    function openForgetPassModal() {
        setIsForgetPassModalOpen(true);
    }

    function closeForgetPassModal() {
        setIsForgetPassModalOpen(false);
    }
    let validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(login.email).toLowerCase());
    }
    const loginHandler = () => {
        let values={
            email: login.email,
            password: login.password,
        }
        setLoginBtn(true)
        if (login.email.length && login.password.length) {
            if (login.password.length > 7) {
                if (validateEmail()) {
                    axios.post(`${config.url}/auth/signin`,values )
                        .then(response => {
                            dispatch({
                                type: 'ADD_CUSTOMER',
                                payload: {
                                    first_name: response.data.first_name,
                                    last_name:response.data.last_name,
                                    token: response.data.token,
                                }
                            })
                            console.log(response,"response");
                            console.log(response.data.first_name, response.data.last_name)
                            localStorage.setItem('jwtToken',  response.data.token)
                            navigate("/dashboard")
                        })
                        .catch(error => {
                            console.log(error.response,"error")
                            setError(error.response.data.errorMessage)
                        })
                } else {
                    setError("Incorrect email address")
                }
            } else {
                setError("Password length is small")
            }
        }
    }
    return (
        <div className="container">
            <div className="container_inner">
                <div className="login_container d-flex justify-content-space-between align-items-center">
                    <div className="login_cont_block1 text-center">
                        <p className="fs-50 f-500">Welcome!</p>
                        <p className="login_cont_block1_text2 fs-20 f-500 c_grey3">
                            Respondr greets you !
                        </p>
                        <div className="login_cont_img_block">
                            <img src={login_img} alt=""/>
                            <div className="login_cont_pic_animation1" data-aos="fade-right" >
                                <img src={sign_in_pic} alt=""/>
                            </div>
                            <div className="login_cont_pic_animation2" data-aos="fade-up-right"  data-aos-duration="3000"  >
                                <img src={sign_up_pic} alt=""/>
                            </div>
                        </div>
                        <div className="login_cont_block1_text3">
                            <p className="fs-16 c_grey">Not a member yet? </p>
                            <a href="" onClick={() => navigate("/signup")} className="c-greenBlue f-600 fs-18"> Sign Up now</a>
                        </div>
                    </div>
                    <div className="login_cont_block2">
                        <p className="f-500 fs-50 text-center">Sign In</p>
                        <div className="login_cont_input_blocks d-flex fd-column">
                            <div className="d-flex fd-column login_cont_input_block">
                                <label htmlFor="" className="f-700 fs-16">Email</label>
                                <input type="email" placeholder="Email"
                                       style={!login.email && loginBtn ? {border: "1px solid red"} : null}
                                       onChange={(e) => handleChangeLogin(e.target.value, "email")}
                                />
                            </div>
                            <div className="d-flex fd-column login_cont_input_block">
                                <label htmlFor="" className="f-700 fs-16">Password</label>
                                <input type="password" placeholder="Password"
                                       style={!login.password && loginBtn ? {border: "1px solid red"} : null}
                                       onChange={(e) => handleChangeLogin(e.target.value, "password")}
                                />
                            </div>
                            <div className="d-flex justify-content-end forget_pass">
                                <p onClick={openForgetPassModal} className="fs-12">Forgot password?</p>
                            </div>
                            <ForgetPasswordModal
                                forgetPassModalIsOpen={forgetPassModalIsOpen}
                                setIsForgetPassModalOpen={setIsForgetPassModalOpen}
                                closeForgetPassModal={closeForgetPassModal} openModal={openForgetPassModal} />

                            {error ? <p className="error">{error}</p> : null}
                          <button className="fs-20 c-white f-700 bc-lightBlue login_container_login_btn"  onClick={loginHandler}>Sign In</button>
                            <div className="d-flex justify-content-end create_account">
                                <p className="c_grey fs-12">Not registered yet?</p>
                                <a href="" onClick={() => navigate("/signup")} className="fs-12">Create an Account</a>
                            </div>
                        </div>
                        {/*<div className="or_sign_in d-flex fd-column">*/}
                        {/*    <p className="fs-14">Or sign in With</p>*/}
                        {/*    <div className="d-flex justify-content-space-between">*/}
                        {/*        <button className="yelp_btn fs-14">Yelp</button>*/}
                        {/*        <button className="google_btn fs-14">Google</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}