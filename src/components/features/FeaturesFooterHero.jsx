import imgFoot from "../../../public/assets/shared/mobile/bg-beta.jpg";
import imgFootTab from "../../../public/assets/shared/tablet/bg-beta.jpg";
import imgFootDesk from "../../../public/assets/shared/desktop/bg-beta.jpg";
import arrow from "../../../public/assets/shared/desktop/arrow-white.svg";

function FeaturesFooterHero() {
  return (
    <article className="relative ">
      
        <picture>
          <source srcSet={imgFootDesk} media="(min-width: 1440px)" />
          <source srcSet={imgFootTab} media="(min-width: 768px)" />
          <img loading="lazy" src={imgFoot} />
        </picture>
    
      <div className="absolute top-[64px] left-[32px] right-[32px] desktop:left-[165px] desktop:right-[190px] tablet:flex  justify-between">
        <h2 className="text-white text-h1-mb uppercase mb-[1.5rem] tablet:text-h1 tablet:w-[400px] ">
          We’re in beta. Get your invite today!
        </h2>
        <button className="hover:underline flex items-center justify-between text-white tracking-[2px] gap-[1rem] font-bold cursor-pointer">
          GET AN INVITE
          <img className="w-[42px]" src={arrow} />
        </button>
       
      </div>
      <div id="rainbow-bar" className="absolute tablet:w-[10px] tablet:h-[150px] tablet:left-[0] tablet:top-[70px] w-[128px] h-[10px] left-[32px] top-[0px] bg-white"  />
    </article>
  );
}

export default FeaturesFooterHero;
