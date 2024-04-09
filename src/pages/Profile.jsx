import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../Components/Header1";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import MyResato from "../Components/MyResato.jsx";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
  const [showResto, setShowResto] = useState(false);
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || " ");
  const [password, setPassword] = useState(currentUser?.password || "");
  const [address, setAddress] = useState(currentUser?.address || "");
  const [phone, setPhoneNo] = useState(currentUser?.phoneNO || "");
  const [avtar, setAvtar] = useState();
  const [anable, setAnable] = useState(false);
  const [resto, setResto] = useState([]);

  // update edit profile
  const updateHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("phoneNO", phone);
    formData.append("avtar", avtar);

    try {
      setShowResto(false);
      setAnable(true);
      const url = `http://localhost:500/users/update/${currentUser._id}`;
      const options = {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "multipart/form-data",
        },
        credentials: "include",
      };

      const response = await fetch(url, options);
      const data = await response.json(); // Assuming response is JSON
      if (data.success === true) {
        dispatch(signInSuccess(data.user));
        // navigate("/");
        toast.success(data.message);
        setAnable(false);
      } else {
        toast.error(data.message);
        setAnable(false);
      }
    } catch (error) {
      toast.error(error.message);
      setAnable(false);
    }
  };

  //logout
  const logOutHandler = async () => {
    const res = await fetch("http://localhost:500/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.success == true) {
      dispatch(signInSuccess(null));
      toast.success(data.message);
      navigate("/login");
    } else {
      toast.error(data.message);
    }
  };

  // my restorest
  const myResto = async () => {
    const url = "http://localhost:500/restaurant/myResto";
    const options = {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      setEdit(false);
      setShowResto(true);
      const res = await fetch(url, options);
      const data = await res.json();
      if (data.success == false) {
        toast.error(data.message);
        setShowResto(false);
      } else {
        setResto(data.restaurant);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(data.message);
      setShowResto(false);
    }
  };

  return (
    <div id="primary" className="max-w-6xl mx-auto">
      <div className="">
        <Header1 AddRes={"Add restaurant"} zom={"Zomato"} />
        <div
          className="w-full h-56 bg-no-repeat flex justify-between items-center"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${"https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg"}`,
          }}
        >
          <div className="flex justify-center items-center gap-6">
            {" "}
            <img
              className="w-32 rounded-[70%] 4 shadow-md ml-10 border-4 border-white cursor-pointer,"
              src={
                currentUser?.avtar?.Url ||
                "https://www.pngall.com/wp-content/uploads/5/Profile.png"
              }
              alt=""
            />
            <h1 className="text-white text-2xl font-semibold">
              Abhishek Gautam
            </h1>
          </div>
          <button
            onClick={() => setEdit(!edit)}
            type="button"
            className=" w-auto p-3 text-center bg-red-500 rounded-md mr-6 text-white"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="w-full flex  my-8 flex-wrap">
        <div className="w-[30%] ">
          <ul className="w-[60%] text-lg border border-gray-50">
            <button
              type="button"
              onClick={() => myResto()}
              className="p-2 hover:active:bg-red-500 cursor-pointer hover:bg-red-200"
            >
              My restaurant
            </button>
            <li className="p-2 hover:active:bg-red-500 hover:bg-red-200 cursor-pointer">
              My Order
            </li>
            <li className="p-2 hover:active:bg-red-500 hover:bg-red-200 cursor-pointer">
              Favourites order
            </li>
            <li className="p-2 hover:active:bg-red-500 hover:bg-red-200 cursor-pointer">
              order History
            </li>
            <button
              type="button"
              onClick={logOutHandler}
              className="p-2 hover:active:bg-red-500 w-full text-start hover:bg-red-200 cursor-pointer"
            >
              logout
            </button>
          </ul>
        </div>

        {currentUser && edit && (
          <div className="w-[50%]">
            <form onSubmit={updateHandle} className="w-full flex flex-col ">
              <input
                className="w-full border p-3 my-2 outline-none rounded-lg self-end"
                type="text"
                placeholder="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full border p-3 my-2 outline-none rounded-lg"
                type="email"
                placeholder="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full border p-3 my-2 outline-none rounded-lg"
                type="password"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="w-full border p-3 my-2 outline-none rounded-lg"
                type="text"
                placeholder="Address"
                id="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="w-full border p-3 my-2 outline-none rounded-lg"
                type="text"
                placeholder="Phone NO"
                id="PhoneNo"
                value={phone}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <input
                className="w-full border p-3 my-2 outline-none rounded-lg"
                type="file"
                placeholder="Image"
                id="avtar"
                onChange={(e) => setAvtar(e.target.files[0])}
              />
              <button
                type="submit"
                className="text-xl text-white bg-red-500 py-2 rounded-lg mt-6 hover:active:bg-red-600"
                disabled={anable}
              >
                Update
              </button>
            </form>
          </div>
        )}

        {showResto && (
          <div className="w-[50%] rounded-xl shadow-sm">
            <h1 className="text-lg p-1">My Restaurants</h1>
            <hr />
            <MyResato res={resto} />
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Profile;
