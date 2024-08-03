import asset2 from "../assets/asset 1.avif";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import ico from "../assets/asset 7.svg";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const [add, setAdd] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchSearchResult = async (searchQuery) => {
    if (!searchQuery) return;
    const response = await fetch(
      `${import.meta.env.VITE_URL}/restaurant/search/${searchQuery}`
    );
    const data = await response.json();
    setResults(data.data);
  };

  const debouncedFetchResults = useCallback(
    debounce(fetchSearchResult, 300),
    []
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(`${data.address.state},${data.address.city}`));
    });

    debouncedFetchResults(query);
  }, [query]);

  const HandleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className={`z-0`}>
      <div className="flex flex-col">
        <div>
          <img className="w-screen h-[70vh]" src={asset2 || ""} alt="" />
        </div>

        <Header />

        <div className="absolute top-28 text-white flex flex-col text-center md:right-96 gap-7 mx-5">
          <h1 className="text-7xl font-extrabold">Zomato</h1>
          <p className="text-4xl">
            Discover the best food & drinks in Yamuna Nagar
          </p>
          <div className="bg-white flex items-center justify-evenly rounded-lg">
            <div className=" w-[50%] text-gray-300 flex justify-center items-center pl-10">
              <FaLocationDot className="size-7 text-red-500" />
              <input
                type="search"
                className="w-full p-3 text-gray-400 outline-none"
                placeholder={add}
              />
            </div>

            <div className="flex items-center gap-2 w-[50%]">
              <CiSearch className="text-3xl text-gray-400 " />
              <input
                className="w-full py-3 text-slate-800 outline-none"
                placeholder="search for restaurant"
                type="search"
                value={query}
                onChange={HandleChange}
              />
            </div>

            <div className="w-[50%] max-md:mt-7 absolute top-48 right-0">
              {results?.length > 0 && (
                <div className="my-10 bg-white rounded-lg shadow-lg p-4">
                  <ul className="space-y-4">
                    {results.map((result, index) => (
                      <li
                        key={index}
                        className="p-4 border rounded-lg shadow flex"
                      >
                        <img
                          src={
                            result.resImage[0]?.secureUrl ||
                            "default-image-url.jpg"
                          }
                          alt={result.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <Link
                            to={`     
                            https://zomto.netlify.app/restaurant/order-online/${result.name}/${result._id}`}
                          >
                            <h3 className="text-lg text-black font-thin">
                              {result.name}
                            </h3>
                            <p className="text-gray-700">
                              {result.city}, {result.state}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {`${result.opening_hours} to ${result.closing_hours}`}
                            </p>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-6xl mx-auto my-10">
        <div className="w-[45%] mx-10 border border-slate-200 rounded-lg shadow-xl hover:scale-105 transition-all duration-700">
          <Link to={"restaurant/order-online"}>
            <img
              className="rounded-lg w-full h-44 overflow-hidden"
              src={
                "https://t4.ftcdn.net/jpg/04/08/52/09/240_F_408520993_jvurAFWBmB332AYQOWL2TMAEXAikMh2v.jpg"
              }
              alt="loded.."
            />
          </Link>
          <h2 className="mx-2">Order Online</h2>
          <p className=" mx-2 text-sm font-thin pb-2">
            Stay home and order to you...
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <p className="mx-10 mt-20 text-4xl font-thin">
            Popular localities in and around{" "}
            <span className="text-[2.5rem]">Yamuna Nagar</span>
          </p>

          <div className="w-[310px] h-20 mx-10 mt-10 border shadow-md rounded-lg flex justify-between items-center">
            <div>
              <p className="ml-4">Yamuna Nagar Locality</p>
              <p className="ml-4 font-thin">437 places</p>
            </div>
            <img className="size-7 " src={ico} alt="" />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#fffbf7" }}
        className=" w-full h-auto pb-6 flex justify-center items-center flex-wrap"
      >
        <div className="">
          <img
            className="w-72"
            src={
              "https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
            }
            alt=""
          />
        </div>

        <div className="flex text-lg flex-col justify-center">
          <div className="mb-7">
            <h1 className="text-3xl mb-7">Get the Zomato app</h1>
            <p className="font-thin">
              We will send you a link, open it on your phone to download the app
            </p>
          </div>

          <div className="flex gap-3 mb-4">
            <input className="" type="radio" id="Email" name="one" />
            <label htmlFor="Email">Email</label>
            <input type="radio" id="Phone" name="one" />
            <label htmlFor="Phone">Phone</label>
          </div>

          <div className="flex">
            <input type="text" className="border py-2 rounded-lg mr-2" />
            <button className="border py-2 px-5 rounded-lg text-center bg-red-500 hover:bg-red-600 text-white">
              Share
            </button>
          </div>

          <div className="">
            <p className="font-thin mt-5">Download app from</p>

            <div className="flex gap-5 mt-4">
              <img
                className="w-40"
                src={
                  "https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                }
                alt=""
              />
              <img
                className="w-40"
                src={
                  "https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#f8f8f8" }} className="w-full h-auto pb-5">
        <div className="max-w-6xl mx-auto">
          <div className="mx-10">
            <h1 className="text-[30px] mb-5">Explore option near me</h1>

            <div className="flex flex-col gap-5">
              <details className="border py-3 px-5 rounded-lg bg-white">
                <summary className="my-2 text-xl">
                  Popular cuisines near me
                </summary>
                <p className="text-ms font-thin">
                  Bakery food near me. Beverages food near me. Biryani food near
                  me. Burger food near me. Chinese food near me. Continental
                  food near me. Desserts food near me. Ice Cream food near
                  me.Italian food near me. Mithai food near me. Momos food near
                  me. Mughlai food near me. North Indian food near me. Pasta
                  food near me. Pizza food near m. eRolls food near me. Sandwich
                  food near me. Shake food near meSouth I
                </p>
              </details>

              <details className="border py-3 px-5 rounded-lg bg-white">
                <summary className="my-2 text-xl">
                  Popular restaurant types near me
                </summary>
                <p className="text-ms font-thin">
                  Bakery food near me. Beverages food near me. Biryani food near
                  me. Burger food near me. Chinese food near me. Continental
                  food near me. Desserts food near me. Ice Cream food near
                  me.Italian food near me. Mithai food near me. Momos food near
                  me. Mughlai food near me. North Indian food near me. Pasta
                  food near me. Pizza food near m. eRolls food near me. Sandwich
                  food near me. Shake food near meSouth I
                </p>
              </details>

              <details className="border py-3 px-5 rounded-lg bg-white">
                <summary className="my-2 text-xl">Cities We Deliver To</summary>
                <div className="text-ms font-thin flex justify-between items-center">
                  <ul>
                    <li>Delhi NCR</li>
                    <li>Hyderabad</li>
                    <li>Ahmedabad</li>
                    <li>Hyderabad</li>
                    <li>Nashik</li>
                    <li>Amritsar</li>
                    <li>Ranchi</li>
                    <li>Vadodara</li>
                    <li>Srinagar</li>
                  </ul>
                  <ul>
                    <li>Kolkata</li>
                    <li>Goas</li>
                    <li>Allahabad</li>
                    <li>Hyderabad</li>
                    <li>Shimla</li>
                    <li>Agra</li>
                    <li>Ludhiana</li>
                    <li>Leh</li>
                    <li>Alappuzha</li>
                  </ul>
                  <ul>
                    <li>Pune</li>
                    <li>Jaipur</li>
                    <li>Hyderabad</li>
                    <li>Guwati</li>
                    <li>Mysor</li>
                    <li>Bhopal</li>
                    <li>Udaipur</li>
                    <li>Madurai</li>
                    <li>Trivandrum</li>
                  </ul>
                  <ul>
                    <li>Rishikes</li>
                    <li>Hyderabad</li>
                    <li>Madurai</li>
                    <li>Manali</li>
                    <li>Ajmeer</li>
                    <li>Nepal</li>
                    <li>Surat</li>
                    <li>Kota</li>
                    <li>Jammu</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
