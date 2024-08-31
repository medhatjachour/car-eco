// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Description = ({ carDetails }) => {
  return (
    <div>
      {carDetails?.listingDescription ? (
        <div className="p-5 rounded-xl bg-white shadow-md mt-5 border">
          <h2 className="my-2 font-medium text-2xl">Description</h2>
          <p>{carDetails?.listingDescription}</p>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-200 animate-pulse rounded-md"></div>
      )}
    </div>
  );
};
Description.propTypes = {
  carDetails: PropTypes.any,
};

export default Description;
