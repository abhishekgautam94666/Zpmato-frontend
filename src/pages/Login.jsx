import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header1 from "../Components/Header1";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const { currentUser } = useSelector((state) => state.user);
  const [formdata, setFormData] = useState({});
  const handlechange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        credentials: "include",
        body: JSON.stringify(formdata),
      });
      const responseData = await response.json();
      if (responseData.success === true) {
        dispatch(signInSuccess(responseData.user));
        toast.success(responseData.message);
        navigate("/");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header1 AddRes={"Add restaurant"} zom={"Zomato"} />
      <div className="w-[100%] h-[70vh] flex justify-center items-center mt-20 mb-20">
        <div className="px-4 py-4 rounded-lg shadow-xl">
          <h1 className="mb-10 text-3xl">Login</h1>
          <form onSubmit={submitHandler} className="flex flex-col">
            <input
              className="py-3 my-2 px-5 rounded-lg w-96 outline-none border"
              // value={formdata.email}
              type="email"
              placeholder="Email"
              id="email"
              onChange={handlechange}
              required
            />
            <input
              className="py-3 my-2 px-5 rounded-lg w-96 outline-none border"
              //  value={formdata.password}
              type="password"
              placeholder="password"
              id="password"
              onChange={handlechange}
              required
            />
            <button
              type="submit"
              className="py-3 my-2 px-5 rounded-lg w-96 bg-red-500 text-white"
            >
              Login
            </button>

            <p>
              Create an account{" "}
              <span className="px-2 text-blue-600">
                <Link to={"/signIn"}>Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
