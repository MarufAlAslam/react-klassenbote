import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import StatCard from "../../components/statCard";
import LineChart1 from "../../components/line-chart";
import { GrDocumentDownload } from "react-icons/gr";
import TinyBarChart from "../../components/tinyBarChart";
import TinyLineChart from "../../components/tiny-line-chart";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProfileCard from "../../components/profile-card";

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

      <div className="mt-8 mb-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
        {cardData.map((item) => (
          <StatCard key={item.id} data={item} />
        ))}
      </div>

      <div className="card bg-white px-5 py-7 rounded">
        <div className="flex mb-5 justify-between items-center">
          <p className="text-lg font-bold">Gesendete E-Mails</p>
          <Select
            defaultValue="letzten 12 Monate"
            className="border-0 p-0 text-sm"
            style={{ width: 200, border: 0, fontSize: "10px" }}
            // onChange={handleChange}
            options={[
              { value: "letzten 12 Monate", label: "letzten 12 Monate" },
              { value: "letzten 15 Monate", label: "letzten 15 Monate" },
            ]}
          />
        </div>
        <LineChart1 />
      </div>

      <div className="grid grid-cols-3 mt-4 justify-between items-start gap-4">
        <div className="col-span-2">
          <div className="card w-full bg-white px-5 py-7 rounded">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Sales Report</p>
              <button className="btn border border-gray-300 text-gray-400 px-4 py-1 rounded text-sm flex justify-center items-center gap-3">
                <GrDocumentDownload />
                <span>Export</span>
              </button>
            </div>

            <div className="mt-14">
              <TinyBarChart />
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="card flex flex-col justify-center h-full w-full bg-white px-5 py-7 rounded">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">MAILGUN LIMIT</p>
            </div>
            <h3 className="mt-6 text-2xl font-bold">15.149 / 50.000</h3>

            <div className="flex mt-3 justify-start items-center gap-2">
              <span className={`font-bold text-sm text-green-500`}>1.8%</span>
              <span className={`font-bold text-sm mb-1 text-green-500`}>↑</span>
              <span className={`font-normal text-sm mb-1 text-gray-400`}>
                in diesen Monat
              </span>
            </div>

            <div className="line mt-6 h-[1px] bg-black"></div>
            <TinyLineChart />
            <div className="line mt-6 h-[1px] bg-black"></div>

            <Link
              to="/"
              className="text-blue-500 font-semibold text-sm mt-6 flex items-center gap-2"
            >
              Mailgun Updaten <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 justify-between items-start gap-4">
        <div className="col-span-2">
          <div className="card w-full bg-white px-5 py-7 rounded">
            <div className="h-[200px] overflow-y-auto">
              <table className="table w-full">
                <thead>
                  <th className="border p-2 text-sm">SCHULE</th>
                  <th className="border p-2 text-sm">THEMA</th>
                  <th className="border p-2 text-sm">KATEGORIE</th>
                  <th className="border p-2 text-sm">TICKET-NR.</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Paid search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">NORMAL</td>
                    <td className="border p-2 text-sm text-center">#0124</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Organic search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">KRITISCH</td>
                    <td className="border p-2 text-sm text-center">#0125</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">Email</td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">WICHTIG</td>
                    <td className="border p-2 text-sm text-center">#0126</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Paid search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">NORMAL</td>
                    <td className="border p-2 text-sm text-center">#0127</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Paid search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">NORMAL</td>
                    <td className="border p-2 text-sm text-center">#0127</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Paid search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">NORMAL</td>
                    <td className="border p-2 text-sm text-center">#0127</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Paid search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">NORMAL</td>
                    <td className="border p-2 text-sm text-center">#0127</td>
                  </tr>
                  <tr>
                    <td className="border p-2 text-sm text-center">
                      Paid search
                    </td>
                    <td className="border p-2 text-sm text-center">
                      "Wie funktioniert das alles*
                    </td>
                    <td className="border p-2 text-sm text-center">NORMAL</td>
                    <td className="border p-2 text-sm text-center">#0127</td>
                  </tr>
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
        </div>
        <div className="col-span-1 h-full">
          <div className="card h-full w-full bg-white px-5 py-7 rounded">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Neue Schulen</p>
            </div>

            <ProfileCard name="Herr Müller" id="01223" />
            <ProfileCard name="Herr Müller" id="01223" />
            <ProfileCard name="Herr Müller" id="01223" />

            <Link
              to="/"
              className="text-blue-500 font-semibold text-sm mt-6 flex items-center gap-2"
            >
              Mailgun Updaten <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright pt-5 text-center">
        <p className="text-sm font-bold">© 2023 KLASSENBOTE.DE</p>
      </div>
    </main>
  );
};

export default Dashboard;
