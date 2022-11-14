import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React,{useState} from "react"

function Phone() {
  // value will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (
    <PhoneInput id="phone" style={{"width":"450px","padding":""}}
      placeholder="Enter phone number"
      defaultCountry='india'
      value={value }
      maxLength="11"
      onChange={setValue}/>
  )
}
export default Phone;