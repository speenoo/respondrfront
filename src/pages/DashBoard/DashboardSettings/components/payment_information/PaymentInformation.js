import "./style.css"
import {useState} from "react";

export default function PaymentInformation() {
    let [paymentState, setPaymentState] = useState([
        {
            paymentMethod: "Credit Card",
            PaymentReferenceID: "EPAY_6548852234456663258",
            PaymentTransactionID: "43558",
            ReceiptDate: "11/04/20",
            AmountPaid: "10.160.58",
            Currency: "USD",
            FirstName: "Peter",
            LastName: "Skate",
            RecordID: "STBL-2020-0055",
        },
        {
            paymentMethod: "Credit Card",
            PaymentReferenceID: "EPAY_6548852234456663258",
            PaymentTransactionID: "43558",
            ReceiptDate: "11/04/20",
            AmountPaid: "10.160.58",
            Currency: "USD",
            FirstName: "Peter",
            LastName: "Skate",
            RecordID: "STBL-2020-0055",
        },
        {
            paymentMethod: "Credit Card",
            PaymentReferenceID: "EPAY_6548852234456663258",
            PaymentTransactionID: "43558",
            ReceiptDate: "11/04/20",
            AmountPaid: "10.160.58",
            Currency: "USD",
            FirstName: "Peter",
            LastName: "Skate",
            RecordID: "STBL-2020-0055",
        },
        {
            paymentMethod: "Credit Card",
            PaymentReferenceID: "EPAY_6548852234456663258",
            PaymentTransactionID: "43558",
            ReceiptDate: "11/04/20",
            AmountPaid: "10.160.58",
            Currency: "USD",
            FirstName: "Peter",
            LastName: "Skate",
            RecordID: "STBL-2020-0055",
        },
        {
            paymentMethod: "Credit Card",
            PaymentReferenceID: "EPAY_6548852234456663258",
            PaymentTransactionID: "43558",
            ReceiptDate: "11/04/20",
            AmountPaid: "10.160.58",
            Currency: "USD",
            FirstName: "Peter",
            LastName: "Skate",
            RecordID: "STBL-2020-0055",
        },
        {
            paymentMethod: "Credit Card",
            PaymentReferenceID: "EPAY_6548852234456663258",
            PaymentTransactionID: "43558",
            ReceiptDate: "11/04/20",
            AmountPaid: "10.160.58",
            Currency: "USD",
            FirstName: "Peter",
            LastName: "Skate",
            RecordID: "STBL-2020-0055",
        },

    ])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="payment_information_cont">
                    <div className="payment_information_table"  style={{overflow:"auto"}}>
                        {/*<table id="trades">*/}
                        {/*    <tr>*/}
                        {/*        <th>Payment Method</th>*/}
                        {/*        <th>Payment Reference ID</th>*/}
                        {/*        <th>Payment Transaction ID</th>*/}
                        {/*        <th>Receipt date</th>*/}
                        {/*        <th>Amount Paid</th>*/}
                        {/*        <th>Currency</th>*/}
                        {/*        <th>First Name</th>*/}
                        {/*        <th>Last Name</th>*/}
                        {/*        <th>Record ID</th>*/}
                        {/*    </tr>*/}
                        {/*    {*/}
                        {/*        paymentState.map((item,index) => {*/}
                        {/*            return(*/}
                        {/*                <tr>*/}
                        {/*                    <td>{item.paymentMethod}</td>*/}
                        {/*                    <td>{item.PaymentReferenceID}</td>*/}
                        {/*                    <td>{item.PaymentTransactionID}</td>*/}
                        {/*                    <td>{item.ReceiptDate}</td>*/}
                        {/*                    <td>{item.AmountPaid}</td>*/}
                        {/*                    <td>{item.Currency}</td>*/}
                        {/*                    <td>{item.FirstName}</td>*/}
                        {/*                    <td>{item.LastName}</td>*/}
                        {/*                    <td>{item.RecordID}</td>*/}
                        {/*                </tr>*/}
                        {/*            )*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*</table>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}