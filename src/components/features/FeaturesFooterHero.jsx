import imgFoot from "../../assets/shared/mobile/bg-beta.jpg";
import imgFootTab from "../../assets/shared/tablet/bg-beta.jpg";
import imgFootDesk from "../../assets/shared/desktop/bg-beta.jpg";
import arrow from "../../assets/shared/desktop/arrow-white.svg";

function FeaturesFooterHero() {
  return (
    <article className="relative ">
      
        <picture>
          <source srcSet={imgFootDesk} media="(min-width: 1440px)" />
          <source srcSet={imgFootTab} media="(min-width: 768px)" />
          <img src={imgFoot} />
        </picture>
    
      <div className="absolute top-[64px] left-[32px] right-[32px] tablet:flex  justify-between">
        <h2 className="text-white text-h1-mb uppercase mb-[1.5rem] tablet:text-h1 tablet:w-[400px] ">
          We’re in beta. Get your invite today!
        </h2>
        <button className="flex items-center justify-between text-white tracking-[2px] gap-[1rem] font-bold cursor-pointer">
          GET AN INVITE
          <img className="w-[42px]" src={arrow} />
        </button>
      </div>
    </article>
  );
}

export default FeaturesFooterHero;
