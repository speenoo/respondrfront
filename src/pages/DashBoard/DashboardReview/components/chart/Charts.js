import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {  Doughnut } from "react-chartjs-2";
import "./style.css"

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    datasets: [
        {
            data: [10, 10, 10],
            backgroundColor: ["#ff4942","#ffc916", "#a4cd3c" ],
            display: true,
            borderColor: "#D1D6DC"
        }
    ]
};

export default function Charts() {
    return (
        <Doughnut
            data={data}
            options={{
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                rotation: -90,
                circumference: 180,
                cutout: "55%",
                maintainAspectRatio: true,
                responsive: true
            }}
        />
    );
}


