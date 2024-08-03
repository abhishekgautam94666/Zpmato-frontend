import { useEffect, useState, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  deleteItemCart,
  incrementItem,
  decrementItem,
  emptyState,
} from "../redux/user/userSlice.js";
import { memo } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state.user);
  const [active, SetActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [totalBalance, setTotalBalance] = useState(0);
  const dispatch = useDispatch();
  const totalPrice = useCallback(() => {
    const total = cartItems.reduce((pre, item) => {
      return pre + item.items.price * item.items.quantity;
    }, 0);

    setTotalBalance(total);
  }, [cartItems]);

  const checkout = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_URL}/order/checkOut`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(cartItems),
      });
      const data = await res.json();
      window.location = data.url;
      dispatch(emptyState());

      await fetch(`${import.meta.env.VITE_URL}/order/addTo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(cartItems),
      });
      dispatch(emptyState());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCartItems(cart);
    totalPrice();
  }, [cart, totalPrice]);

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
                  key={item.foodId}
                  className="border mx-5 my-5 flex p-3 items-center gap-4"
                >
                  <img className="w-10 h-10" src={item.items.Url} alt="" />
                  <div className="">
                    <h1 className="text-lg mb-2">
                      {item.items.name.toUpperCase()}
                    </h1>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(incrementItem(item.foodId))}
                        className="border w-5 hover:bg-red-500 hover:text-white"
                      >
                        +
                      </button>
                      <p>{item.items.quantity}</p>
                      <button
                        onClick={() => dispatch(decrementItem(item.foodId))}
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
                    onClick={() => dispatch(deleteItemCart(item.foodId))}
                  />
                </div>
              ))}
          </div>
          {cartItems && (
            <h1 className="text-2xl font-bold ml-5">
              Total balance : {totalBalance}
            </h1>
          )}
          {cartItems.length > 0 && (
            <button
              onClick={checkout}
              className="mt-8 uppercase bg-red-400 text-white w-[90%] self-center p-1 ml-5 rounded-sm"
            >
              checkOut
            </button>
          )}
        </div>
      ) : (
        <div>
          {cart.length > 0 && (
            <span className="ml-6 absolute bottom-5 text-red-400">
              ({cart.length})
            </span>
          )}
          <FaCartShopping
            className="text-3xl cursor-pointer text-red-500"
            onClick={() => SetActive(!active)}
          />
        </div>
      )}
    </div>
  );
};

export default memo(Cart, (prevProps, nextProps) => {
  return prevProps.cart === nextProps.cart;
});
