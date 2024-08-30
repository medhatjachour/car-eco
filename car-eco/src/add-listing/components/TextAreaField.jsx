// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Textarea } from "@/components/ui/textarea";
const TextAreaField = ({ item, handleInputChange,carInfo }) => {
  return (
    <div>
      <Textarea
        name={item.name}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        defaultValue={carInfo?.[item.name]}
      />
    </div>
  );
};
TextAreaField.propTypes = {
  item: PropTypes.any,
  handleInputChange: PropTypes.any,
  carInfo: PropTypes.any,
};

export default TextAreaField;
