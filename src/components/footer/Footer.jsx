import logo from "../../../public/assets/shared/desktop/logo-white.svg";
import fb from "../../../public/assets/shared/desktop/facebook.svg";
import yt from "../../../public/assets/shared/desktop/youtube.svg";
import twt from "../../../public/assets/shared/desktop/twitter.svg";
import pin from "../../../public/assets/shared/desktop/pinterest.svg";
import insta from "../../../public/assets/shared/desktop/instagram.svg";
import arrow from "../../../public/assets/shared/desktop/arrow-white.svg";
import { Link } from "react-router-dom";

function Footer({ scrollToTop }) {
  return (
    <footer className="fade-in tablet:py-[4rem] tablet:px-[2.5rem] py-[3.5rem] px-[2rem] bg-black tablet:hidden">
      <div className="mx-auto">
        <div>
          <img className="w-[170px] h-[16px] mx-auto" src={logo} />
        </div>

        <div className=" w-[211px] flex justify-between mx-auto mt-[2rem] mb-[3.5rem]">
          <img className="w-[20px] cursor-pointer" src={fb} alt="Facebook icon"/>
          <img className="w-[20px] cursor-pointer" src={yt} alt="Youtube icon" />
          <img className="w-[20px] cursor-pointer" src={twt} alt="Twitter icon"/>
          <img className="w-[20px] cursor-pointer" src={pin} alt="Pinterest icon"/>
          <img className="w-[20px] cursor-pointer" src={insta} alt="Instagram icon"/>
        </div>

        <ul className="uppercase text-center text-gray flex flex-col gap-[1.25rem] font-bold tracking-[2px] cursor-pointer mb-[7.5rem]">
          <Link to="/">
            <li onClick={scrollToTop}>home</li>
          </Link>
          <Link to="/stories">
            <li onClick={scrollToTop}>stories</li>
          </Link>
          <Link to="/features">
            <li onClick={scrollToTop}>features</li>
          </Link>
          <Link to="/pricing">
            <li onClick={scrollToTop}>pricing</li>
          </Link>
        </ul>

        <div>
          <button className="mx-auto tracking-[2px] items-center text-white w-[195px] flex justify-between">
            GET AN INVITE <img className="w-[42px]" src={arrow} />
          </button>
        </div>

        <div className="mx-auto w-[255px]">
          <p className="text-gray text-body opacity-[0.6] mt-[2rem] mx-auto">
            Copyright 2019. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
