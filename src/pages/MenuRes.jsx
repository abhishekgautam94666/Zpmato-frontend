import React, { useState, useEffect } from "react";
import Header1 from "../Components/Header1";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Cart from "../Components/Cart";
import { useSelector } from "react-redux";

const MenuRes = () => {
  const { _id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [resto, setResto] = useState([]);
  const [menu, setMenu] = useState([]);

  const myResto = async () => {
    const url = `https://zomato-backend-7clw.onrender.com/restaurant/currentResto/${_id}`;
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

  const menuResto = async () => {
    const url = `https://zomato-backend-7clw.onrender.com/restaurant/getMenuItem/${_id}`;
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
      }
      setMenu(data.menu);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    myResto();
    menuResto();
  }, []);

  const addToCart = async ({ items, userId, restaurantId, status }) => {
    const url = "https://zomato-backend-7clw.onrender.com/order/addto";
    const options = {
      method: "POST",
      body: JSON.stringify({
        userId,
        restaurantId,
        items,
        status,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      const result = await fetch(url, options);
      const order = await result.json();
      if (order.success == false) {
        toast.error(order.message);
      } else {
        toast.success("item add to cart");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <Header1 zom="Zomato" loc="true" />
        <Cart />
        <div className="w-full">
          {resto.map((item) => (
            <div key={item._id} className="max-w-5xl mx-auto flex flex-col">
              <div className="w-full flex gap-1">
                <img
                  className="w-[70%] h-[50vh] hover:opacity-75 transition-all ease-in-out"
                  src={item.resImage[0].url}
                />
                <img
                  className="w-[30%] h-[50vh] hover:opacity-75  transition-all  ease-in-out"
                  src={
                    item.resImage[1]?.url ||
                    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                  }
                />
              </div>
              <p className="text-2xl mt-2 font-semibold">{item.name}</p>
              <p className="font-thin">{item.city}</p>
              <hr className="my-5" />

              <div className="w-full">
                <h1>Order Online</h1>

                {menu &&
                  menu.map((items) => (
                    <div className="w-[70%] my-6 flex gap-5" key={items._id}>
                      <img
                        className="w-[100px] h-[100px] rounded-lg shadow-2xl bg-transparent"
                        src={items.foodImg?.url}
                        alt=""
                      />

                      <div>
                        <p className="text-xl font-semibold">{items.name}</p>
                        <p className="font-thin">₹ {items.price}</p>
                        <button
                          type="button"
                          onClick={() =>
                            addToCart({
                              userId: currentUser?._id,
                              restaurantId: items.restaurantId,
                              items: {
                                name: items.name,
                                quantity: 1,
                                price: items.price,
                                Url: items.foodImg?.url,
                              },
                              status: "Pending",
                            })
                          }
                          className="border p-1 px-5 rounded-lg mt-3 bg-red-500 text-white"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuRes;
