import "./style.css"
import Modal from "react-modal";
import {useState} from "react";
import NewPasswordModal from "../new_password_modal/NewPasswordModal";

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
    },
};

export default function ResetPasswordModal(props){
    const [newPassModalIsOpen, setIsNewPassModalOpen] = useState(false);


    function openNewPassModal() {
        setIsNewPassModalOpen(true);
        props.setIsResetPassModalOpen(false)
    }

    function closeNewPassModal() {
        setIsNewPassModalOpen(false);
    }
    return(
        <div >
            <Modal
                isOpen={props.ResetPassModalIsOpen}
                onRequestClose={props.closeResetPassModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="forget_pass_modal">
                    <div className="">
                        <p className="f-500 fs-45">Password Reset</p>
                        <div className="fs-16 f-500 forget_pass_modal_title2">You have requested a password reset. To get a new password please
                            check your Email for the red email from chanty and enter the Password
                            reset code we have sent to <span className="c-black f-600">testname@gmail.com </span> <span className="c-greenBlue"> Change email</span></div>
                        <div className="login_cont_input_blocks d-flex fd-column">
                            <div className="d-flex fd-column login_cont_input_block">
                                <label htmlFor="" className="f-700 fs-16">Password reset code</label>
                                <input type="email" placeholder="000 000"
                                />
                            </div>
                            {/*{error ? <p className="error">{error}</p> : null}*/}
                            <button className="fs-20 c-white f-700 bc-lightBlue reset_password_btn" onClick={openNewPassModal}>Confirm</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <NewPasswordModal
                newPassModalIsOpen={newPassModalIsOpen}
                setIsNewPassModalOpen={setIsNewPassModalOpen}
                closeNewPassModal={closeNewPassModal} openNewPassModal={openNewPassModal} />
        </div>
    )
}