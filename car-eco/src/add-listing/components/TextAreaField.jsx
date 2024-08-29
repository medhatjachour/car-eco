// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from "prop-types";
import { Textarea } from "@/components/ui/textarea"
const TextAreaField = ({item, handleInputChange}) => {
  return (
    <div><Textarea name={item.name} onChange={(e)=>handleInputChange(item.name, e.target.value)} /></div>
  )
}
TextAreaField.propTypes = {
  item: PropTypes.any,
  handleInputChange: PropTypes.any,

  };

export default TextAreaField