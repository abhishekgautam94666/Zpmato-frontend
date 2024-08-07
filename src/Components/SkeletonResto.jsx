import React from "react";

const SkeletonResto = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col animate-pulse">
      <div className="w-full flex gap-1">
        <div className="w-[70%] h-[50vh] bg-gray-300"></div>
        <div className="w-[30%] h-[50vh] bg-gray-300"></div>
      </div>
      <p className="w-[50%] h-8 bg-gray-300 mt-2"></p>
      <p className="w-[30%] h-6 bg-gray-300 mt-1"></p>
      <hr className="my-5" />
    </div>
  );
};

export default SkeletonResto;
