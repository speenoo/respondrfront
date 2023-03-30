import "./style.css";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "01",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "02",
        uv: 4000,
        pv: 3000,
        amt: 2210
    },
    {
        name: "03",
        uv: 2000,
        pv: 7800,
        amt: 2290
    },
    {
        name: "04",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "05",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "06",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "07",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "08",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function AnalyticsBarChart() {
    return (
        <div className="analytics_bar_chart_cont">
            <p className="notes fs-18 f-600 c_grey3">Charts</p>
        <BarChart
            width={500}
            height={350}
            data={data}
            margin={{
                top: 70,
                right: 20,
                left: 0,
                bottom: -20,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[1000,5]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#D5DDFF" />
            <Bar dataKey="uv" fill="#5171FF" />
        </BarChart>
        </div>
    );
}
