import "./style.css"
import Modal from "react-modal";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ChooseLocationModal from "../choose-location-modal/ChooseLocationModal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "621px",
        width: "100%",
    },
};



export default function AddLocationModal(props) {
    return (
        <div>
            <Modal
                isOpen={props.addLocationModalIsOpen}
                onRequestClose={props.closeAddLocationModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="add_location_modal">
                    <div className="">
                            <p className="f-700 fs-35 c-purple text-center">Add Location</p>
                            {/*<button className="add_location_save_btn c-white fs-16 c-white f-700">Add Location</button>*/}
                        <div className="add_location_modal_block2 text-center">
                            <h2 className="fs-20 f-700">Place Details</h2>
                            <p className="fs-16 f-500 c_grey3">Provide some information about this place. If this place is added to maps</p>
                        </div>
                        <div className="location_input_block ">
                            <div className="location_input_block_item d-flex justify-content-space-between align-items-center">
                                <label htmlFor="" className="f-500 fs-16">Business/ID</label>
                                <input type="text"
                                       style={!props.saveLocation.businessID && props.saveBtn ? {border: "1px solid red"} : null}
                                       onChange={(e) =>props.handleChangeLocation(e.target.value, "businessID")}
                                />
                            </div>
                          <div className="text-center or">or</div>
                            <div className="location_input_block_item d-flex justify-content-space-between align-items-center">
                                <label htmlFor="" className="f-500 fs-16">Phone number</label>
                                <input type="text" placeholder="+17498570179"
                                       style={!props.saveLocation.phone && props.saveBtn ? {border: "1px solid red"} : null}
                                       onChange={(e) =>props.handleChangeLocation(e.target.value, "phone")}
                                />
                            </div>
                        </div>
                        {props.error ? <p className="error">{props.error}</p> : null}
                        <div className="d-flex justify-content-center">
                            <button className="add_location_save_btn c-white fs-16 f-700" onClick={props.handleSaveAddLocation}>Save</button>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}