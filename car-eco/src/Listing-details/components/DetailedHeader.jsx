// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { HiCalendarDays } from "react-icons/hi2";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
const DetailedHeader = ({ carDetails }) => {
  return (
    <div>
      {carDetails?.listingTitle ? (
        <div>
          <h2 className="font-bold text-3xl"> {carDetails?.listingTitle}</h2>
          <p className="text-xs">{carDetails?.tagline}</p>
          <div className="flex gap-2 mt-2">
            <div className=" flex items-center bg-slate-200 rounded-full p-2 px-3 gap-2">
              <HiCalendarDays className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm"> {carDetails?.year}</h2>
            </div>

            <div className=" flex items-center bg-slate-200 rounded-full p-2 px-3 gap-2">
              <IoSpeedometerOutline className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm"> {carDetails?.mileage}</h2>
            </div>

            <div className=" flex items-center bg-slate-200 rounded-full p-2 px-3 gap-2">
              <GiGearStickPattern className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm">
                {" "}
                {carDetails?.transmission}
              </h2>
            </div>

            <div className=" flex items-center bg-slate-200 rounded-full p-2 px-3 gap-2">
              <FaGasPump className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm"> {carDetails?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
};

DetailedHeader.propTypes = {
  carDetails: PropTypes.any,
};
export default DetailedHeader;
