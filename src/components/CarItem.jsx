// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Separator } from "@/components/ui/separator";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
const CarItem = ({ car }) => {
  const {id} = useParams()
  return (
    <Link to={"/Listing-details/"+car.id}>
    <div className=" rounded-xl bg-white border hover:shadow-md " data={id}>
      <h2 className={`absolute m-2 rounded-full  text-sm text-white px-3 py-1  ${car?.condition=="New"?"bg-green-600":"bg-orange-600"}  ${car?.condition=="Used"&&"bg-red-500"}`} >{car?.condition}</h2>
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
    </div></Link>
  );
};
CarItem.propTypes = {
  car: PropTypes.any,
};

export default CarItem;
