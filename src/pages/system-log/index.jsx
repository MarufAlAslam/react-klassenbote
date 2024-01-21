import { DatePicker } from "antd";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SystemLog = () => {
  const [isActive, setIsActive] = useState(1);
  const { RangePicker } = DatePicker;
  const tableData = [
    {
      id: 1,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 2,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 3,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 4,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 5,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 6,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 7,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 8,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 9,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 10,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 11,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 12,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 13,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 14,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 15,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 16,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
    {
      id: 17,
      sender: "user@mail.de",
      receiver: "user@mail.de",
      date: "26 Mar 2018, 10:30am",
      subject: "Wichtige Information...",
      content: "Hallo zusammen, hiermit möchte ich euch einla..",
    },
  ];
  return (
    <main>
      <div className="flex md:flex-row flex-col justify-between items-center gap-3">
        <h2 className="text-xl font-bold">System Log</h2>
        <div className="flex md:flex-row flex-col justify-end items-center gap-5">
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

      <div className="mt-10 bg-white pb-6 mb-4 rounded-[8px]">
        <div className="overflow-x-auto">
          <table className="table w-[400%] md:w-full mb-[200px]">
            <thead>
              <th className="bg-[#F5F8FA] px-8 text-xs py-3 text-left">
                ABSENDER
              </th>
              <th className="bg-[#F5F8FA] px-8 text-xs py-3 text-left">
                EMPFÄNGER
              </th>
              <th className="bg-[#F5F8FA] px-8 text-xs py-3 text-left">
                DATUM
              </th>
              <th className="bg-[#F5F8FA] px-8 text-xs py-3 text-left">
                BETREFF
              </th>
              <th className="bg-[#F5F8FA] px-8 text-xs py-3 text-left">
                E-MAIL INHALT
              </th>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td className="bg-white px-8 text-xs py-3 text-left">
                    <Link to="mailto:user@mail.de">{item.sender}</Link>
                  </td>
                  <td className="bg-white px-8 text-xs py-3 text-left">
                    <Link to="mailto:user@mail.de">{item.receiver}</Link>
                  </td>
                  <td className="bg-white px-8 text-xs py-3 text-left">
                    {item.date}
                  </td>
                  <td className="bg-white px-8 text-xs py-3 text-left">
                    {item.subject}
                  </td>
                  <td className="bg-white px-8 text-xs py-3 text-left">
                    <div className="flex text-xs justify-start items-center gap-2">
                      <span>{item.content}</span>
                      <FaSearch className="text-blue-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination mt-5 flex justify-center items-center gap-2">
          <button className="btn text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            <FaChevronLeft />
          </button>
          <button className="btn bg-blue-500 text-white px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            1
          </button>
          <button className="btn text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            2
          </button>
          <button className="btn text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            3
          </button>
          <button className="btn text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            4
          </button>
          <button className="btn text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            5
          </button>
          <button className="btn text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="copyright pt-5 text-center">
        <p className="text-sm font-bold">© 2023 KLASSENBOTE.DE</p>
      </div>
    </main>
  );
};

export default SystemLog;
