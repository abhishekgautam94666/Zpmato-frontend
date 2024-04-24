import React, { useEffect, useState } from "react";
import Header1 from "../Components/Header1";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const OrderOnline = () => {
  const [resto, setResto] = useState([]);

  useEffect(() => {
    myResto();
  }, []);

  const myResto = async () => {
    const url = "https://zomato-backend-7clw.onrender.com/restaurant/allResto";
    const options = {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (data.success == false) {
        toast.error(data.message);
      } else {
        setResto(data.resto);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  return (
    <div>
      <div>
        <Header1 zom="Zomato" loc="true" />

        <div className="max-w-5xl mx-auto  h-auto flex flex-col">
          <h1 className="text-3xl">
            Delivery Restaurants in Yamuna Nagar Locality
          </h1>
          <div className=" flex flex-wrap  justify-center lg:justify-start gap-8 my-8">
            {resto.map((item) => (
              <Link key={item._id} to={`${item.name}/${item._id}`}>
                <div className="border w-[320px] h-[350px] rounded-lg shadow-lg">
                  <img
                    className="h-[248px] rounded-t-lg cursor-pointer hover:opacity-75"
                    src={item.resImage[0].url}
                    alt=""
                  />
                  <p className="pt-3 text-xl pl-3">{item.name}</p>
                  <p className="font-thin pl-3">{item.cuisine_type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
