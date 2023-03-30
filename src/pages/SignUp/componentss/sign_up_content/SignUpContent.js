import "../sign_up_content/style.css"
import login_img from "../../../../assets/images/login_img.png";
import {useLocation, useNavigate} from "react-router-dom";
import sign_in_pic from "../../../../assets/images/sign_in_pic.png";
import sign_up_pic from "../../../../assets/images/sign_up_pic.png";
import {useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import axios from "axios";
import config from "../../../../config";
import {useDispatch} from "react-redux";

export default function SignUpContent(props) {
    let navigate = useNavigate()
    const {state} = useLocation();
    useEffect(() => {
        AOS.init();
    }, [])
    const dispatch = useDispatch();

    const [register, setRegister] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        username: "",
        amount_locations: "",
        organization_name: "",
        address: "",
        email: "",
        password: "",
        password_confirm: "",
        policy: "",
    })

    const [error, setError] = useState("")
    const [registerBtn, setRegisterBtn] = useState(false)
    const handleChangeRegister = (e, name) => {
        setRegister({...register, [name]: e})
        setError("")
    }
    let validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(register.email).toLowerCase());
    }
    let validatePhoneNumber = () => {
        const re =/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;
        return re.test((register.phone_number))
    }
    let RegisterUser = () => {
        let values = {
            first_name: register.first_name,
            last_name: register.last_name,
            phone_number: register.phone_number,
            user_name: register.username,
            amount_location: register.amount_locations,
            organization_name: register.organization_name,
            address_including_country: register.address,
            email: register.email,
            password: register.password,
            password_confirm: register.password_confirm,
            payment_method: 'Free'
        }
        console.log(values, 'ertgh');
        setRegisterBtn(true)
        if (register.first_name && register.last_name && register.email.length &&
            register.address && register.phone_number && register.username && register.amount_locations
            && register.organization_name && register.email
            && register.password.length && register.password_confirm) {
            if (register.password.length > 7) {
                if (register.password === register.password_confirm) {
              /*      if(validatePhoneNumber()){*/
                    if (validateEmail()) {
                        console.log(values, '1111111111');
                        axios.post(`${config.url}/auth/signup`, values)
                            .then(response => {
                                dispatch({
                                    type:"change_name",
                                    payload:{
                                        userName:"User"
                                    }
                                })
                                console.log(response, "patasxan");
                                navigate("/login")
                            })
                            .catch(error => {
                                // console.log(error, 'err')
                                console.log(error.response.data.message, 'error response')
                                setError(error.response?.data?.message)
                            })
                    } else {
                        setError("Incorrect email address")
                    }
                /*}else{
                        setError("Incorrect phone number")
                    }*/
                }
                    else {
                    setError("Passwords are different")
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
                            <div className="login_cont_pic_animation1" data-aos="fade-right">
                                <img src={sign_in_pic} alt=""/>
                            </div>
                            <div className="login_cont_pic_animation2" data-aos="fade-up-right"
                                 data-aos-duration="3000">
                                <img src={sign_up_pic} alt=""/>
                            </div>
                        </div>
                        <div className="login_cont_block1_text3">
                            <p className="fs-16 c_grey">Already a member?</p>
                            <a href="" onClick={() => navigate("/login")} className="c-greenBlue f-600 fs-18"> Sign
                                In</a>
                        </div>
                    </div>
                    <div className="login_cont_block2">
                        <p className="f-500 fs-50 text-center">Sign Up</p>
                        <div className="sign_up_cont_input_blocks d-flex fd-column">
                            <div className="d-flex justify-content-space-between">
                                <div className="d-flex fd-column sign_up_cont_input_block">
                                    <label htmlFor="" className="f-700 fs-16">First Name</label>
                                    <input type="text" placeholder="Firstname"
                                           style={!register.first_name && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "first_name")}
                                    />
                                </div>
                                <div className="d-flex fd-column sign_up_cont_input_block2">
                                    <label htmlFor="" className="f-700 fs-16">Last Name</label>
                                    <input type="text" placeholder="Lastname"
                                           style={!register.last_name && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "last_name")}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-space-between">
                                <div className="d-flex fd-column sign_up_cont_input_block">
                                    <label htmlFor="" className="f-700 fs-16">Email</label>
                                    <input type="email" placeholder=""
                                           style={!register.email && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "email")}
                                    />
                                </div>
                                <div className="d-flex fd-column sign_up_cont_input_block2">
                                    <label htmlFor="" className="f-700 fs-16">Mobile Phone Number</label>
                                    <input type="text" placeholder=""
                                           style={!register.address && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "phone_number")}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-space-between">
                                <div className="d-flex fd-column sign_up_cont_input_block">
                                    <label htmlFor="" className="f-700 fs-16">Username</label>
                                    <input type="text" placeholder=""
                                           style={!register.username && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "username")}/>
                                </div>
                                <div className="d-flex fd-column sign_up_cont_input_block2">
                                    <label htmlFor="" className="f-700 fs-16">Amount of Locations</label>
                                    <select name="" id=""
                                            style={!register.amount_locations && registerBtn ? {border: "1px solid red"} : null}
                                            onChange={(e) => handleChangeRegister(e.target.value, "amount_locations")}>
                                        <option value="1">select</option>
                                        <option value="2">1-5</option>
                                        <option value="3">6-20</option>
                                        <option value="4">21-50</option>
                                        <option value="5">51+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-space-between">
                                <div className="d-flex fd-column sign_up_cont_input_block">
                                    <label htmlFor="" className="f-700 fs-16">Password</label>
                                    <input type="password" placeholder=""
                                           style={!register.password && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "password")}/>
                                </div>
                                <div className="d-flex fd-column sign_up_cont_input_block2">
                                    <label htmlFor="" className="f-700 fs-16">Confirm Password</label>
                                    <input type="password" placeholder=""
                                           style={!register.password_confirm && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "password_confirm")}/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-space-between">
                                <div className="d-flex fd-column sign_up_cont_input_block">
                                    <label htmlFor="" className="f-700 fs-16">Organization Name</label>
                                    <input type="text" placeholder=""
                                           style={!register.organization_name && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "organization_name")}/>
                                </div>
                                <div className="d-flex fd-column sign_up_cont_input_block2">
                                    <label htmlFor="" className="f-700 fs-16">Address Including Country</label>
                                    <input type="text" placeholder=""
                                           style={!register.address && registerBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeRegister(e.target.value, "address")}/>
                                </div>
                            </div>
                            {error ? <p className="error">{error}</p> : null}
                            <button className="fs-20 c-white f-700 bc-lightBlue login_container_login_btn"
                                    onClick={RegisterUser}>Sign Up
                            </button>
                            <div className="d-flex justify-content-end align-items-center try_free">
                                <input type="checkbox" checked={true}

                                       onChange={(e) => handleChangeRegister(e.target.value, "policy")}
                                />
                                <p className="fs-14"
                                   // style={!register.policy && registerBtn ? {color: "red"} : {color:"black"}}
                                >Try For Free</p>
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