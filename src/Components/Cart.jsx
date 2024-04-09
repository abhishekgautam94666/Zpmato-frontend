import React, { memo, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const Cart = () => {
  console.log("hjg");
  const { currentUser } = useSelector((state) => state.user);
  const [active, SetActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  // const showItems = async () => {
  //   const url = `http://localhost:500/order/userOrder/${currentUser?._id}`;
  //   const options = {
  //     method: "Get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   };
  //   try {
  //     const res = await fetch(url, options);
  //     const data = await res.json();
  //     setCartItems(data.orders);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  const updateQna = async (id, quantity) => {
    try {
      const res = await fetch(`http://localhost:500/order/updateStatus/${id}`, {
        method: "POST",
        body: JSON.stringify({
          quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.success == false) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteCart = async (id) => {
    try {
      const res = await fetch(`http://localhost:500/order/delete/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.success == false) {
        toast.error(data.message);
      }
      //window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.items.price * item.items.quantity;
      });
      setTotalBalance(total);
    }
  }, [cartItems]);

  useEffect(() => {
    const showItems = async () => {
      const url = `http://localhost:500/order/userOrder/${currentUser?._id}`;
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
        setCartItems(data.orders);
      } catch (error) {
        toast.error(error.message);
      }
    };
    showItems();
  }, [cartItems]);

  return (
    <div className="fixed right-8 top-5 z-50">
      {active ? (
        <div
          className={`fixed z-50 top-0 right-0 border w-full sm:w-96 h-[100vh] bg-white ${
            active ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center my-3 mx-5">
            <span className="text-lg font-bold">My Order</span>
            <IoMdClose
              onClick={() => SetActive(!active)}
              className=" text-4xl cursor-pointer hover:text-red-500"
            />
          </div>
          <div>
            {cartItems &&
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="border mx-5 my-5 flex p-3 items-center gap-4"
                >
                  <img className="w-10 h-10 " src={item.items.Url} alt="" />
                  <div className="">
                    <h1 className="text-lg mb-2">
                      {item.items.name.toUpperCase()}
                    </h1>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQna(item._id, item.items.quantity + 1)
                        }
                        className="border w-5 hover:bg-red-500 hover:text-white"
                      >
                        +
                      </button>
                      <p>{item.items.quantity}</p>
                      <button
                        onClick={() =>
                          updateQna(item._id, item.items.quantity - 1)
                        }
                        className="border w-5 hover:bg-red-500"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <h1 className="text-lg mb-2 self-start">
                    Price ₹ : {item.items.price}
                  </h1>
                  <MdDelete
                    className="self-start size-6 mt-1 cursor-pointer hover:opacity-35"
                    onClick={() => deleteCart(item._id)}
                  />
                </div>
              ))}
          </div>
          {cartItems && (
            <h1 className="text-2xl font-bold ml-5">
              Total banalce : {totalBalance}
            </h1>
          )}
        </div>
      ) : (
        <FaCartShopping
          className="text-3xl cursor-pointer"
          onClick={() => SetActive(!active)}
        />
      )}
    </div>
  );
};

export default Cart;
