import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";




const Navbar = () => {


  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  // Hamburger menu
  return (

    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <a href="/">
        <div className="ml-[-30px]">
          <img src={Logo} alt="logo" style={{ width: "135px" }} />
        </div>
      </a>

      {/* menu */}
      <div>
        <ul className="hidden md:flex">

          <li className="px-4 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>


          <li className="px-4 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className="px-4 cursor-pointer">
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>

          <li className="px-4 cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>


          <li className="px-4 cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>


          <li className="px-4 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

          


        </ul>
      </div>


      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-20 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Education
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>


        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>


        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>


      </ul>



      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>

          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rana-karmakar-37254b229/"
            >
              Linkedin <FaLinkedin size={30} className="mr-4" />
            </a>
          </li>


          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#3333]">
            <a
              href="https://github.com/Ranakarmakar1"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} className="mr-4" />
            </a>
          </li>



          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNxNdjGlCnXfxBtzTVSnzVXxWrlxkjPnBlZhqQJSMPmwjTmBLLLmbQqhCzNTCpjhXnpSvB"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Mail <HiOutlineMail size={30} className="mr-4" />
            </a>
          </li>

          
          <li className="w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1Gyk0eSZDLG5pFGcT3Vu1v1kecr6Q3Duf/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} className="mr-4" />
            </a>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
