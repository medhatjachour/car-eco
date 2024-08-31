/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
const Features = ({ features }) => {
    console.log(features);
    
  return (
    <div className="mt-5">
      <div className=" p-5 to-white rounded-xl shadow-md before:">
        <h2 className="text-2xl font-medium"> Features</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 ">
      {features!=undefined&&Object.entries(features)?.map(([features,values])=>(
        <div className="gap-2 items-center flex" key={features}>
            <FaCheck className=" text-lg p-1 bg-slate-200 text-primary rounded-full"/>
            <h3>{features}</h3>
        </div> 
      ))}
      </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.any,
};

export default Features;
