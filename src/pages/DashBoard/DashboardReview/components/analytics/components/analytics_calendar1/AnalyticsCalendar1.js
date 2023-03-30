import "./style.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from 'react-datetime-picker';
import React, {useEffect, useRef, useState} from 'react';
import calendar_icon from "../../../../../../../assets/images/Dashboard/calendar_icon.png"


export default function AnalyticsCalendar1(){
    let [calendarShow, setCalendarShow] = useState(false)
    let [minDate, setMinDate] = useState(0)
    let [maxDate, setMaxDate] = useState(0)
    const [startDate, setStartDate] = useState((new Date()));
    const [endDate, setEndDate] = useState(new Date());
    let closeCalendarDropDawnRef = useRef()
    const [value, onChange] = useState(new Date());

    const handleClickOutSide = (e) => {
        let closeCalendarRef = closeCalendarDropDawnRef;
        if (closeCalendarDropDawnRef.current && !closeCalendarDropDawnRef.current.contains(e.target) && !closeCalendarRef.current.contains(e.target)) {
            setCalendarShow(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide, true)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide, true)
        }
    }, [])

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
