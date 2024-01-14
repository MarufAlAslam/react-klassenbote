import React, { useState } from "react";
import { DatePicker } from "antd";
import StatCard from "../../components/statCard";

const Dashboard = () => {
  const [isActive, setIsActive] = useState(1);
  const { RangePicker } = DatePicker;
  const cardData = [
    {
      id: 1,
      name: "aktive Schulen",
      value: "12",
      perc: 1.3,
      stat: "down",
      comment: "seit letzten Jahr",
    },
    {
      id: 2,
      name: "aktive E-Mail Slots",
      value: "10.2 K",
      perc: 1.3,
      stat: "down",
      comment: "seit letzten Jahr",
    },
    {
      id: 3,
      name: "Einnahme",
      value: "13,7 K €",
      perc: 1.3,
      stat: "down",
      comment: "seit letzten Jahr",
    },
    {
      id: 4,
      name: "Offene Tickets",
      value: "7",
      perc: 1.3,
      stat: "down",
      comment: "seit letzten Jahr",
    },
    {
      id: 5,
      name: "Nicht reg. E-Mails",
      value: "12",
      perc: 2.3,
      stat: "up",
      comment: "seit letzten Jahr",
    },
    {
      id: 6,
      name: "Avg. Order Value",
      value: "$306.20",
      perc: 1.3,
      stat: "down",
      comment: "seit letzten Jahr",
    },
  ];
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

      <div className="my-8 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
        {cardData.map((item) => (
          <StatCard key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
