import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { show } from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser, back } = useSelector((state) => state.user);
  return (
    <div
      id="mainContainer"
      className={`absolute flex top-8 right-20 text-white text-lg font-light md:text-2xl z-50`}
    >
      <ul
        className={`hidden md:flex
        )} gap-10 cursor-pointer`}
      >
        {/* <Link to={"/"}>
          <li>Home</li>
        </Link> */}

        <Link to={"/addResto"}>
          <li>Add Restaurant</li>
        </Link>

        <Link to={"login"}>
          <li>Login</li>
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
            <h3>{currentUser.name}</h3>
          </Link>
        ) : (
          <Link to={"/signIn"}>
            <li>sign Up</li>
          </Link>
        )}
      </ul>
      {back ? (
        ""
      ) : (
        <span
          onClick={() => dispatch(show(true))}
          className="text-white self-center md:hidden cursor-pointer z-50"
        >
          <GiHamburgerMenu />
        </span>
      )}
      {back && (
        <div className="bg-white  fixed right-0 top-0 w-[40%] h-[80vh] p-5 text-start md:hidden">
          <span
            onClick={() => dispatch(show(false))}
            className="text-black md:hidden mt-10 cursor-pointer"
          >
            <IoMdClose />
          </span>

          <ul
            className="flex flex-col gap-9  px-10  text-black
         cursor-pointer z-50"
          >
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/addResto"}>
              <li>Add Restaurant</li>
            </Link>

            <Link to={"/login"}>
              <li>Login</li>
            </Link>

            {currentUser ? (
              <Link
                to={"/profile"}
                className="flex gap-3 justify-center items-center"
              >
                <img
                  className="w-10 rounded-3xl"
                  src={
                    currentUser?.avtar?.Url ||
                    "https://www.pngall.com/wp-content/uploads/5/Profile.png"
                  }
                  alt="profile"
                />
                <h3>{currentUser.name}</h3>
              </Link>
            ) : (
              <Link to={"/signIn"}>
                <li>sign Up</li>
              </Link>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
