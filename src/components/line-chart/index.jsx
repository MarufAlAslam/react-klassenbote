import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Emails: 500,
  },
  {
    name: "Feb",
    Emails: 400,
  },
  {
    name: "Mar",
    Emails: 200,
  },
  {
    name: "Apr",
    Emails: 400,
  },
  {
    name: "May",
    Emails: 500,
  },
  {
    name: "Jun",
    Emails: 450,
  },
  {
    name: "Jul",
    Emails: 430,
  },
  {
    name: "Aug",
    Emails: 500,
  },
  {
    name: "Sep",
    Emails: 440,
  },
  {
    name: "Oct",
    Emails: 450,
  },
  {
    name: "Nov",
    Emails: 410,
  },
  {
    name: "Dec",
    Emails: 450,
  },
];

export default class LineChart1 extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" className={"chart-container"}>
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} axisLine={true} />
          <Tooltip />
          <Legend wrapperStyle={{ top: 0 }} />
          <Line type="monotone" dataKey="Emails" stroke="#4040ce" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
