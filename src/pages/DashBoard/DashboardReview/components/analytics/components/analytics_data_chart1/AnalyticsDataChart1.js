import "./style.css"
import React, { useState, useCallback } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: 'JAN',
        uv: 20,
        pv: 24,
        amt: 24,
    },
    {
        name: 'FEB',
        uv: 25,
        pv: 13,
        amt: 22,
    },
    {
        name: 'MAR',
        uv: 35,
        pv: 98,
        amt: 22,
    },
    {
        name: 'aPR',
        uv: 30,
        pv: 39,
        amt: 20,
    },
    {
        name: 'MAY',
        uv: 38,
        pv: 48,
        amt: 21,
    },
    {
        name: 'JUN',
        uv: 40,
        pv: 38,
        amt: 25,
    },
    {
        name: 'JUL',
        uv:60,
        pv: 43,
        amt: 21,
    },
];

export default function AnalyticsDataChart1() {
    const [opacity, setOpacity] = useState({
        uv: 1,
        pv: 1
    });

    const handleMouseEnter = useCallback(
        (o) => {
            const { dataKey } = o;

            setOpacity({ ...opacity, [dataKey]: 0.5 });
        },
        [opacity, setOpacity]
    );

    const handleMouseLeave = useCallback(
        (o) => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity]
    );

    return (
        <div className="analytics_data_chart1_cont">
            <p className="notes fs-14 f-600 c_grey3">Lorem ipsum</p>
            <LineChart
                width={246}
                height={250}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: -30,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis  domain={[0]}/>
                <Tooltip />
                <Legend
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                {/*<Line*/}
                {/*    type="monotone"*/}
                {/*    dataKey="pv"*/}
                {/*    strokeOpacity={opacity.pv}*/}
                {/*    stroke="#FE1A19"*/}
                {/*    activeDot={{ r: 8 }}*/}
                {/*/>*/}
                <Line
                    type="monotone"
                    dataKey="uv"
                    strokeOpacity={opacity.uv}
                    stroke="#A3CD3B"
                />
            </LineChart>
        </div>
    )
}
