import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

function Header({ burgerMenuHandler, burgerMenu }) {

  const cross = burgerMenu ? "cross" : "";

  return (
    <header className="px-[1.5rem] py-[1.75rem] fade-in desktop:px-[10.3125rem]">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/"><img className="tablet:w-[170px] tablet:h-[16px]"src={logo} /></Link>
        </div>

        <ul className="hidden tablet:inline-flex gap-[2.3125rem] uppercase font-bold tracking-[2px] text-[0.75rem]">
          <Link to="/stories"><li className="cursor-pointer hover:text-gray hover:opacity-[0.6]">stories</li></Link>
          <Link to="/features"><li  className="cursor-pointer hover:text-gray hover:opacity-[0.6]">features</li></Link>
          <Link to="/pricing"><li  className="cursor-pointer hover:text-gray hover:opacity-[0.6]">pricing</li></Link>
        </ul>

        <div className="hidden tablet:inline-flex">
        <button className="hover:bg-gray hover:text-black text-[0.75rem] tracking-[2px] flex bg-black text-white w-[158px] h-[48px] justify-center items-center gap-[1rem] font-bold">
            GET AN INVITE
          </button>
        </div>

        <div
          className={` ${cross} hamburger-menu `}
          onClick={burgerMenuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
