// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { db } from "../../../configs";
import { carImages, carListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Service from "../../Shared/Service";
import CarItem from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const MyListing = () => {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    user && getUserCarListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const getUserCarListing = async () => {
    const result = await db
      .select()
      .from(carListing)
      .leftJoin(carImages, eq(carListing.id, carImages.carListingId))
      .orderBy(desc(carListing.id))
      .where(eq(carListing.createdBy, user?.primaryEmailAddress?.emailAddress));
    const resp = Service.FormatResult(result);
    setCarList(resp);
  };
  const deleteList = async (item) => {
    console.log(item.id);

    const deleted = await db.delete(carListing).where(eq(carListing.id,item.id))
    if (deleted) {
      console.log("deleted");
      getUserCarListing()
    }
    console.log(deleted);
  };
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center mt-6">
        <h2 className="font-bold text-4xl">my listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className=" gap-5 flex justify-between p-2 bg-slate-200 rounded-lg">
              <Link
                className="w-full"
                to={`/add-listing?mode=edit&id=` + item?.id}
              >
                <Button variant="outline" className="w-full">
                  <FaEdit />
                </Button>
              </Link>
              <AlertDialog>
                <AlertDialogTrigger className="bg-red-600 text-white p-2 rounded-md px-3">
                  <FaTrashAlt />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure to delete this list?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteList(item)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListing;
