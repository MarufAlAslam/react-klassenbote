import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, id }) => {
  return (
    <div className="flex mt-4 justify-between items-center">
      <div className="flex justify-start items-center gap-3">
        <RxAvatar className="text-2xl text-gray-500" />
        <div className="details">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-400">Customer ID#{id}</p>
        </div>
      </div>
      <Link
        to="/"
        className="text-gray-500 font-semibold text-sm flex items-center gap-2"
      >
        <FaRegEnvelope />
      </Link>
    </div>
  );
};

export default ProfileCard;
