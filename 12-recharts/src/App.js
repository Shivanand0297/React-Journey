import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Month: "Dec 2022",
    Views: 0,
  },
  {
    Month: "Jan 2023",
    Views: 2400,
  },
  {
    Month: "Feb",
    Views: 1398,
  },
  {
    Month: "March",
    Views: 9800,
  },
  {
    Month: "April",
    Views: 3908,
  },
  {
    Month: "May",
    Views: 4800,
  },
  {
    Month: "June",
    Views: 3800,
  },
  {
    Month: "July",
    Views: 4300,
  },
];

const App = () => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis dataKey="Views" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Views"
          stroke="#8884d8"
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default App;
