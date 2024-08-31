// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Search from "./../../components/Search";
import { useParams } from "react-router-dom";
import { db } from "../../../configs/index";
import { carImages, carListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";

const SearchByCategory = () => {
  const { category } = useParams();
  const [carlist, setCarList] = useState([]);
  const getCarlList = async () => {
    const result = await db
      .select()
      .from(carListing)
      .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.category, category));
    const resp = Service.FormatResult(result);
    setCarList(resp);
    console.log(resp);
  };
  useEffect(() => {
    getCarlList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      <div className="p-8 bg-black flex justify-center">
        <Search />
      </div>
      <div>
        <h2 className="p-6 md:px-20 font-bold text-4xl">{category}</h2>
        <div className=" p-6 md:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {carlist.length>0? carlist?.map((car, index) => (
            <div key={index}>
              <CarItem car={car} />
            </div>
          )):[1,2,3,4,5,6].map((item, index) =>(
            <div key={index} data={item} className="h-[310px] rounded-xl bg-slate-200 animate-pulse">
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
