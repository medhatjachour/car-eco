// eslint-disable-next-line no-unused-vars
import React from "react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <Link to={'/'}>
      <img alt="logo" src="/logo.svg" width={150} height={100} />
      </Link>
      <ul className="hidden md:flex gap-16 ">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Product
        </li>
      </ul>

      {isSignedIn ? (
        <div className=" flex gap-5 items-center">
          <UserButton />
          <Link to={"/profile"}>
            <Button className="hover:bg-slate-100 hover:text-primary hover:border-primary border-2">Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <div>
          <SignInButton className="bg-primary text-white py-1 px-4 rounded-md" mode="model" />
          {/* <Button>Submit Listing</Button> */}
        </div>
      )}
    </div>
  );
};

export default Header;
