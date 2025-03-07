import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "The Great Gatsby", value: 192 },
  { name: "To Kill a Mockingbird", value: 281 },
  { name: "1984", value: 328 },
  { name: "The Alchemist", value: 177 },
  { name: "Pride and Prejudice", value: 279 },
];

const PagesToRead = () => {
  return (
   <div className="mx-12">
     <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#8884d8"
          shape={(props) => (
            <path
              d={`M${props.x},${props.y + props.height} 
                 L${props.x + props.width / 2},${props.y} 
                 L${props.x + props.width},${props.y + props.height} Z`}
              fill={props.fill}
            />
          )}
        />
      </BarChart>
    </ResponsiveContainer>
   </div>
  );
};



export default PagesToRead;
