// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "@/components/Header";
import carDetails from "../Shared/carDetails.json";
import features from "../Shared/features.json";
import InputField from "./components/InputField";
import DropDownField from "./components/DropDownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "../../configs";
import { carListing } from "../../configs/schema";
import IconField from "./components/IconField";
import UploadImages from "./components/UploadImages";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { Toaster } from "../components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
const AddListing = () => {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loading , setLoading ]= useState(false);
  const user = useUser()
  const navigate = useNavigate()
  /**
   * used to save features data
   * @param {*} name
   * @param {*} value
   */
  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData);
  };
  // used to captures input
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(formData);

    try {
      const result = await db
        .insert(carListing)
        .values({ 
          ...formData,
           features: featuresData,
           createdBy:user?.primaryEmailAddress?.emailAddress,
           postedOn: new Date()
          }).returning({id:carListing.id});
      if (result) {
        setTriggerUploadImages(result[0]?.id)
        setLoading(false)
        console.log("add to db");
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  // const UploadImages = async(e)=>{

  // }
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 rounded-xl border mt-10">
          {/* cart Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-1.5">
                    <IconField icon={item.icon} />
                    {item.label}
                    {item.required && (
                      <span className="text-red-600"> *</span>
                    )}{" "}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropDownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {/* features list */}
          <Separator className="my-6" />
          <div>
            <h2 className=" font-medium text-xl my-6">Features</h2>

            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features?.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeaturesChange(item.name, value)
                    }
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* ?car images  */}
              <UploadImages triggerUploadImages = {triggerUploadImages}
              setLoading = {(v)=>{setLoading(v);navigate("/profile")}}/>
          <div className="mt-10 flex justify-end">
            <Button 
              disabled={loading }
              type="submit"
              onClick={(e) => onSubmit(e)}
              className="bg-primary"
            >
              {!loading?"Submit":<AiOutlineLoading3Quarters className="animate-spin h-4 w-4"/>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
