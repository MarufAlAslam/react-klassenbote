import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan 23",
    Ausgaben: 38,
    Einnahmen: 12,
  },
  {
    name: "Feb 23",
    Ausgaben: 40,
    Einnahmen: 32,
  },
  {
    name: "Mar 23",
    Ausgaben: 58,
    Einnahmen: 43,
  },
  {
    name: "Apr 23",
    Ausgaben: 14,
    Einnahmen: 34,
  },
  {
    name: "May 23",
    Ausgaben: 11,
    Einnahmen: 58,
  },
  {
    name: "Jun 23",
    Ausgaben: 36,
    Einnahmen: 26,
  },
  {
    name: "Jul 23",
    Ausgaben: 27,
    Einnahmen: 39,
  },
  {
    name: "Aug 23",
    Ausgaben: 37,
    Einnahmen: 50,
  },
  {
    name: "Sep 23",
    Ausgaben: 28,
    Einnahmen: 38,
  },
  {
    name: "Oct 23",
    Ausgaben: 52,
    Einnahmen: 30,
  },
  {
    name: "Nov 23",
    Ausgaben: 19,
    Einnahmen: 9,
  },
  {
    name: "Dec 23",
    Ausgaben: 32,
    Einnahmen: 42,
  },
];

export default class TinyBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer
        className="chart-container"
        width="100%"
        height="100%"
      >
        <BarChart
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
          <XAxis dataKey="name" />
          <YAxis postfix="k" />
          <Tooltip />
          <Legend
            className="text-left"
            wrapperStyle={{ top: -40, left: 0, textAlign: "left" }}
          />
          <Bar
            dataKey="Einnahmen"
            barSize={5}
            fill="#74fa86"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="Ausgaben"
            barSize={5}
            fill="#2f53f5"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
