// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Button } from "@/components/ui/button";

const Pricing = ({ carDetails }) => {
  return (
    <div>{carDetails.sellingPrice?
    <div className="p-5 rounded-xl border shadow-md">
      <h2>Our Price</h2>
      <h2 className="font-bold text-4xl">$ {carDetails.sellingPrice}</h2>
      <Button className="w-full mt-7" size="lg">
        <MdOutlineLocalOffer className="text-lg mr-4"/>
        make an offer price
      </Button>
    </div>:<div className="w full h-[100px] bg-slate-200 animate-pulse rounded-xl"></div>}
    </div>
  );
};
Pricing.propTypes = {
  carDetails: PropTypes.any,
};

export default Pricing;
