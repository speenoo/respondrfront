import "./style.css"


export default function ContactForm() {
    return (
        <div className="contact_form_container">
            <div className="contact_form_container_inner d-flex fd-column">
                <div className="d-flex fd-column contact_form_input_blocks_cont">
                    <div className="d-flex justify-content-space-between contact_form_input_block">
                        <div className="d-flex fd-column justify-content-start contact_form_input_block_item">
                            <label htmlFor="" className="f-700 fs-16">First Name</label>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="d-flex fd-column justify-content-start contact_form_input_block_item contact_form_input_block_item2">
                            <label htmlFor="" className="f-700 fs-16">Last Name</label>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="d-flex contact_form_input_block">
                        <div className="d-flex fd-column justify-content-start contact_form_input_block_item">
                            <label htmlFor="" className="f-700 fs-16">Phone</label>
                            <input type="number" placeholder="Phone Number"/>
                        </div>
                        <div className="d-flex fd-column justify-content-start contact_form_input_block_item contact_form_input_block_item2">
                            <label htmlFor="" className="f-700 fs-16">Email</label>
                            <input type="email" placeholder="Email Address "/>
                        </div>
                    </div>
                    <div className="d-flex contact_form_input_block">
                        <div className="d-flex fd-column justify-content-start contact_form_input_block_item">
                            <label htmlFor="" className="f-700 fs-16">Interested In</label>
                            <input type="number" placeholder="Interested In"/>
                        </div>
                    </div>
                    <div className="d-flex contact_form_input_block">
                        <div className="d-flex fd-column justify-content-start contact_form_input_block_item">
                            <label htmlFor="" className="f-700 fs-16">Message</label>
                            <textarea name="Hello There" id="" cols="30" rows="10" className=""> Hello There</textarea>
                        </div>
                    </div>
                    <div className="submit_btn_block">
                        <button className="submit_btn f-700 fs-16 bc-lightBlue c-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}