import { useEffect, useState } from "react";
import Header1 from "../Components/Header1";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { emptyState } from "../redux/user/userSlice";

const OrderOnline = () => {
  const [resto, setResto] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    myResto();
  }, []);

  const myResto = async () => {
    const url = `${import.meta.env.VITE_URL}/restaurant/allResto`;
    const options = {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      dispatch(emptyState());
      const res = await fetch(url, options);
      const data = await res.json();
      if (data.success == false) {
        toast.error(data.message);
      } else {
        setResto(data.resto);
      }
    } catch (error) {
      toast.error(error.message);
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
              <Link
                key={item._id}
                to={`${item.name}/${item._id}`}
                aria-label={`Link to ${item.name}`}
              >
                <div className="border w-[320px] h-[350px] rounded-lg shadow-lg">
                  {item.resImage && item.resImage.length > 0 ? (
                    <img
                      className="h-[248px] rounded-t-lg cursor-pointer hover:opacity-75"
                      src={item.resImage[0].url}
                      alt={`Image of ${item.name}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-[248px] rounded-t-lg cursor-pointer hover:opacity-75 bg-gray-200 flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}
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
