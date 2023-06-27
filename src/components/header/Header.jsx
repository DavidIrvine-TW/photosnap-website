import logo from "../../assets/shared/desktop/logo.svg";

function Header({ burgerMenuHandler, burgerMenu }) {

  const cross = burgerMenu ? "cross" : "";

  return (
    <header className="px-[1.5rem] py-[1.75rem]">
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} />
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
