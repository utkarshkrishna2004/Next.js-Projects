import Image from "next/image";
import React from "react";

import PlaceIcon from "@mui/icons-material/Place";
import PinDropIcon from "@mui/icons-material/PinDrop";
import AdjustIcon from "@mui/icons-material/Adjust";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function InputItem({ type }) {
   return (
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
         {type == "source" ? <AdjustIcon /> : <RadioButtonCheckedIcon />}
         <input
            type="text"
            placeholder={
               type == "source" ? "PickUp Location" : "DropOff Location"
            }
            className="bg-transparent w-full outline-none"
         />
      </div>
   );
}

export default InputItem;
