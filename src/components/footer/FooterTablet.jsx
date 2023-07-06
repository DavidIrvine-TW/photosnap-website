import logo from "../../../public/assets/shared/desktop/logo-white.svg";
import fb from "../../../public/assets/shared/desktop/facebook.svg";
import yt from "../../../public/assets/shared/desktop/youtube.svg";
import twt from "../../../public/assets/shared/desktop/twitter.svg";
import pin from "../../../public/assets/shared/desktop/pinterest.svg";
import insta from "../../../public/assets/shared/desktop/instagram.svg";
import arrow from "../../../public/assets/shared/desktop/arrow-white.svg";
import { Link } from "react-router-dom";


function FooterTablet({scrollToTop}) {
  return (
    <footer className="fade-in py-[4rem] px-[2.5rem]  bg-black  hidden tablet:inline-block desktop:hidden">
      <div className="hidden tablet:block w-[689px] h-[156px] mx-auto ">
        <div className="flex w-full justify-between mb-[2rem]">
          <div>
            <img className="w-[170px] h-[16px] mx-auto" src={logo} />
          </div>
          <div>
            <button className="mx-auto tracking-[2px] items-center text-white w-[195px] flex justify-between font-bold hover:underline">
              GET AN INVITE <img className="w-[42px]" src={arrow} />
            </button>
          </div>
        </div>

        <div>
          <ul className="uppercase text-center text-gray flex flex-row gap-[1.5rem] font-bold tracking-[2px] cursor-pointer ">
            <Link to="/">
              <li
                className="hover:text-gray hover:opacity-[0.6]"
                onClick={scrollToTop}
              >
                home
              </li>
            </Link>
            <Link to="/stories">
              <li
                className="hover:text-gray hover:opacity-[0.6]"
                onClick={scrollToTop}
              >
                stories
              </li>
            </Link>
            <Link to="/features">
              <li
                className="hover:text-gray hover:opacity-[0.6]"
                onClick={scrollToTop}
              >
                features
              </li>
            </Link>
            <Link to="/pricing">
              <li
                className="hover:text-gray hover:opacity-[0.6]"
                onClick={scrollToTop}
              >
                pricing
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex justify-between items-center h-[20px] mt-[4.5rem] ">
          <div className="flex w-[200px] h-[20px] gap-[1rem] ">
            <img className="w-[20px] cursor-pointer" src={fb} alt="Facebook icon" />
            <img className="w-[20px] cursor-pointer" src={yt} alt="Youtube icon" />
            <img className="w-[20px] cursor-pointer" src={twt} alt="Twitter icon" />
            <img className="w-[20px] cursor-pointer" src={pin} alt="Pinterest icon" />
            <img className="w-[20px] cursor-pointer" src={insta} alt="Instagram icon" />
          </div>
          <div>
            <p className="text-gray text-body opacity-[0.6] mx-auto">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterTablet;
