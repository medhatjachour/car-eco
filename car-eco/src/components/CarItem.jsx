// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Separator } from "@/components/ui/separator";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
const CarItem = ({ car }) => {
  return (
    <div className=" rounded-xl bg-white border hover:shadow-md ">
      <h2 className="absolute m-2 bg-green-600 px-2 rounded-full  text-sm text-white">New</h2>
      <img
        src={car?.images[0]?.imageUrl}
        width={'100%'}
        height={250}
        alt={car?.name}
        className="rounded-t-xl h-[180px] object-cover "
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car?.listingTitle}</h2>
        <Separator />
        <div className=" grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <BsFuelPumpDiesel className="text-lg mb-2" />
            <h2>{car?.mileage}</h2>
          </div>
          <div className="flex flex-col items-center">
            <IoSpeedometerOutline className="text-lg mb-2" />
            <h2>{car?.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car?.transmission}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className=" flex items-center justify-between">
          <h2 className="font-bold text-xl"> ${car?.sellingPrice}</h2>
          <h2 className="text-primary text-sm flex gap-2  ">
            view Details <MdOpenInNew />{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};
CarItem.propTypes = {
  car: PropTypes.any,
  type: PropTypes.any,
};

export default CarItem;
