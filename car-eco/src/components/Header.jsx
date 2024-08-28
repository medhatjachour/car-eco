// eslint-disable-next-line no-unused-vars
import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img alt="logo" src="/logo.svg" width={150} height={100} />
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
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button>Submit Listing</Button>
      )}
    </div>
  );
};

export default Header;
