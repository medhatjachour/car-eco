// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useParams } from "react-router-dom";
import DetailedHeader from "../components/DetailedHeader";
import { db } from "./../../../configs/index";
import { carImages, carListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specifications from "../components/Specifications";
import OwnerDetail from "../components/OwnerDetail";
import Footer from "@/components/Footer";
import FinancialCalculator from "../components/FinancialCalculator";
import MostSearchedCar from "@/components/MostSearchedCar";

const ListingDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);
  console.log(id);

  useEffect(() => {
    getCarDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCarDetails = async () => {
    const result = await db
      .select()
      .from(carListing)
      .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.id, id));
    const res = Service.FormatResult(result);
    console.log("res",res[0]);
    
    setCarDetails(res[0]);
  };
  return (
    <div>
      <Header />
      {/* header components */}
      <div className="p-10 md:p-20">
        <DetailedHeader carDetails={carDetails} />
        <div className=" grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-5">
          {/* left */}
          <div className="md:col-span-2">
            {/* image gallery */}
            <ImageGallery carDetails = {carDetails}/>
            {/* description ] */}
            <Description carDetails = {carDetails}/>
            {/* features */}
            <Features features = {carDetails?.features}/>
            {/* financial */}
            <FinancialCalculator carDetails = {carDetails}/>
            {/*  */}
          </div>
          {/* right */}
          <div className="">
            {/* pricing */}
            <Pricing  carDetails = {carDetails}/>
            {/* car specifications */}
            <Specifications carDetails = {carDetails}/>
            {/* owner details */}
            <OwnerDetail carDetails={carDetails}/>
          </div>
        </div>
      </div>
      <MostSearchedCar/>
      <Footer/>
    </div>
  );
};

export default ListingDetails;
