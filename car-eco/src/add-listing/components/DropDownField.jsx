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
const DropDownField = ({item,handleInputChange}) => {
  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name,value)} required={item.required}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
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
  };

export default DropDownField;
