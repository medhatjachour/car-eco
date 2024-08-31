// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { IoSearch } from "react-icons/io5";
import Data from "@/Shared/Data";
const Search = () => {
  const [cars,setCars] =useState()
  const [make,setMake] =useState()
  const [price,setPrice] =useState()
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-full md:w-[60%] ">
      <Select onValueChange={(value)=>setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre_Owned">Certified Pre_Owned</SelectItem>
        </SelectContent>
      </Select >
      <Separator orientation="vertical" className="hidden md:block" />
      <Select onValueChange={(value)=>setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker) => (
            <SelectItem value={maker.name} key={maker.id}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select onValueChange={(value)=>setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((prince) => (
            <SelectItem value={prince.amount} key={prince.id}>{prince.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <Link to={"/search?cars="+cars+"&make="+make+"&price="+price}>
        <IoSearch className="text-[50px] bg-primary rounded-full p-3 text-white cursor-pointer hover:scale-106 transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default Search;
