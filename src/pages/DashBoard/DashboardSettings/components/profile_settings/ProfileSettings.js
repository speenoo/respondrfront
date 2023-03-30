import "./style.css"
import {useState} from "react";
import ImageUploading from "react-images-uploading";

export default function ProfileSettings() {
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="profile_settings_cont">
            <h2>Account</h2>
            <div className="profile_settings_cont_content">
                <div className="profile_settings_cont_content1">
                    <h3 className="fs-20 f-600 c-black">Profile</h3>
                    <div className="fs-18 f-500" style={{marginTop:"10px"}}>This Information will be displayed publicly so be careful what you share</div>
                    <div className="d-flex align-items-center upload_img_block">
                        <img
                            className="uploaded_img"
                        />
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                            acceptType={["jpg"]}
                        >
                            {({
                                  imageList,
                                  onImageUpload,
                                  onImageRemoveAll,
                                  isDragging,
                                  dragProps
                              }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <button className="upload_pic_btn c-white fs-12 f-700"
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Upload picture
                                    </button>
                                    &nbsp;
                                    <button onClick={onImageRemoveAll} className="delete_uploaded_img">Remove</button>
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image.data_url} alt="" width="100" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                    <div className="profile_settings_inputs_block d-flex justify-content-space-between align-items-center">
                        <div className="profile_settings_input_block">
                            <label htmlFor="" className="fs-16 f-500 c-black">First Name</label>
                            <input type="text"/>
                        </div>
                        <div className="profile_settings_input_block">
                            <label htmlFor="" className="fs-16 f-500 c-black">Last Name</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="profile_settings_inputs_block"  style={{width:"100%"}}>
                        <div className="profile_settings_input_block1 d-flex fd-column" style={{width:"100%"}}>
                            <label htmlFor="" className="fs-16 f-500 c-black">Biography</label>
                            <input type="text" style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>
                <div className="profile_settings_cont_content2">
                    <h3>Personal Information</h3>
                    <div style={{marginTop:"10px"}}>This Information will be displayed publicly so be careful what you share</div>
                    <div className="profile_settings_inputs_block d-flex justify-content-space-between align-items-center">
                        <div className="profile_settings_input_block">
                            <label htmlFor="" className="fs-16 f-500 c-black">Email address</label>
                            <input type="email"/>
                        </div>
                        <div className="profile_settings_input_block">
                            <label htmlFor="" className="fs-16 f-500 c-black">Phone number</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="profile_settings_inputs_block d-flex justify-content-space-between align-items-center">
                        <div className="profile_settings_input_block">
                            <label htmlFor="" className="fs-16 f-500 c-black">City</label>
                            <input type="text"/>
                        </div>
                        <div className="profile_settings_input_block">
                            <label htmlFor="" className="fs-16 f-500 c-black">State</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div>
                </div>
            </div>
                <div className="profile_settings_cont_btns">
                    <button className="profile_settings_cancel_btn fs-16 f-600">Cancel</button>
                    <button className="profile_settings_save_btn c-white fs-16 f-600">Save</button>
                </div>
            </div>
        </div>
    )
}