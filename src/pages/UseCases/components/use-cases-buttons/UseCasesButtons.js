import "./style.css"
import {useState} from "react";


export default function UseCasesButtons({tabHandler, toggleTabName}) {
    let [useCasesBtn, setUseCasesBtn] = useState([
            {
                id: 1,
                buttonName: "Enterpise",
            },
            {
                id: 2,
                buttonName: "Agency",
            },
            {
                id: 3,
                buttonName: "SMB",
            }
        ]
    )
    const [useCasesBtnActive, setUseCasesBtnActive] = useState(null)
    return (
        <div className="container">
            <div className="container_inner">
                <div className="useCases_buttons_cont d-flex justify-content-center align-items-center">
                    <li className={toggleTabName === 'Enterprise' ? "fs-16 f-500 useCases_buttons_btn_active c-black" : "fs-16 f-500 useCases_buttons_btn"}
                        onClick={() => tabHandler('Enterprise')}>Enterprise
                    </li>
                    <li className={toggleTabName === 'Agency' ? "fs-16 f-500 useCases_buttons_btn_active" : "fs-16 f-500 useCases_buttons_btn"}
                        onClick={() => tabHandler('Agency')}>Agency
                    </li>
                    <li className={toggleTabName === 'SMB' ? "fs-16 f-500 useCases_buttons_btn_active" : "fs-16 f-500 useCases_buttons_btn"}
                        onClick={() => tabHandler('SMB')}>SMB
                    </li>
                </div>
            </div>
        </div>

    )
}
