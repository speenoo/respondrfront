import "./style.css"
import Modal from "react-modal";
import {useNavigate} from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "921px",
        width: "100%",
    },
};

export default function NewPasswordModal(props) {
    let navigate=useNavigate()
    return (
        <div>
            <Modal
                isOpen={props.newPassModalIsOpen}
                onRequestClose={props.closeNewPassModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="forget_pass_modal">
                    <div className="">
                        <p className="f-500 fs-45">Set New Password</p>
                        <div className="fs-16 f-500 forget_pass_modal_title2">
                            Here you can set new password for signing in to acme team space. Make sure you
                            remember this password and keep it in a safe place. You can change the password
                            at any time by visiting Password tab in the Settings menu.
                        </div>
                        <div className="login_cont_input_blocks d-flex fd-column">
                            <div className="d-flex fd-column login_cont_input_block">
                                <label htmlFor="" className="f-700 fs-16">New password</label>
                                <input type="email" placeholder="8 characters minimum"
                                />
                            </div>
                            <div className="d-flex fd-column login_cont_input_block">
                                <label htmlFor="" className="f-700 fs-16">Confirm password</label>
                                <input type="email" placeholder="8 characters minimum"
                                />
                            </div>
                            {/*{error ? <p className="error">{error}</p> : null}*/}
                            <button className="fs-20 c-white f-700 bc-lightBlue reset_password_btn" onClick={()=>navigate("/login")}>Set new password</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
