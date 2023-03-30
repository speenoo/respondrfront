import "./style.css"
import {useEffect, useState} from "react";
import customerLogo1 from "../../../../assets/images/customerLogo1.png"
import customerLogo2 from "../../../../assets/images/customerLogo2.svg"
import customerLogo3 from "../../../../assets/images/customerLogo3.svg"
import customerLogo4 from "../../../../assets/images/customerLogo4.svg"
import AOS from "aos";

export default function Customers(){
    useEffect(() => {
        AOS.init();
    }, [])
    let [customer,setCustomer]=useState([
        {
            id:1,
            logo:'customerLogo1'
        },
        {
            id:2,
            logo:"customerLogo2"
        },
        {
            id:3,
            logo:"customerLogo3"
        },
        {
            id:4,
            logo:"customerLogo4"
        }
    ])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="customers_cont">
                    <p className="fs-35 f-500 text-center" >More than 5,000 businesses delight their customers with Respondr</p>
                    <div className="customers_logo_cont d-flex justify-content-space-between align-items-center flex-wrap">
                        {/*{*/}
                        {/*    customer.map((item,index)=>{*/}
                        {/*        return(*/}
                        {/*            <div key={item.id}>{item.logo}</div>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                        <img src={customerLogo1} alt=""/>
                        <img src={customerLogo2} alt=""/>
                        <img src={customerLogo3} alt=""/>
                        <img src={customerLogo4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
