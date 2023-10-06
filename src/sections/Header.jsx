import { useState } from "react";
import BookMark from "../components/BookMark";
import Close from "../components/Close";
import SocialLink from "../components/SocialLink";
import { headerLinks, socialLinks } from "../constants";
import Hamburger from "../components/Hamburger";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header
      className="flex justify-between 
  py-12 items-center   max-md:px-4 max-lg:px-[5%] px-[10%]  "
    >
      <BookMark />

      <ul className="flex justify-center items-center gap-4 max-md:hidden">
        {headerLinks.map((link) => (
          <li key={link.name} className="text-very-dark-blue ">
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
        <li>
          <button className="py-2 px-4 text-white bg-soft-red rounded-lg">
            LOGIN
          </button>
        </li>
      </ul>

      <button className=" " onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <Hamburger />
      </button>

      <div
        className={`absolute md:hidden overflow-hidden transition-all ease-in-out duration-500 h-screen bg-very-dark-blue z-10  py-12 top-0 ${
          isMenuVisible ? "w-full px-8 " : "w-0 opacity-0 "
        } left-0 `}
      >
        <div className="flex justify-between items-center">
          <BookMark color="white" logo={"white"} />
          <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <Close />
          </button>
        </div>

        <ul className="flex flex-col justify-center items-center mt-12">
          {headerLinks.map(({ name, url }) => (
            <li
              key={name}
              className="w-full text-center text-2xl text-white  border-b-[1px] border-grayish-blue py-4  "
            >
              <a href={url}>{name}</a>
            </li>
          ))}
          <button className="text-2xl text-white font-semibold mt-6 border-white border-2 rounded-lg px-5 py-3 w-full">
            LOGIN
          </button>
        </ul>

        <ul className="flex justify-center gap-12 bottom-16 absolute left-0 right-0">
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.name} />
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
