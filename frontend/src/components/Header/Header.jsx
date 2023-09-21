import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { getCurrentDateTime } from "..//../utility/currentDateTime";
import { useEffect } from "react";

const lang = [
  {
    link: "https://www.google.com",
    display: "English",
  },
  {
    link: "https://www.google.com",
    display: "Urdu",
  },
  {
    link: "https://www.google.com",
    display: "Hindi",
  },
];

const social = [
  {
    display: <AiFillFacebook />,
  },
  {
    display: <AiFillInstagram />,
  },
  {
    display: <AiFillTwitterSquare />,
  },
];

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "News Categories",
    path: "/categories",
  },
  {
    display: "Notifications",
    path: "/notifications",
  },
  {
    display: "About Us",
    path: "/about",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
];

const Headers = () => {
  const currentDateTime = getCurrentDateTime();

  return (
    <>
      <section className="p-0">
        <div className="border border-solid p-3">
          <section className=" flex justify-between p-3">
            <div className="">
              <div className="flex border border-solid rounded-md focus:border-b-2">
                <input
                  type="text"
                  className="border-none rounded-md p-2 outline-none  focus:border-b-primaryColor"
                  placeholder="search"
                />
                <button className="text-[3rem]">
                  {" "}
                  <AiOutlineSearch />
                </button>
              </div>
              <div className="mt-5">
                <p className="font-semibold">{currentDateTime}</p>
                <p className="font-semibold ">EPAPER TODAY’S PAPER</p>
                {/* <Link to="/home">
                  <button className="btn bg-textColor text-[14px]">Home</button>
                </Link> */}
              </div>
            </div>

            <div>
              <div className="">
                <ul className="flex justify-center gap-4">
                  {lang.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        className="hover:text-primaryColor text-textColor text-[20px] leading-7 font-[500] "
                      >
                        {item.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="mt-3"
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
                  alt="img"
                />
                <h3 className="mt-3 text-textColor text-[20px] leading-7 font-[500]">
                  JOURNALISM OF COURAGE
                </h3>
              </div>
            </div>

            <div>
              <ul className="flex gap-5">
                {social.map((item, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      target="_blank"
                      className="hover:text-primaryColor text-textColor text-[3rem] leading-7 font-[500]"
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
      <section className="p-0">
        <div className="border border-solid border-t-0 p-3 flex justify-between items-center">
          <div >
            <ul className="flex gap-3 font-bold ">
              {navLinks.map((item, index) => (
                <li key={index} className="hover:text-primaryColor" >
                  <NavLink to={item.path}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gap-3">
            <button className="btn mt-0 bg-headingColor">Login</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headers;
