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
        uv: 40,
        pv: 24,
        amt: 24,
    },
    {
        name: 'FEB',
        uv: 30,
        pv: 13,
        amt: 22,
    },
    {
        name: 'MAR',
        uv: 20,
        pv: 98,
        amt: 22,
    },
    {
        name: 'aPR',
        uv: 27,
        pv: 39,
        amt: 20,
    },
    {
        name: 'MAY',
        uv: 18,
        pv: 48,
        amt: 21,
    },
    {
        name: 'JUN',
        uv: 23,
        pv: 38,
        amt: 25,
    },
    {
        name: 'JUL',
        uv: 34,
        pv: 43,
        amt: 21,
    },
];

export default function GoogleRatingChart() {
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
            <div className="google_rating_chart_cont">
                <LineChart
                    width={864}
                    height={260}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis  domain={[0, 100]}/>
                    <Tooltip />
                    <Legend
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        strokeOpacity={opacity.pv}
                        stroke="#FE1A19"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        strokeOpacity={opacity.uv}
                        stroke="#FFBF00"
                    />
                </LineChart>
                {/*<p className="notes">Tips: Hover the legend !</p>*/}
            </div>
        )
}
