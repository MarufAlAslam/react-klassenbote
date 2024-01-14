import React, { PureComponent } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 10,
  },
  {
    name: 'Page B',
    uv: 11,
  },
  {
    name: 'Page B',
    uv: 13,
  },
  {
    name: 'Page B',
    uv: 18,
  },
  {
    name: 'Page B',
    uv: 15,
  },
];

export default class TinyLineChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer className={"h-[10px]"} width="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="uv" stroke="aqua" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
