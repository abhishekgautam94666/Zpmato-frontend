import React from "react";
import Header1 from "../Components/Header1";
import { Link } from "react-router-dom";

const MyResto = () => {
  return (
    <div>
      <div
        className="w-[100%] h-[500px] py-1 flex flex-col bg-red-600"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${"https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp"})`,
        }}
      >
        <Header1 zom={"Zomato"} col={"white"} />

        <div className="max-w-2xl text-white mx-auto md:text-[36px] -my-3">
          <p className="">Partner with Zomato</p>
          <p>at 0% commission for the 1st month!</p>
          <p className="text-[16px] mt-5 font-medium mb-7">
            And get ads worth INR 1500. Valid for new restaurant partners in
            select cities.
          </p>

          <span>
            <Link to="restoAdd">
              <button className=" rounded-lg  text-lg text-center p-3 px-8 bg-[#2781e7] hover:bg-[#0366d6] mr-5">
                Register your restaurant
              </button>
            </Link>
            <button className="rounded-lg  text-lg text-center p-3 px-8 bg-white text-black">
              view your exiting restaurant
            </button>
            <p className="text-sm">Need help? Contact +91 9785-3658-68</p>
          </span>
        </div>
      </div>

      <div className="w-[100%] h-[300px] flex justify-center  bg-[#f4f4f4]">
        <div className="w-[600px] h-[300px] shadow-2xl flex flex-col justify-center  items-center rounded-md bg-white -m-10">
          <h1 className="text-3xl text-black font-semibold text-center">
            Get started with online ordering
          </h1>
          <p className="text-center font-light">
            Please keep the documents ready for a smooth signup
          </p>

          <div className="md:flex mt-7 ">
            <ul className="text-lg font-normal">
              <li className="pb-5">FSSAI license copy</li>
              <li className="pb-5">Regular GSTIN</li>
              <li className="pb-5">Your restaurant menu</li>
            </ul>
            <ul className="text-lg font-normal">
              <li className="pb-5">PAN card copy</li>
              <li className="pb-5">Bank account details</li>
              <li className="pb-5">Dish images for top 5 items</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-auto py-10 bg-whiteG">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h1 className="text-[36px]">Why should you partner with Zomato?</h1>
          <p className="text-[26px] font-thin my-4 leading-snug">
            Zomato enables you to get 60% more revenue, 10x new customers and
            boost your brand visibility by providing insights to improve your
            business.
          </p>

          <div className="w-full h-auto flex gap-10 flex-wrap justify-center mt-20">
            <div className="w-[300px] h-[100px]  flex justify-center items-center rounded-lg shadow-md gap-5">
              <img
                className="w-10 h-10"
                src={
                  "https://b.zmtcdn.com/merchant-onboarding/d2bcadb70abdd99811cceda4cc757f5a1600670711.png"
                }
                alt=""
              />

              <span>
                <p className="text-[24px]">1000+ cities</p>
                <p className="text-[18px]">in India</p>
              </span>
            </div>

            <div className="w-[300px] h-[100px]  flex justify-center items-center rounded-lg shadow-md gap-5">
              <img
                className="w-10 h-10"
                src={
                  "https://b.zmtcdn.com/merchant-onboarding/77b29f40bd0fb6c74c78695b07cdee901600670728.png"
                }
                alt=""
              />

              <span>
                <p className="text-[24px]">3 lakh+</p>
                <p className="text-[18px]">restaurant listing</p>
              </span>
            </div>

            <div className="w-[300px] h-[100px]  flex justify-center items-center rounded-lg shadow-md gap-5">
              <img
                className="w-10 h-10"
                src={
                  "https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png"
                }
                alt=""
              />

              <span>
                <p className="text-[24px]">5.0cror+</p>
                <p className="text-[18px]">monthly orders</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResto;
