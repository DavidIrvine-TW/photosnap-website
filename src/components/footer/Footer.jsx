import logo from "../../assets/shared/desktop/logo-white.svg";
import fb from "../../assets/shared/desktop/facebook.svg";
import yt from "../../assets/shared/desktop/youtube.svg";
import twt from "../../assets/shared/desktop/twitter.svg";
import pin from "../../assets/shared/desktop/pinterest.svg";
import insta from "../../assets/shared/desktop/instagram.svg";
import arrow from "../../assets/shared/desktop/arrow-white.svg";
import { Link } from "react-router-dom";

function Footer({ scrollToTop }) {
  return (
    <footer className="fade-in tablet:py-[4rem] tablet:px-[2.5rem] py-[3.5rem] px-[2rem] bg-black ">
      {/* mobile footer */}
      <div className=" tablet:hidden mx-auto">
        <div>
          <img className="w-[170px] h-[16px] mx-auto" src={logo} />
        </div>

        <div className=" w-[211px] flex justify-between mx-auto mt-[2rem] mb-[3.5rem]">
          <img className="w-[20px]" src={fb} />
          <img className="w-[20px]" src={yt} />
          <img className="w-[20px]" src={twt} />
          <img className="w-[20px]" src={pin} />
          <img className="w-[20px]" src={insta} />
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

      {/* tablet/desktop footer */}

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
              <li className="hover:text-gray hover:opacity-[0.6]" onClick={scrollToTop}>home</li>
            </Link>
            <Link to="/stories">
              <li className="hover:text-gray hover:opacity-[0.6]" onClick={scrollToTop}>stories</li>
            </Link>
            <Link to="/features">
              <li className="hover:text-gray hover:opacity-[0.6]" onClick={scrollToTop}>features</li>
            </Link>
            <Link to="/pricing">
              <li className="hover:text-gray hover:opacity-[0.6]" onClick={scrollToTop}>pricing</li>
            </Link>
          </ul>
        </div>

        <div className="flex justify-between items-center h-[20px] mt-[4.5rem]">
          <div className="flex w-[200px] h-[20px] gap-[1rem] ">
            <img className="w-[20px]" src={fb} />
            <img className="w-[20px]" src={yt} />
            <img className="w-[20px]" src={twt} />
            <img className="w-[20px]" src={pin} />
            <img className="w-[20px]" src={insta} />
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

export default Footer;
