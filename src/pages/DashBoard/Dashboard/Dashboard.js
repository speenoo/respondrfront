import "./style.css"
import HeaderDashboard from "../../../components/Dashboard/header_dashboard/HeaderDashboard";
import location_img from "../../../assets/images/Dashboard/configuration-control-dashboard.png"
import {useNavigate} from "react-router-dom";
import ResponseProfileWithDates
    from "../DashboardReview/components/response_profiles/components/ResponseProfileWithDatas/ResponseProfileWithDatas";
import React, {useEffect, useState} from "react";
import ForgetPasswordModal from "../../../components/forget-password-modal/ForgetPasswordModal";
import AddLocationModal from "../../../components/Dashboard/add-location-modal/AddLocationModal";
import ChooseLocationModal from "../../../components/Dashboard/choose-location-modal/ChooseLocationModal";
import axios from "axios";
import config from "../../../config";

export default function Dashboard() {
    let navigate = useNavigate()
    let [businesses, setBusinesses] = useState([])
    let [data, setData] = useState([
        {
            flag: false,
        }
    ])
    const [addLocationModalIsOpen, setAddLocationModalIsOpen] = useState(false);
    const [chooseLocationModalIsOpen, setChooseLocationModalIsOpen] = useState(false);
    const [saveLocation, setSaveLocation] = useState({
        businessID: "",
        phone: "",
    })
    const [error, setError] = useState("")
    const [saveBtn, setSaveBtn] = useState(false)

    useEffect(() => {
        getBusinessList()
    }, [])

    function openAddLocationModal() {
        setAddLocationModalIsOpen(true);
        console.log(addLocationModalIsOpen, "addLocationModalIsOpen")
    }

    function closeAddLocationModal() {
        setAddLocationModalIsOpen(false);
        setChooseLocationModalIsOpen(false);
    }

    let handleAddLocation = async (index) => {
        try {
            let token = localStorage.getItem('jwtToken')
            let response = await axios.get(`http://178.128.205.52:8372/business/get/${businesses[index].id}`, {
                headers: {
                    'authorization': token
                }
            })
            setChooseLocationModalIsOpen(false)
            getBusinessList()

        } catch (e) {
            console.log(e);
        }
        /*   data.push({flag: true})
           setData([...data])
           setBusinesses([...businesses])*/
    }

    let getBusinessList = async () => {
        try {
            let token = localStorage.getItem('jwtToken')
            let response = await axios.get('http://178.128.205.52:8372/business/list', {
                headers: {
                    'authorization': token
                }
            })
            setData([...response.data.business])
        } catch (e) {
            console.log(e);
            console.log(e.response);
        }
    }

    function openChooseLocationModal() {
        setChooseLocationModalIsOpen(true);
    }

    function closeChooseLocationModal() {
        setChooseLocationModalIsOpen(false);
    }

    const handleChangeLocation = (e, name) => {
        setSaveLocation({...saveLocation, [name]: e})
        setError("")
    }

    let validatePhoneNumber = () => {
        const re = /^[0-9\-\+]{9,15}$/;
        return re.test((saveLocation.phone))
    }
    const handleSaveAddLocation = async () => {
        let token = localStorage.getItem('jwtToken')
        if (saveLocation.businessID || saveLocation.phone) {
            if (validatePhoneNumber()) {
                try {
                    let response = await axios.get(`http://178.128.205.52:8372/business/get/phone/${saveLocation.phone}`, {
                        headers: {
                            'authorization': token
                        }
                    })
                    setBusinesses(response.data.message)
                    setAddLocationModalIsOpen(false)
                    setChooseLocationModalIsOpen(true)
                } catch (error) {
                    console.log(error);
                    setError(error.response.data.error)
                }
            } else {
                setError("Phone number is false․ Cannot contain line, space and parentheses")
            }
        } else {
            setError("Please fill in any of the fields")
        }
    }

    let _renderLocationAddress = () => {
        return data.map((item, index) => {
            console.log(item, "IUiuiuiui");

            return (
                <div onClick={() => navigate("/dashboard/dashboard-review", {state: {id: item.business_id, name: item.name, address: item.location.city,
                        rating: item.rating, review_count: item.review_count}})}
                     style={{width: "100%", maxWidth: "365px"}} key={index}>
                    <button
                        className="location_button bc-purple dashboard_button justify-content-start align-items-center c-white fs-22 f-700 text-left"
                    >
                        <div className="line"></div>
                        <div className="d-flex fd-column">
                            <h4 className="fs-22 f-700 c-white">{item.name}</h4>
                            <p className="c-white fs-16 f-500">{item.location?.address1}</p>
                        </div>
                        <img src={location_img} alt="" className="location_img"/>
                    </button>
                </div>
            )
        })
    }


    return (
        <div className="main">
            <div>
                <HeaderDashboard isLogin={true}/>
                <div className="container">
                    <div className="container_inner">
                        <div className="dashboard_cont d-flex justify-content-space-between ">
                            <div className="d-grid grid-columns-4fr grid-gab_24 dashboard_cont_buttons">
                                {_renderLocationAddress()}
                                <button
                                    className="add_location_button bc-white dashboard_button justify-content-center align-items-center"
                                    onClick={openAddLocationModal}>
                                    <p className="c-purple fs-22 f-700 text-center d-flex justify-content-center align-items-center">Add
                                        Location <span className="c-purple fs-45 f-700">+</span></p>
                                </button>
                                <AddLocationModal
                                    addLocationModalIsOpen={addLocationModalIsOpen}
                                    closeAddLocationModal={closeAddLocationModal}
                                    handleSaveAddLocation={handleSaveAddLocation}
                                    saveLocation={saveLocation} setSaveLocation={setSaveLocation}
                                    error={error} setError={setError} saveBtn={saveBtn} setSaveBtn={setSaveBtn}
                                    handleChangeLocation={handleChangeLocation}
                                />
                                <ChooseLocationModal
                                    businesses={businesses}
                                    chooseLocationModalIsOpen={chooseLocationModalIsOpen}
                                    closeChooseLocationModal={closeChooseLocationModal}
                                    closeAddLocationModal={closeAddLocationModal}
                                    handleAddLocation={handleAddLocation}
                                />
                            </div>
                            <div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
