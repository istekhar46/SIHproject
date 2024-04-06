import React, { useState } from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineSearch } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCurrentDateTime } from "../../utility/currentDateTime";

const Headers = () => {
  const currentDateTime = getCurrentDateTime();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle language change
  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);

    // Navigate based on the selected language
    // You might need to adjust the paths according to your routing setup
    switch (language) {
      case "English":
        navigate('/home');
        break;
      case "Gujarati":
        navigate('/gujarati');
        break;
      case "Hindi":
        navigate('/hindi');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <>
      <section className="p-0">
        <div className="border border-solid p-3">
          <section className="flex justify-between p-3">
            {/* Search and other elements */}
            <div>
              <div className="flex border border-solid rounded-md focus:border-b-2">
                <input
                  type="text"
                  className="border-none rounded-md p-2 outline-none focus:border-b-primaryColor"
                  placeholder="search"
                />
                <button className="text-[3rem]">
                  <AiOutlineSearch />
                </button>
              </div>
              <div className="mt-5">
                <p className="font-semibold">{currentDateTime}</p>
                <p className="font-semibold">EPAPER TODAY’S PAPER</p>
              </div>
            </div>

            {/* Middle part */}
            <div className="flex flex-col items-center">
              <h1 className="mt-3 text-black text-[40px] leading-7 font-[500] flex">
                <span className="text-red-600">
                  <GiNewspaper />
                </span>
                <span className="italic mx-3">Smart News</span> <span className="font-[800]">SURVEILLANCE</span>
              </h1>
              <h3 className="mt-3 text-textColor text-[20px] leading-7 font-[500]">
                The Era of Digital Oversight
              </h3>
              <div className="mt-5">
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="text-textColor text-[20px] leading-7 font-[500] hover:text-primaryColor"
                >
                  <option value="English">English</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>

            {/* Social icons */}
            <div>
              <ul className="flex gap-5">
                <li>
                  <a href="/" className="hover:text-primaryColor text-textColor text-[3rem] leading-7 font-[500]">
                    <AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primaryColor text-textColor text-[3rem] leading-7 font-[500]">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primaryColor text-textColor text-[3rem] leading-7 font-[500]">
                    <AiFillTwitterSquare />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
      <section className="p-0">
        <div className="border border-solid border-t-0 p-3 flex justify-between items-center">
          <div>
            <ul className="flex gap-3 font-bold ">
              <li className="hover:text-primaryColor">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="hover:text-primaryColor">
                <NavLink to="/community">Community</NavLink>
              </li>
              <li className="hover:text-primaryColor">
                <NavLink to="/newscategory">News Categories</NavLink>
              </li>
              <li className="hover:text-primaryColor">
                <NavLink to="/notifications">Notifications</NavLink>
              </li>
              <li className="hover:text-primaryColor">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="gap-3">
            <Link to='/login'>
              <button className="btn mt-0 bg-headingColor">Login</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headers;
