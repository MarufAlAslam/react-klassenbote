import React from "react";
import { FaChevronLeft, FaChevronRight, FaCog } from "react-icons/fa";
import ProfileCard from "../../components/profile-card";
import { Link } from "react-router-dom";

const AlleSchulen = () => {
  return (
    <main>
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-xl font-bold">Alle Schulen</h2>
      </div>

      <div className="grid mt-8 mb-4 grid-cols-3 gap-5 rounded-[8px] overflow-hidden">
        <div className="card flex flex-col justify-between shadow col-span-2 h-full bg-white">
          <table className="table border-0 w-full">
            <thead>
              <th className="bg-[#F5F8FA] p-3 text-left text-[12px]">SCHULE</th>
              <th className="bg-[#F5F8FA] p-3 text-left text-[12px]">
                E-MAIL LIMIT
              </th>
              <th className="bg-[#F5F8FA] p-3 text-left text-[12px]">
                SUPPORT VORHANDEN
              </th>
              <th className="bg-[#F5F8FA] p-3 text-left text-[12px]">
                VERTRAGSENDE
              </th>
              <th className="bg-[#F5F8FA]"></th>
            </thead>
            <tbody>
              <tr>
                <td className="bg-white p-3 text-left text-[12px]">
                  SCHULNAME
                </td>
                <td className="bg-white p-3 text-left text-[12px]">20.000</td>
                <td className="bg-white p-3 text-left text-[12px]">Ja</td>
                <td className="bg-white p-3 text-left text-[12px]">
                  01.01.2026
                </td>
                <td className="bg-white p-3 text-left text-[12px]">
                  <FaCog />
                </td>
              </tr>
              <tr>
                <td className="bg-white p-3 text-left text-[12px]">
                  SCHULNAME
                </td>
                <td className="bg-white p-3 text-left text-[12px]">5.000</td>
                <td className="bg-white p-3 text-left text-[12px]">Nein</td>
                <td className="bg-white p-3 text-left text-[12px]">
                  01.01.2026
                </td>
                <td className="bg-white p-3 text-left text-[12px]">
                  <FaCog />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination mb-10 mt-5 flex justify-center items-center gap-2">
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
        <div className="card bg-white p-4 rounded-[8px]">
          <p className="text-lg font-bold mb-6">Nachrichten der Schulen</p>
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />
          <ProfileCard name="Herr Müller" id="01223" />

          <Link
            to="/"
            className="text-blue-500 mt-10 font-semibold text-sm flex items-center gap-2"
          >
            Mailgun Updaten <FaChevronRight />
          </Link>
        </div>
      </div>

      <div className="copyright pt-5 text-center">
        <p className="text-sm font-bold">© 2023 KLASSENBOTE.DE</p>
      </div>
    </main>
  );
};

export default AlleSchulen;
