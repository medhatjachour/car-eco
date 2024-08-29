// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import Header from "@/components/Header";
import carDetails from '../Shared/carDetails.json'
import features from '../Shared/features.json'
import InputField from "./components/InputField";
import DropDownField from "./components/DropDownField";
import  TextAreaField  from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
const AddListing = () => {
  const [formData,  setFormData] = useState([])
  const handleInputChange = (name,value)=>{
    setFormData((prevData)=>({
      ...prevData,[name]:value
    }))
    
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(formData);
  }
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
              {
              carDetails.carDetails.map((item, index) => (
                <div key={index}>
                    <label className="text-sm ">{item.label}{item.required&&<span className="text-red-600"> *</span>} </label>
                    {item.fieldType=="text"||item.fieldType=="number" ?<InputField item = {item} handleInputChange = {handleInputChange}/>
                    :item.fieldType=="dropdown"?<DropDownField item={item} handleInputChange={handleInputChange}/>
                    :item.fieldType=="textarea"?<TextAreaField item={item} handleInputChange={handleInputChange} />:null}
                </div>
              ))}
            </div>
          </div>
          {/* features list */}
          <Separator className="my-6"/>
          <div>
            <h2 className=" font-medium text-xl my-6">Features</h2>
            
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features?.map((item,index)=>(
                <div key={index} className="flex items-center gap-2">
                  <Checkbox onCheckedChange={(value)=>handleInputChange(item.name,value)} /><h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* ?car images  */}

          <div className="mt-10 flex justify-end">
            <Button type="submit" onClick={(e)=>onSubmit(e)} className="bg-primary">
                submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
