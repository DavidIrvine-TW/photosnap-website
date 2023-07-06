
import imgHero from "../../../public/assets/pricing/mobile/hero.jpg";
import imgHeroTab from "../../../public/assets/pricing/tablet/hero.jpg";
import imgHeroDesk from "../../../public/assets/pricing/desktop/hero.jpg";

function PricingPageHero() {
  return (
    <article className="tablet:flex tablet:flex-row-reverse w-[375px] tablet:w-[768px] desktop:w-[1440px]">
      <div>
        <picture>
          <source srcSet={imgHeroDesk} media="(min-width: 1440px)" />
          <source srcSet={imgHeroTab} media="(min-width: 768px)" />
          <img src={imgHero} />
        </picture>
      </div>

      <div className=" relative bg-black py-[4.5rem] px-[1.8125rem] tablet:w-[495px] tablet:py-[10.5rem] tablet:px-[3.5rem] desktop:w-[610px] desktop:py-[10.8125rem] desktop:px-[7rem]">
        <h1 className="uppercase text-white text-h1-mb mb-[1rem] tablet:text-h1">pricing</h1>
        <p className="text-body text-gray opacity-[0.6]">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
        <div id="rainbow-bar" className="absolute tablet:w-[10px] tablet:h-[150px] tablet:left-[0] tablet:top-[170px] w-[128px] h-[10px] left-[32px] top-[0px] bg-white"  />
      </div>
    </article>
  );
}

export default PricingPageHero;
