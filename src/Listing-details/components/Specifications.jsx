// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import IconField from "@/add-listing/components/IconField";
import CarSpecification from "@/Shared/CarSpecification";

const Specifications = ({ carDetails }) => {
  return (
    <div className="p-5 rounded-xl border shadow-md mt-5">
      <h2 className="font-medium text-2xl">Specifications</h2>
      {carDetails.sellingPrice?CarSpecification?.map((item, i) => (
        <div key={i} className="mt-5 flex items-center justify-between">
          <h2 className="flex gap-2">
            <IconField icon={item?.icon} />
            {item?.label}
          </h2>
          <h2>{carDetails?.[item.name]}</h2>
        </div>
      )):<div className=" w-full h-[500px] bg-slate-200 animate-pulse rounded-xl "></div>}
      {/* {carDetails?length>0&&carDetails.map((item, index) =>(
        <div key={index}>
        <IconField icon={} />
        </div>
      ))} */}
    </div>
  );
};

Specifications.propTypes = {
  carDetails: PropTypes.any,
};
export default Specifications;
