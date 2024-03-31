import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
    return (
        <div className="bg-yellow-500">
          <div className="flex flex-row items-center justify-center py-3">
            <div className="flex flex-col space-x-4">
              <div className="flex font-light text-sm items-center justify-center text-white">
                <UilTemperature size={18} className="mr-1 text-white" />
                Real feel:
              </div>
              <div className="flex font-light text-sm items-center justify-center text-white">
                <UilTear size={18} className="mr-1 text-white" />
                Humidity:
              </div>
              <div className="flex font-light text-sm items-center justify-center text-white">
                <UilWind size={18} className="mr-1 text-white" />
                Wind:
              </div>
              <div className="flex font-light text-sm items-center justify-center text-white">
                <UilSun size={18} className="mr-1 text-white" />
                Sunrise:
              </div>
              <div className="flex font-light text-sm items-center justify-center text-white">
                <UilSunset size={18} className="mr-1 text-white" />
                Sunset: 
              </div>
            </div>
          </div>
        </div>
      );
}

export default TemperatureAndDetails;
