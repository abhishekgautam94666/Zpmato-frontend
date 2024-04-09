import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Location from "../Components/Location.jsx";


const Header1 = ({ AddRes, zom, col, loc }) => {
  const { currentUser, back } = useSelector((state) => state.user);

  return (
    <div
      className={`text-gray-800 text-lg font-light md:text-2xl flex justify-around my-10`}
    >
    
      <Link to={"/"}>
        <h1 className={`text-${col} text-4xl font-extrabold`}>{zom}</h1>
      </Link>

      {loc && <Location />}

      <ul className=" flex justify-evenly items-center gap-10 cursor-pointer ">
        <Link to={"/addResto"}>
          <li>{AddRes}</li>
        </Link>

        {currentUser ? (
          <Link
            to={"/profile"}
            className="flex gap-2 justify-center items-center"
          >
            <img
              className="w-10 rounded-3xl"
              src={
                currentUser?.avtar?.Url ||
                "https://www.pngall.com/wp-content/uploads/5/Profile.png"
              }
              alt="profile"
            />
            <h3 className={`text-${col}`}>{currentUser.name}</h3>
          </Link>
        ) : (
          <Link to={"/login"}>
            <li>Login In</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header1;
