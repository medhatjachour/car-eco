// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input";
const InputField = ({ item, handleInputChange, carInfo }) => {
  return (
    <div>
      <Input
        type={item?.fieldType}
        name={item?.name}
        required={item.required}
        defaultValue={carInfo?.[item.name]}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  );
};
InputField.propTypes = {
  item: PropTypes.any,
  handleInputChange: PropTypes.any,
  carInfo: PropTypes.any,
};
export default InputField;
