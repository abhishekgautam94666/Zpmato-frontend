import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../Components/Header1";

import toast from "react-hot-toast";

const SingIn = () => {
  const pass = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  // show password
  const showpass = () => {
    pass.current.type == "password"
      ? (pass.current.type = "text")
      : (pass.current.type = "password");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://zomato-backend-7clw.onrender.com/users/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const responseData = await response.json();
      if (responseData.success === true) {
        toast.success(responseData.message);
        navigate("/login");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header1 AddRes={"Add restaurant"} zom={"Zomato"} />
      <div className="w-[100%] h-[70vh] flex justify-center items-center mt-20 mb-20">
        <div className="px-4 py-4 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="mb-10 text-3xl">Sign UP</h1>
            <input
              className="py-3 my-2 px-5 rounded-lg w-96 outline-none border"
              type="text"
              placeholder="Name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              className="py-3 my-2 px-5 rounded-lg w-96 outline-none border"
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              ref={pass}
              className="py-3 my-2 px-5 rounded-lg w-96 outline-none border"
              type="password"
              placeholder="password"
              autoComplete="off"
              id="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <button type="button" onClick={showpass}>
              show password
            </button>

            <button
              type="submit"
              className="py-3 my-2 px-5 rounded-lg w-96 bg-red-500 text-white"
            >
              Create Account
            </button>

            <button
              type="button"
              className="py-3 my-2 px-5 rounded-lg w-96 bg-gray-200 text-black"
            >
              Sign in Google
            </button>

            <p>
              Aready have an account{" "}
              <span className="px-2 text-blue-600">
                <Link to={"/login"}>Log In</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingIn;
