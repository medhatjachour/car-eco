// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
const ImageGallery = ({ carDetails }) => {
    console.log(carDetails);
    
  return (
    <div>
         {carDetails?.listingTitle ? (
        <img
          src={carDetails?.images[0]?.imageUrl}
          alt={carDetails?.listingTitle}
          className="w-full h-[500px] object-cover rounded-xl"
        />
      ) : (
        <div className="w-full h-[500px] bg-slate-200 animate-pulse rounded-md"></div>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  carDetails: PropTypes.any,
};
export default ImageGallery;
