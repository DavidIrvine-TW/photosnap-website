import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

function MobileMenu({ burgerMenu, burgerMenuHandler }) {
  const burgerMenuSlide = burgerMenu ? "slide-in" : "slide-out";
  const burgerMenuVisible = burgerMenu ? "" : "hidden";
  const overlayVisible = burgerMenu ? "" : "hidden";

  const ModalPort = () => (
    <article className={`${burgerMenuVisible} relative top-[70px] `}>
      <div
        className={`${burgerMenuSlide} relative z-[11] flex flex-col items-center w-full h-[253px] pt-[2rem] bg-white`}
      >
        <ul className="w-[310px] mx-auto text-center text-body uppercase tracking-[2.5px] font-bold border-b mb-[1.25rem]">
          <li
            onClick={burgerMenuHandler}
            className="mb-[1.25rem] hover:text-gray cursor-pointer"
          >
            <Link to="/stories">Stories</Link>
          </li>
          <li
            onClick={burgerMenuHandler}
            className="mb-[1.25rem] hover:text-gray cursor-pointer"
          >
            <Link to="/features">Features</Link>
          </li>
          <li
            onClick={burgerMenuHandler}
            className="mb-[1.25rem] hover:text-gray cursor-pointer"
          >
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        <div className="h-[48px]">
          <button className="tracking-[2.5px] hover:bg-gray hover:text-black w-[310px] h-full text-center flex justify-center items-center bg-black text-white">
            GET AN INVITE
          </button>
        </div>
      </div>
    </article>
  );

  const BackdropPort = () => (
    <div
        id="mobile-overlay"
        className={`absolute top-[77px] bottom-0 right-0 left-0 bg-overlay z-[10] ${overlayVisible}`}
      />
  )

  return (
    <>
      {ReactDOM.createPortal(<ModalPort />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(<BackdropPort />, document.getElementById("backdrops"))}
    </>
  );
}

export default MobileMenu;
