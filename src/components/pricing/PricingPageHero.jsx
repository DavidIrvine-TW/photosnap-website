
import imgHero from "../../assets/pricing/mobile/hero.jpg";
import imgHeroTab from "../../assets/pricing/tablet/hero.jpg";
import imgHeroDesk from "../../assets/pricing/desktop/hero.jpg";

function PricingPageHero() {
  return (
    <article className="tablet:flex tablet:flex-row-reverse">
      <div>
        <picture>
          <source srcSet={imgHeroDesk} media="(min-width: 1440px)" />
          <source srcSet={imgHeroTab} media="(min-width: 768px)" />
          <img src={imgHero} />
        </picture>
      </div>

      <div className="bg-black py-[4.5rem] px-[1.8125rem] tablet:w-[495px] tablet:py-[10.5rem] tablet:px-[3.5rem]">
        <h1 className="uppercase text-white text-h1-mb mb-[1rem] tablet:text-h1">pricing</h1>
        <p className="text-body text-gray opacity-[0.6]">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
    </article>
  );
}

export default PricingPageHero;
