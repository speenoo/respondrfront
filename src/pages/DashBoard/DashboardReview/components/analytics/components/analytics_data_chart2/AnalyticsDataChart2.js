import React, {PureComponent, useCallback, useState} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./style.css"

const data = [
    { name: '75%', value: 75},
    { name: '25%', value: 25 },
    // { name: 'Group B', value: 75 },
];
const COLORS = ['#A3CD3B', '#E8F5E9'];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#10142E" className="fs-35 f-700">
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill="#A3CD3B"
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill="#E8F5E9"
            />
            {/*<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#5171FF" fill="none"/>*/}
            {/*<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />*/}
            {/*<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#A3CD3B" className="fs-16 f-700">{`PV ${value}`}</text>*/}
            {/*<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">*/}
            {/*    {`(Rate ${(percent * 100).toFixed(2)}%)`}*/}
            {/*</text>*/}
        </g>
    );
};

export default function AnalyticsDataChart2() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
        return (
            <div className="analytics_data_chart2_cont">
                <p className="notes fs-14 f-600 c_grey3">Lorem ipsum</p>
            <PieChart width={246} height={300}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={120}
                    cy={150}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#c4e3a8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
                <p className="notes2 fs-14 f-600 c_grey3">250 Project / Monthly</p>
            </div>
        );
}
