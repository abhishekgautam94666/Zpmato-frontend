import React from "react";
import { Link } from "react-router-dom";

const MyResato = ({ res }) => {


  return (
    <div className="my-5 mx-5 flex gap-5">
      <hr />
      {res &&
        res.map((resto) => (
          <div
            className="w-[50%] flex flex-col my-5 border rounded-xl shadow-lg "
            key={resto._id}
          >
            <img
              className="w-[100%] h-48 rounded-t-xl"
              src={resto.resImage[0].url}
              alt=""
            />
            <p className="text-lg p-2">{resto.name}</p>
            <Link to={`/profile/${resto._id}`}>
              <p className="text-sm font -thin text-blue-800 pl-2 pb-2 cursor-pointer">
                click - Add items in Menu
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MyResato;
