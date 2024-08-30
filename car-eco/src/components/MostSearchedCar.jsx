// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../configs";
import { carImages, carListing } from "../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "../Shared/Service";

const MostSearchedCar = () => {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    getPopularCarList();
  }, []);
  const getPopularCarList = async () => {
    const result = await db
      .select()
      .from(carListing)
      .leftJoin(carImages, eq(carListing.id, carImages.carListingId))
      .orderBy(desc(carListing.id))
      .limit(10);
    // .where(eq(carListing.createdBy, user?.primaryEmailAddress?.emailAddress));
    const resp = Service.FormatResult(result);
    setCarList(resp);
  };
  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Cars
      </h2>
      <Carousel>
        <CarouselContent>
          {carList?.map((car, index) => (
            <CarouselItem className="basis-1/4" key={index}>
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
