import facebook from "../assets/asset 14.svg";
import linkdin from "../assets/asset 10.svg";
import insta from "../assets/asset 11.svg";
import twiter from "../assets/asset 12.svg";
import youtube from "../assets/asset 13.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex justify-between mx-10 flex-wrap">
            <h1 className="text-6xl text-black font-extrabold my-5">zomato</h1>

            <div className="gap-4 flex items-center">
              <input
                className="border border-slate-500 text-center rounded-lg py-2 px-1 w-[110px]"
                list="countryOption"
                type="text"
                id="language"
                name="language"
                placeholder="INDIA"
              />
              <datalist id="countryOption">
                <option value="INDIA" />
                <option value="USA" />
              </datalist>

              <input
                className="border border-slate-500 text-center rounded-lg  py-2 px-1 w-[110px]"
                list="langaugeOption"
                type="text"
                id="language"
                name="language"
                placeholder="English"
              />
              <datalist id="langaugeOption">
                <option value="English" />
                <option value="spanish" />
                <option value="French" />
                <option value="German" />
              </datalist>
            </div>
          </div>

          <div className="flex mx-10 justify-between my-6 flex-wrap">
            <div className=" flex flex-col gap-2">
              <h1 className="text-black font-dark text-xl mb-4">
                ABOUT ZOMATO
              </h1>
              <p className="font-thin">Who We Are</p>
              <p className="font-thin">Blog</p>
              <p className="font-thin">Work With us</p>
              <p className="font-thin">Investor Relation</p>
              <p className="font-thin">Report Fraud</p>
              <p className="font-thin">Press Kit</p>
              <p className="font-thin">Contact US</p>
            </div>

            <div className=" flex flex-col gap-2">
              <h1 className="text-black font-dark text-xl mb-">ABOUT ZOMATO</h1>
              <p className="font-thin">Zomato</p>
              <p className="font-thin">Blinkit</p>
              <p className="font-thin">Feeding India</p>
              <p className="font-thin">Investor Relation</p>
              <p className="font-thin">HyperPure</p>
              <p className="font-thin">Zomaland</p>
            </div>

            <div className=" flex flex-col gap-2">
              <h1 className="text-black font-dark text-xl mb-4">ZOMAVERSE</h1>
              <p className="font-thin">Partner With US</p>
              <p className="font-thin">Apps For you</p>

              <h3 className="text-xl font-dark my-6">FOR ENTERPRISES</h3>
              <p className="font-thin">Zomato For Enterprise</p>
            </div>

            <div className=" flex flex-col gap-2">
              <h1 className="text-black font-dark text-xl mb-4">LEARN MORE</h1>
              <p className="font-thin">Privacy</p>
              <p className="font-thin">Security</p>
              <p className="font-thin">Term</p>
              <p className="font-thin">sitemap</p>
            </div>

            <div className="flex flex-col items-center mt-5 ">
              <h1 className="text-black font-dark text-xl mb-4">
                SOCIAL LINKS
              </h1>
              <span className="flex gap-1">
                <Link to={"https://www.facebook.com/zomato"}>
                  <img src={facebook} alt="facebook" />
                </Link>

                <Link
                  to={
                    "https://www.linkedin.com/company/zomato/?originalSubdomain=in"
                  }
                >
                  <img src={linkdin} alt="linkdin" />
                </Link>

                <Link to={"https://www.instagram.com/zomato/"}>
                  <img src={insta} alt="instagram" />
                </Link>

                <Link to={"https://twitter.com/zomato"}>
                  <img src={twiter} alt="twiter" />
                </Link>

                <Link to={"https://www.youtube.com/zomato"}>
                  <img src={youtube} alt="youtube" />
                </Link>
              </span>
              <div className="my-5">
                <img
                  className="w-48"
                  src={
                    "https://www.geeetech.com/blog/wp-content/uploads/2017/10/app-download-670x300.png"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr className="border border-slate-200 mx-5" />
          <p className="text-md font-light mx-5 my-2">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
