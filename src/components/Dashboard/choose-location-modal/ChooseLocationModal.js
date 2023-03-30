import "./style.css"
import Modal from "react-modal";


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


export default function ChooseLocationModal(props){

    return(
        <div>
            <Modal
                isOpen={props.chooseLocationModalIsOpen}
                onRequestClose={props.closeAddLocationModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="choose_location_modal">
                    <div className="">
                        <p className="f-700 fs-35 c-purple">Choose Location</p>
                        <div className="d-flex fd-column justify-content-center choose_location_cont">
                            {
                                props.businesses.map((item,index)=>{
                                    return(
                                        <div className="choose_location_cont_item d-flex justify-content-space-between align-items-center" key={index}>
                                            <img src={item.image_url} className="choose_location_cont_item_img"/>
                                            <div className="">
                                                <h4 className="fs-22 f-700" >{item.name}</h4>
                                                <p className="fs-18">{item.location?.address1}</p>
                                            </div>
                                            <button className="add_location_btn c-white fs-16" onClick={()=>props.handleAddLocation(index)}>Add</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}