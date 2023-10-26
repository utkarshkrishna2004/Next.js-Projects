"use client"

import Image from "next/image";
import React, { useState } from "react";

import StopCircleIcon from "@mui/icons-material/StopCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";


function InputItem({ type }) {
   const [value, setValue] = useState(null)
   return (
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
         {type == "source" ? <StopCircleIcon /> : <RadioButtonCheckedIcon />}
         {/* <input
            type="text"
            placeholder={
               type == "source" ? "PickUp Location" : "DropOff Location"
            }
            className="bg-transparent w-full outline-none"
         /> */}
         <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
               value,
               onChange: setValue,
               placeholder: "PickUp Location",
               isClearable: true,
               className: "w-full ",
               components: {
                  DropdownIndicator: false,
               },
               styles: {
                  control: (provided) => ({
                     ...provided,
                     backgroundColor: '#00ffff00',
                     border: 'none'
                  }),
               },
            }}
         />
      </div>
   );
}

export default InputItem;
