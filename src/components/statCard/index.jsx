import React from "react";

const StatCard = ({ data }) => {
  return (
    <div className="shadow rounded bg-white p-3">
      <p className="text-gray-400 text-xs mb-3">{data.name}</p>
      <h3 className="text-xl font-semibold text-black">{data.value}</h3>
      <div className="flex mt-2 justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-2">
          <span
            className={`text-xs ${
              data.stat === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {data.perc}%
          </span>
          {
            <span
              className={`text-xs mb-1 ${
                data.stat === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.stat === "up" ? "↑" : "↓"}
            </span>
          }
        </div>
        <span className="text-gray-300 text-xs">{data.comment}</span>
      </div>
    </div>
  );
};

export default StatCard;
