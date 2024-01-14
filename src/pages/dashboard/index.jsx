import React, { useState } from "react";
import { DatePicker } from 'antd';


const Dashboard = () => {
  const [isActive, setIsActive] = useState(1);
  const { RangePicker } = DatePicker;
  return (
    <main>
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="flex justify-end items-center gap-5">
          <div className="flex justify-end items-center">
            <button
              onClick={() => setIsActive(1)}
              className={`${
                isActive === 1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white"
              } hover:bg-blue-500 hover:text-white border border-gray-300 rounded px-3 py-1 text-sm`}
            >
              Tag
            </button>
            <button
              onClick={() => setIsActive(2)}
              className={`${
                isActive === 2
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white"
              } hover:bg-blue-500 hover:text-white border border-gray-300 rounded px-3 py-1 text-sm`}
            >
              Woche
            </button>
            <button
              onClick={() => setIsActive(3)}
              className={`${
                isActive === 3
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white"
              } hover:bg-blue-500 hover:text-white border border-gray-300 rounded px-3 py-1 text-sm`}
            >
              Monat
            </button>
          </div>
          <RangePicker className="w-[200px]" />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
