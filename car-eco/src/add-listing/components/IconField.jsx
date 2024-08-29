// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from "prop-types";
import {FaClipboardList} from "react-icons/fa"
import {FaTag} from "react-icons/fa"
import {FaDollarSign} from "react-icons/fa"
import {FaMoneyBillAlt} from "react-icons/fa"
import {FaCar} from "react-icons/fa"
import {FaCheckCircle} from "react-icons/fa"
import {FaIndustry} from "react-icons/fa"
import {FaCarSide} from "react-icons/fa"
import {FaCalendarAlt} from "react-icons/fa"
import {FaRoad} from "react-icons/fa"
import {FaCogs} from "react-icons/fa"
import {FaGasPump} from "react-icons/fa"
import {FaTachometerAlt} from "react-icons/fa"
import {FaWrench} from "react-icons/fa"
import {FaCircle} from "react-icons/fa"
import {FaPalette} from "react-icons/fa"
import {FaDoorClosed} from "react-icons/fa"
import {FaIdCard} from "react-icons/fa"
import {FaTags} from "react-icons/fa"
import {FaFileAlt} from "react-icons/fa"

    const iconMap={
        FaClipboardList:<FaClipboardList/>,
        FaTag:<FaTag/>,
        FaDollarSign:<FaDollarSign/>,
        FaMoneyBillAlt:<FaMoneyBillAlt/>,
        FaCar:<FaCar/>,
        FaCheckCircle:<FaCheckCircle/>,
        FaIndustry:<FaIndustry/>,
        FaCarSide:<FaCarSide/>,
        FaCalendarAlt:<FaCalendarAlt/>,
        FaRoad:<FaRoad/>,
        FaCogs:<FaCogs/>,
        FaGasPump:<FaGasPump/>,
        FaTachometerAlt:<FaTachometerAlt/>,
        FaWrench:<FaWrench/>,
        FaCircle:<FaCircle/>,
        FaPalette:<FaPalette/>,
        FaDoorClosed:<FaDoorClosed/>,
        FaIdCard:<FaIdCard/>,
        FaTags:<FaTags/>,
        FaFileAlt:<FaFileAlt/>,
    }
const IconField = ({icon}) => {
  return (
    <div className='text-primary p-1.5 rounded-full bg-slate-200'>
        {iconMap[icon]}

    </div>
  )
}

IconField.propTypes = {
    icon: PropTypes.any,
  };
export default IconField