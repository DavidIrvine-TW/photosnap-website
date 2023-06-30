import imgHero from "../../assets/features/mobile/hero.jpg";
import imgHeroTab from "../../assets/features/tablet/hero.jpg";
import imgHeroDesk from "../../assets/features/desktop/hero.jpg";

function FeaturesPageHero() {
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
        <h1 className="uppercase text-white text-h1-mb mb-[1rem] tablet:text-h1 ">features</h1>
        <p className="text-body text-gray opacity-[0.6]">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
    </article>
  );
}

export default FeaturesPageHero;
