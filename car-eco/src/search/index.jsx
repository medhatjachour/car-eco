// eslint-disable-next-line no-unused-vars
import React, { useEffect ,useState} from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "./../../configs/index";
import { carImages, carListing } from "./../../configs/schema";
import Header from "@/components/Header";
import CarItem from "@/components/CarItem";
// eslint-disable-next-line no-unused-vars
import { eq ,lte } from "drizzle-orm";
import Service from "@/Shared/Service";
import Search from "@/components/Search";

const SearchByOptions = () => {
  const [searchParams] = useSearchParams();
  const [carlist, setCarList] = useState([]);
  const condition = searchParams.get("cars");
  const make = searchParams.get("make");
  // eslint-disable-next-line no-unused-vars
  const price = searchParams.get("price");

  useEffect(() => {
    getCarList()
  },[]);
  const getCarList = async () => {
    try {
      const result = await db
        .select()
        .from(carListing)
        .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
        .where(condition!=undefined&&eq(carListing.condition,condition))
        .where(condition!=undefined&&eq(carListing.make,make))
        // .where(condition!=undefined&&lte(carListing.sellingPrice,price))
        const resp = Service.FormatResult(result)
        setCarList(resp)
        console.log(resp);
        
    } catch (err) {
      console.log(err);
    }
  };

  return <div>    <div>
  <Header />
  <div className="p-8 bg-black flex justify-center">
    <Search />
  </div>
  <div>
    <h2 className="p-6 md:px-20 font-bold text-4xl uppercase">{"search result"}</h2>
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
</div></div>;
};

export default SearchByOptions;
