import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Location = () => {
  const [add, setAdd] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(`${data.address.state},${data.address.city}`));
    });
  }, []);

  return (
    <div className=" w-[500px]  hidden sm:flex items-center justify-evenly border rounded-lg ">
      <div className=" w-[50%] text-gray-300 flex justify-center items-center pl-10">
        <FaLocationDot className="size-7 text-red-500" />
        <input
          type="search"
          className="w-full p-3 text-sm text-gray-400 outline-none"
          placeholder={add}
        />
      </div>

      <div className="flex items-center gap-2 w-[50%]">
        <CiSearch className="text-3xl text-gray-400 " />
        <input
          className="w-full text-sm py-3 text-slate-800 outline-none"
          placeholder="search for restaurant, cuisin or a dish"
          type="search"
        />
      </div>
    </div>
  );
};

export default Location;
