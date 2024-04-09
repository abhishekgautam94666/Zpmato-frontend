import React from "react";

const ProfileEdit = () => {
  return (
    <div className="">
      <form className="w-full flex flex-col items-center gap-y-8 my-4">
        <input
          className="border border-gray-500 p-2 rounded-md w-96 shadow-lg outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <input
          className="border border-gray-500 p-2 rounded-md w-96 shadow-lg outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          className="border border-gray-500 p-2 rounded-md w-96 shadow-lg outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        />

        <input
          className="border border-gray-500 p-2 rounded-md w-96 shadow-lg outline-none"
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          required
        />

        <div>
          <button className=" w-28 p-3 text-center bg-red-500 rounded-md mr-6 text-white">
            Update
          </button>

          <button className=" w-28 p-3 text-center bg-red-500 rounded-md mr-6 text-white">
            logOut
          </button>
        </div>
      </form>
    </div>
  );
};

// export default ProfileEdit;
