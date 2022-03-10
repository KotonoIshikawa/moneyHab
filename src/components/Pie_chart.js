import React from 'react';
import { PieChart, Pie, Text } from 'recharts'

const Pie_chart = ({ ExpItems, setExpItems, currentMonth}) => {

    const label = ({ name, value, cx, x, y }) => {
        return (
          <>
        {/* 引数で付属情報を受け取れます */}
            <Text x={x} y={y} fill="#82ca9d">{name}</Text>
            <Text x={x} y={y} dominantBaseline="hanging" fill="#82ca9d">{value}</Text>
          </>
        )
    };
    
   return(
    <PieChart width={730} height={250}>
        <Pie data={ExpItems} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label={label}/>
    </PieChart>
   );
};

export default Pie_chart;