// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropTypes from "prop-types";
const DropDownField = ({item,handleInputChange,carInfo}) => {
  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name,value)} required={item.required}
        defaultValue={carInfo?.[item.name]}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={carInfo?.[item.name]?carInfo?.[item.name]:item.label} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          {item?.options?.map((option,index)=>(
          <SelectItem key={index} value={option}>{option}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
DropDownField.propTypes = {
    item: PropTypes.any,
    handleInputChange: PropTypes.any,
    carInfo: PropTypes.any,
    
  };

export default DropDownField;
