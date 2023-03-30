import "./style.css"
import Modal from "react-modal";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import PasswordResetModal from "../password-reset-modal/PasswordResetModal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth:"921px",
        width:"100%",
        background: "#EBEFF3"
    },
};

export default function ForgetPasswordModal(props){
    let navigate=useNavigate()
    const [ResetPassModalIsOpen, setIsResetPassModalOpen] = useState(false);


    function openResetPassModal() {
        setIsResetPassModalOpen(true);
        props.setIsForgetPassModalOpen(false);
    }

    function closeResetPassModal() {
        setIsResetPassModalOpen(false);
    }
    return(
        <div >
        <Modal
            isOpen={props.forgetPassModalIsOpen}
            onRequestClose={props.closeForgetPassModal}
            style={customStyles}
            ariaHideApp={false}
        >
            <div className="forget_pass_modal">
                    <div className="">
                        <p className="f-500 fs-45">Forgot Your Password</p>
                        <div className="fs-16 f-500 forget_pass_modal_title2">Please enter the email address your like your password reset information sent to</div>
                        <div className="login_cont_input_blocks d-flex fd-column">
                            <div className="d-flex fd-column login_cont_input_block">
                                <label htmlFor="" className="f-700 fs-16">Email</label>
                                <input type="email" placeholder="Email"
                                />
                            </div>
                            {/*{error ? <p className="error">{error}</p> : null}*/}
                            <button className="fs-20 c-white f-700 bc-lightBlue reset_password_btn" onClick={openResetPassModal}>Reset Password</button>
                            <button className="c-greenBlue f-700 fs-16 back_sign_in_btn" onClick={()=>props.setIsForgetPassModalOpen(false) && navigate("/login")}>Back to sign in</button>
                        </div>
                </div>
            </div>
        </Modal>
            <PasswordResetModal
                ResetPassModalIsOpen={ResetPassModalIsOpen}
                setIsResetPassModalOpen={setIsResetPassModalOpen}
                closeResetPassModal={closeResetPassModal} openResetPassModal={openResetPassModal} />
        </div>
    )
}