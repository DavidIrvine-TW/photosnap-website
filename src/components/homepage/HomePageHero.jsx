import imgOne from "../../assets/home/mobile/create-and-share.jpg";
import imgOneTab from "../../assets/home/tablet/create-and-share.jpg";
import imgOneDesk from "../../assets/home/desktop/create-and-share.jpg";
import imgTwo from "../../assets/home/mobile/beautiful-stories.jpg";
import imgTwoTab from "../../assets/home/tablet/beautiful-stories.jpg";
import imgTwoDesk from "../../assets/home/desktop/beautiful-stories.jpg";
import imgThree from "../../assets/home/mobile/designed-for-everyone.jpg";
import imgThreeTab from "../../assets/home/tablet/designed-for-everyone.jpg";
import imgThreeDesk from "../../assets/home/desktop/designed-for-everyone.jpg";
import arrowWhite from "../../assets/shared/desktop/arrow-white.svg";
import arrow from "../../assets/shared/desktop/arrow.svg";

function HomePageHero() {
  return (
    <article className="grid grid-cols-1 mx-auto w-[375px] tablet:w-[768px] desktop:w-[1440px]">
      <div className="tablet:flex tablet:flex-row-reverse">
        <div id="img--one">
          <picture>
            <source srcSet={imgOneDesk} media="(min-width: 1440px)" />
            <source srcSet={imgOneTab} media="(min-width: 768px)" />
            <img src={imgOne} />
          </picture>
        </div>

        <div
          id="img--one--content"
          className=" bg-black pl-[2rem] pr-[1.5rem] py-[4.5rem] flex flex-col gap-[1rem] tablet:w-[495px] tablet:py-[10.5rem] tablet:px-[3.375rem] desktop:w-[610px] desktop:px-[6.875rem]"
        >
          <div>
            <h1 className="uppercase text-white text-h1-mb tablet:text-h1">
              Create and share your photo stories.
            </h1>
          </div>

          <div className="mb-[1.5rem]">
            <p className="text-gray text-body opacity-[0.6]">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </div>

          <div>
            <button className="hover:underline text-[0.75rem] tracking-[2px] flex text-white items-center gap-[1rem] font-bold">
              GET AN INVITE
              <img className="w-[42px]" src={arrowWhite} />
            </button>
          </div>
        </div>
      </div>

      {/* two */}
      <div className="tablet:flex">
        <div id="img--two">
          <picture>
            <source srcSet={imgTwoDesk} media="(min-width: 1440px)" />
            <source srcSet={imgTwoTab} media="(min-width: 768px)" />
            <img src={imgTwo} />
          </picture>
        </div>

        <div
          id="img--two--content"
          className=" bg-white pl-[2rem] pr-[1.5rem] py-[4.5rem] flex flex-col gap-[1rem] tablet:w-[495px] desktop:w-[610px] tablet:py-[8.5rem] tablet:px-[3.375rem] desktop:px-[6.875rem]"
        >
          <div>
            <h1 className="uppercase text-black text-h1-mb tablet:text-h1 desktop:w-[387px]">
              Beautiful stories every time.
            </h1>
          </div>

          <div className="mb-[1.5rem]">
            <p className="text-black text-body ">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
          </div>

          <div>
            <button className="hover:underline text-[0.75rem] tracking-[2px] flex text-black items-center gap-[1rem] font-bold">
              VIEW THE STORIES
              <img className="w-[42px]" src={arrow} />
            </button>
          </div>
        </div>
      </div>

      {/* three */}
      <div className="tablet:flex tablet:flex-row-reverse">
        <div id="img--three">
          <picture>
            <source srcSet={imgThreeDesk} media="(min-width: 1440px)" />
            <source srcSet={imgThreeTab} media="(min-width: 768px)" />
            <img src={imgThree} />
          </picture>
        </div>

        <div
          id="img--three--content"
          className=" bg-white pl-[2rem] pr-[1.5rem] py-[4.5rem] flex flex-col gap-[1rem] tablet:w-[495px] desktop:w-[610px] tablet:py-[8.5rem] tablet:px-[3.375rem] desktop:px-[7rem] desktop:py-[10rem] "
        >
          <div>
            <h1 className="uppercase text-black text-h1-mb tablet:text-h1">
              Designed for everyone.
            </h1>
          </div>

          <div className="mb-[1.5rem]">
            <p className="text-black text-body ">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
          </div>

          <div>
            <button className="hover:underline text-[0.75rem] tracking-[2px] flex text-black items-center gap-[1rem] font-bold">
              VIEW THE STORIES
              <img className="w-[42px]" src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomePageHero;
