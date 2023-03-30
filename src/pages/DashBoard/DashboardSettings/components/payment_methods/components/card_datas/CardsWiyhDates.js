import "./style.css"
import visa_inc_logo from "../../../../../../../assets/images/Dashboard/Visa_Inc._logo.png"
import close_icon from "../../../../../../../assets/images/Dashboard/close_icon.png";
import React from "react";

export default function CardsWithDates(props) {
    let {item, index, paymentData, setPaymentData} = props

    let handleDeleteCard = () => {
        paymentData.pop({index})
        setPaymentData([...paymentData])
        }
    return (
        <div className="card_with_dates_cont d-flex fd-column justify-content-space-between">
            <div className="d-flex justify-content-end">
                <button className="fs-16" onClick={() =>handleDeleteCard(index)}><img src={close_icon} alt="" style={{marginRight:"10px"}}/> Close</button>
            </div>
            <div className="card_type_block">
                <img src={visa_inc_logo} alt="card_type_pic"/>
            </div>
            <div className="cards_info_block">
                <div className="d-flex align-items-center fs-20 c_grey">**** **** **** {(item.cardNumber)}/Expires{item.Expiration}</div>
                <div className="fs-22 c-black f-700">{item.CardholderName}</div>
            </div>
        </div>
    )
}