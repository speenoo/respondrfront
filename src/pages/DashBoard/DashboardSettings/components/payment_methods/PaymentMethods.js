import "./style.css"
import React, {useState} from "react";
import close_icon from "../../../../../assets/images/Dashboard/close_icon.png"
import CardsWithDates from "./components/card_datas/CardsWiyhDates";
import {useCookie, CookieProvider} from "@reactivers/hooks";
import axios from "axios";
import config from "../../../../../config";


export default function PaymentMethods() {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };
    let [paymentData, setPaymentData] = useState([
        {
            flag: false
        }
    ])
    const [submit, setSubmit] = useState({
        cardholder: "",
        curdNumber: "",
        expiration: "",
        cvv: ""
    })
    const [error, setError] = useState("")
    const [submitBtn, setSubmitBtn] = useState(false)
    // const {getItem, removeItem, setItem} = useCookie("test-cookie");
    // const {cookie} = useCookie();


    const handleChangeInputs = (e, name, index) => {
        setSubmit({...submit, [name]: e})
        setError("")
        paymentData[index][name] = e
        setPaymentData([...paymentData])
        // JSON.stringify(cookie, null, 2)
    }

    let handleSubmitCard = (index) => {
        paymentData[index].flag = true
        setPaymentData([...paymentData])
        // setItem({submit, expireDays: 1});
        // setSubmit(submit + " ");
        console.log(error, "error")

    }

    let handleAddPaymentMethod = () => {
        paymentData.push({flag: false})
        setPaymentData([...paymentData])
    }
    let handleClosePaymentMethod = () => {
        if (paymentData.length === 1) {
            return setPaymentData(paymentData.splice(0, 1))
        }
        paymentData.pop({})
        setPaymentData([...paymentData])
    }
    // const SubmitCardHandler = () => {
    //     let values={
    //         cardholder: submit.cardholder,
    //         curdNumber: submit.curdNumber,
    //         expiration:submit.expiration,
    //         cvv:submit.cvv,
    //     }
    //     setSubmitBtn(true)
    //     if (submit.cardholder.length && submit.curdNumber.length) {
    //         }
    //                 // axios.post(`${config.url}/login`,values )
    //                 //     .then(response => {
    //                 //         console.log(response,"response");
    //                 //         localStorage.setItem('jwtToken', response.data.access_token)
    //                 //         navigate("/dashboard")
    //                 //     })
    //                 //     .catch(error => {
    //                 //         console.log(error.response,"error")
    //                 //         setError(error.response.data.errorMessage)
    //                 //     })
    //
    //          else {
    //             setError("No dates")
    //     }
    // }

    let _renderPaymentMethodsItems = () => {
        return paymentData.map((item, index) => {
            return (
                (item.flag && !error) ?
                    <CardsWithDates item={item} index={index} paymentData={paymentData}
                                    setPaymentData={setPaymentData}/>
                    :
                    <div className="add_payment_methods_cont" key={index}>
                        <div className="d-flex justify-content-space-between align-items-center">
                            <h2>Add Payment Methods</h2>
                            <div>
                                <button className="fs-16" onClick={handleClosePaymentMethod}><img src={close_icon}
                                                                                                  alt=""
                                                                                                  style={{marginRight: "10px"}}/> Close
                                </button>
                            </div>
                        </div>
                        <div className="add_payment_cont">
                            <div className="add_payment_cont_inputs_block d-flex fd-column ">
                                <div className="add_payment_cont_input_block d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500">Cardholder name</label>
                                    <input type="text"
                                           value={item.CardholderName}
                                           style={!submit.cardholder && submitBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeInputs(e.target.value, "CardholderName", index)}/>
                                </div>
                                <div className="add_payment_cont_input_block d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500">Card Number</label>
                                    <input type="text"
                                           value={item.CardNumber}
                                           style={!submit.cardNumber && submitBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeInputs(e.target.value, "CardNumber", index)}/>
                                </div>
                                <div className="add_payment_cont_input_block d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500">Expiration (MM/YY)</label>
                                    <input type="text"
                                           value={item.Expiration}
                                           style={!submit.expiration && submitBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeInputs(e.target.value, "Expiration", index)}/>
                                </div>
                                <div className="add_payment_cont_input_block d-flex fd-column">
                                    <label htmlFor="" className="fs-16 f-500">CVV</label>
                                    <input type="text"
                                           value={item.CVV}
                                           style={!submit.cvv && submitBtn ? {border: "1px solid red"} : null}
                                           onChange={(e) => handleChangeInputs(e.target.value, "CVV", index)}/>
                                </div>
                                {error ? <p className="error">{error}</p> : null}
                                <button className="submit_card_btn fs-18 c-white f-500"
                                        onClick={() => handleSubmitCard(index)}>Submit Card
                                </button>
                            </div>
                        </div>
                    </div>
            )
        })
    }

    return (
        // <CookieProvider>

            <div className="payment_methods_cont d-grid grid-gab_24 grid-columns-2fr">
                {_renderPaymentMethodsItems()}
                <div className="payment_methods_cont_block2 d-flex justify-content-center align-items-center">
                    <button className="c-white f-700 fs-20" onClick={handleAddPaymentMethod}>+ Add Payment Method
                    </button>
                </div>
            </div>


    )
}