import "./style.css"
import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from 'react-datetime-picker';
import React, {useEffect, useRef, useState} from 'react';

export default function AnalyticsCalendar2(){
    let closeCalendarDropDawnRef = useRef()
    const [value, onChange] = useState(new Date());

    // useEffect(() => {
    //     console.log(props)
    //     if (props.views) {
    //         setMinDate(+props.views.min)
    //         setMaxDate(+props.views.max)
    //     }
    // }, [props.views])

    return(
        <div className="calendar_cont" ref={closeCalendarDropDawnRef}>
            {/*<img src={calendar_icon} alt="" onClick={() => setCalendarShow(!calendarShow)} className="calendar_icon"/>*/}
            <div className="DatePicker_cont">
                <DateTimePicker
                    onChange={onChange} value={value}
                    // onChange={(date) => {
                    //     props.changeFilterData({date: [Math.floor(new Date(date).getTime() / 1000), maxDate]})
                    //     props.setStartDate(date)
                    //     props.setFirstDate(date)
                    //     setMinDate(Math.floor(new Date(date).getTime() / 1000))
                    // }}
                />
            </div>

        </div>
    )
}
