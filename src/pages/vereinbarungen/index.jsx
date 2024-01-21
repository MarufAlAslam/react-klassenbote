import React from "react";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Vereinbarungen = () => {
  return (
    <main>
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-xl font-bold">Vereinbarungen</h2>
      </div>

      <div className="mt-6 mb-4 md:p-8 p-3 bg-white rounded-[8px]">
        <form className="lg:w-5/12 md:w-8/12 w-full">
          <div className="input-holder rounded-[6px] overflow-hidden bg-gray-100 flex justify-between items-center">
            <p className="text-[12px] py-3 text-left w-[200px] px-3">
              DATEI HINZUFÜGEN
            </p>
            <input
              type="text"
              className="input outline-none border-none p-3 bg-gray-200 w-full rounded-[6px]"
            />
          </div>
        </form>

        <div className="overflow-x-auto">
          <table className="table mt-10 md:w-full w-[180%] mb-[200px]">
            <thead>
              <th className="border-b text-sm p-3 text-left">Datenname</th>
              <th className="border-b text-sm p-3 text-left">Größe</th>
              <th className="border-b text-sm p-3 text-right">
                Gespeichert am
              </th>
            </thead>
            <tbody>
              <tr>
                <td className="border-b text-sm p-3 text-left">
                  <Link to="/dokumenten-bibliotek/1">
                    Vertragsunterlagen_SCHULE_20.05.2023.pdf
                  </Link>
                </td>
                <td className="border-b text-sm p-3 text-left">2,45 MB</td>
                <td className="border-b text-sm p-3 text-left">
                  <div className="flex text-sm justify-end items-center gap-2">
                    <span>01.01.2024</span>
                    <FaCog className="text-blue-400" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b text-sm p-3 text-left">
                  <Link to="/dokumenten-bibliotek/2">
                    Datenschutzerklärung_SCHULE_UNTERSCHRIEBEN.pdf
                  </Link>
                </td>
                <td className="border-b text-sm p-3 text-left">2,45 MB</td>
                <td className="border-b text-sm p-3 text-left">
                  <div className="flex text-sm justify-end items-center gap-2">
                    <span>01.01.2024</span>
                    <FaCog className="text-blue-400" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="copyright pt-5 text-center">
        <p className="text-sm font-bold">© 2023 KLASSENBOTE.DE</p>
      </div>
    </main>
  );
};

export default Vereinbarungen;
