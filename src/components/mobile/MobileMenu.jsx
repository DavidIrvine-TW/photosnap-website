function MobileMenu({ burgerMenu }) {
  const burgerMenuSlide = burgerMenu ? "slide-in " : "slide-out";
  const burgerMenuVisible = burgerMenu ? "" : "hidden";
  const overlayVisible = burgerMenu ? "" : "hidden";
  console.log(burgerMenu)

  return (
  <article className={`${burgerMenuVisible}`}>
      <div
        id="mobile-overlay"
        className={`absolute top-[100px] bottom-0 right-0 left-0  bg-overlay z-[0] ${overlayVisible}`}
      />
      <div className={`${burgerMenuSlide} flex flex-col items-center  w-full h-[253px] pt-[2rem] bg-white`}>
        <ul className="w-[310px] mx-auto text-center text-body uppercase tracking-[2.5px] font-bold border-b mb-[1.25rem]">
          <li className="mb-[1.25rem] hover:text-gray cursor-pointer">Stories</li>
          <li className="mb-[1.25rem] hover:text-gray cursor-pointer">Features</li>
          <li className="mb-[1.25rem] hover:text-gray cursor-pointer">Pricing</li>
        </ul>

        <div className="h-[48px]">
          <button className=" tracking-[2.5px] hover:bg-gray hover:text-black w-[310px] h-full text-center flex justify-center items-center bg-black text-white">
            GET AN INVITE
          </button>
        </div>
      </div>
      </article>
  );
}

export default MobileMenu;
