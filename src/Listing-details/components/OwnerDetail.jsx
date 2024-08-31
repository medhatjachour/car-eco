// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

const OwnerDetail = ({ carDetails }) => {
  return (
    <div className="rounded-xl shadow-md p-5">
        <h2 className="font-medium text-2xl mb-3">Owner/Deals</h2>
      <img
        src={carDetails?.userImageUrl}
        alt={carDetails?.listingTitle}
        className="w-[45pxs] h-[45px] rounded-full"
      />
      <h2 className="mt-2 font-bold text-xl">{carDetails?.userName}</h2>
      <h2 className="mt-2 text-gray-500">{carDetails?.createdBy}</h2>
      <Button className="w-full mt-5">Message Owner</Button>
    </div>
  );
};
OwnerDetail.propTypes = {
  carDetails: PropTypes.any,
};

export default OwnerDetail;
