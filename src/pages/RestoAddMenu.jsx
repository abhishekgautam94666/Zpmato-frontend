import React, { useState } from "react";
import Header1 from "../Components/Header1";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const RestoAddMenu = () => {
  const { restoId } = useParams();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [foodImg, setfoodImg] = useState();
  const [category, setcategory] = useState();
  const [ann, setAnn] = useState(false);
  console.log(name, price, foodImg);

  const getResto = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("foodImg", foodImg);
    formData.append("category", category);

    try {
      setAnn(true);
      const res = await fetch(
        `https://zomato-backend-7clw.onrender.com/restaurant/menu/${restoId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            //"Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log("data ::", data);
      if (data.status == false) {
        toast.error(data.message);
        setAnn(false);
      }
      console.log(data.message);
      toast.success(data.message);
      setAnn(false);
    } catch (error) {
      toast.error(error.message);
      setAnn(false);
    }
  };
  return (
    <div>
      <div>
        <Header1 zom="Zomato" />
        <div>
          <form onSubmit={getResto} className="flex flex-col items-center">
            <input
              className="outline-none border p-5 my-3 rounded-lg shadow-lg"
              type="text"
              placeholder="food item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="outline-none border p-5 my-3 rounded-lg shadow-lg"
              type="text"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              className="outline-none border p-5 my-3 rounded-lg shadow-lg"
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            />
            <input
              className="p-5 w-56 my-5 rounded-lg border"
              type="file"
              onChange={(e) => setfoodImg(e.target.files[0])}
            />
            <button
              disabled={ann}
              type="submit"
              className="w-96 mb-8 border p-5 my-3 rounded-lg shadow-lg"
            >
              Add Food Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestoAddMenu;
