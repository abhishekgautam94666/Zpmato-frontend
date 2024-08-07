import React from "react";

const SkeletenMenu = () => {
  return (
    <div className="w-[70%] my-6 flex gap-5 animate-pulse">
      <div className="w-[100px] h-[100px] rounded-lg bg-gray-300"></div>
      <div>
        <p className="w-[150px] h-6 bg-gray-300 mb-2"></p>
        <p className="w-[100px] h-4 bg-gray-300 mb-4"></p>
        <div className="w-[100px] h-8 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletenMenu;
