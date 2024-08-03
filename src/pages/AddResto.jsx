import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header1 from "../Components/Header1";

const AddResto = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setdescription] = useState("");
  const [address, setAddress] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [cuisine_type, setcuisine_type] = useState("");
  const [closing_hours, setclosing_hours] = useState("");
  const [opening_hours, setopening_hours] = useState("");
  const [resImage, setresImage] = useState();
  const [ann, setAnn] = useState(false);

  // AddResto //////////////////////////////
  // const AddResto = async (e) => {
  //   e.preventDefault();
  //   console.log();

  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("email", email);
  //   formData.append("description", description);
  //   formData.append("address", address);
  //   formData.append("state", state);
  //   formData.append("city", city);
  //   formData.append("phone", phone);
  //   formData.append("cuisine_type", cuisine_type);
  //   formData.append("closing_hours", closing_hours);
  //   formData.append("opening_hours", opening_hours);
  //   for (const file of resImage) {
  //     formData.append("resImage", file);
  //   }
  //   try {
  //     setann(true);
  //     const url = `${import.meta.env.VITE_URL}/restaurant/addRes`;
  //     const options = {
  //       method: "POST",
  //       body: formData,
  //       credentials: "include",
  //     };

  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     if (data.success == false) {
  //       toast.error(data.message);
  //       setann(false);
  //     }
  //     //  dispatch(currentResto(data.createRestaurant));
  //     toast.success(data.message);
  //     setann(true);
  //     navigate("/profile");
  //   } catch (error) {
  //     toast.error(error.message);
  //     setann(false);
  //   }
  // };

  const debouncedAddResto = useCallback(async (formData) => {
    try {
      setAnn(true);
      const url = `${import.meta.env.VITE_URL}/restaurant/addRes`;
      const options = {
        method: "POST",
        body: formData,
        credentials: "include",
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (!data.success) {
        toast.error(data.message);
        setAnn(false);
      } else {
        toast.success(data.message);
        setAnn(true);
        navigate("/profile");
      }
    } catch (error) {
      toast.error(error.message);
      setAnn(false);
    }
  }, []);

  const AddResto = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("phone", phone);
    formData.append("cuisine_type", cuisine_type);
    formData.append("closing_hours", closing_hours);
    formData.append("opening_hours", opening_hours);
    for (const file of resImage) {
      formData.append("resImage", file);
    }
    debouncedAddResto(formData);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("email", email);
  //   formData.append("description", description);
  //   formData.append("address", address);
  //   formData.append("state", state);
  //   formData.append("city", city);
  //   formData.append("phone", phone);
  //   formData.append("cuisine_type", cuisineType);
  //   formData.append("closing_hours", closingHours);
  //   formData.append("opening_hours", openingHours);
  //   for (const file of resImage) {
  //     formData.append("resImage", file);
  //   }
  //   debouncedAddResto(formData);
  // };

  return (
    <div>
      <div className="-mt-5">
        <Header1 zom="Zomato" />
        <hr className="-mt-5" />

        <div className="max-w-6xl mx-auto flex gap-5 justify-center">
          <div className="sticky top-5 w-[250px] h-[300px] rounded-lg ml-5 shadow-2xl my-8 hidden sm:block">
            <h2 className="text-md font-semibold py-2">
              1. Cteate your restaurant page
            </h2>
            <hr />
            <ol>
              <li className="p-4">
                <h3 className="font-semibold">Restaurant information</h3>
                <p className=" text-sm font-thin">
                  Restaurant name ,address,contact no,owner detail
                </p>
              </li>
              <li className="p-4">Restaurant Type & Timing</li>
              <li className="p-4">Upload Image</li>
            </ol>
          </div>

          <div className="w-[50%] mb-2">
            <h1 className="text-3xl text-center my-8">
              Restaurant Information
            </h1>
            <form
              onSubmit={AddResto}
              className="flex flex-col border rounded-lg"
            >
              <h1 className="my-5 ml-5 text-lg ">Restaurant Details</h1>
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="Name of the Resturant"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="description of the Resturant"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="state"
                value={state}
                onChange={(e) => setstate(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="city"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="number"
                placeholder="phone No"
                value={phone}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder="cuisine_type"
                value={cuisine_type}
                onChange={(e) => setcuisine_type(e.target.value)}
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md "
                type="text"
                placeholder="opening_hours"
                value={opening_hours}
                onChange={(e) => setopening_hours(e.target.value)}
                required
              />
              <input
                className="outline-none p-3 border my-2 rounded-lg mx-5 text-md"
                type="text"
                placeholder=" closing_hours"
                value={closing_hours}
                onChange={(e) => setclosing_hours(e.target.value)}
                required
              />

              <input
                className="mx-5 my-2 border p-3 rounded-lg"
                type="file"
                required
                multiple
                onChange={(e) => setresImage(e.target.files)}
              />
              <button
                disabled={ann}
                hidden={ann}
                type="submit"
                className="p-3 border my-2 mx-5 rounded-xl bg-red-400 text-white"
              >
                Add restaurant
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResto;
