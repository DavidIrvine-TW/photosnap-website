import logo from "../../assets/shared/desktop/logo-white.svg";
import fb from "../../assets/shared/desktop/facebook.svg";
import yt from "../../assets/shared/desktop/youtube.svg";
import twt from "../../assets/shared/desktop/twitter.svg";
import pin from "../../assets/shared/desktop/pinterest.svg";
import insta from "../../assets/shared/desktop/instagram.svg";
import arrow from "../../assets/shared/desktop/arrow-white.svg";
import { Link } from "react-router-dom";

function FooterDesktop({ scrollToTop }) {
  return (
    <footer className="hidden desktop:inline-block fade-in py-[4rem] px-[10.5rem]  bg-black w-full">
     
        <div className="flex gap-[7rem]">
          <div>
            <div className="mb-[6.5rem]">
              <img src={logo} />
            </div>

            <div className="flex w-[200px] h-[20px] gap-[1rem] ">
              <img className="w-[20px] cursor-pointer" src={fb} alt="Facebook icon" />
              <img className="w-[20px] cursor-pointer" src={yt} alt="Youtube icon" />
              <img className="w-[20px] cursor-pointer" src={twt} alt="Twitter icon" />
              <img className="w-[20px] cursor-pointer" src={pin} alt="Pinterest icon" />
              <img className="w-[20px] cursor-pointer" src={insta} alt="Instagram icon" />
            </div>
          </div>

          <div>
            <ul className="uppercase text-left text-gray flex flex-col gap-[1rem] font-bold tracking-[2px] cursor-pointer ">
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

          <div className="ml-auto w-[255px] flex flex-col">
            <div className="mb-[6rem]">
            <button className="mx-auto tracking-[2px] items-center text-white w-[195px] flex justify-between font-bold hover:underline">
              GET AN INVITE <img className="w-[42px]" src={arrow} />
            </button>

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

export default FooterDesktop;
