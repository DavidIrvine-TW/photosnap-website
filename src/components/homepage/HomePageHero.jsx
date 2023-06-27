import React from "react";
import imgOne from "../../assets/home/mobile/create-and-share.jpg";
import imgOneTab from "../../assets/home/tablet/create-and-share.jpg";
import imgOneDesk from "../../assets/home/desktop/create-and-share.jpg";
import imgTwo from "../../assets/home/mobile/beautiful-stories.jpg";
import imgTwoTab from "../../assets/home/tablet/beautiful-stories.jpg";
import imgTwoDesk from "../../assets/home/desktop/beautiful-stories.jpg";
import imgThree from "../../assets/home/mobile/designed-for-everyone.jpg";
import imgThreeTab from "../../assets/home/tablet/designed-for-everyone.jpg";
import imgThreeDesk from "../../assets/home/desktop/designed-for-everyone.jpg";
import arrow from "../../assets/shared/desktop/arrow-white.svg";

function HomePageHero() {
  return (
    <article className="grid grid-cols-1">
      <div id="img--one">
        <picture>
          <source srcSet={imgOneDesk} media="(min-width: 1440px)" />
          <source srcSet={imgOneTab} media="(min-width: 768px)" />
          <img src={imgOne} />
        </picture>
      </div>

      <div className="h-[419px] bg-black pl-[2rem] pr-[1.5rem] pt-[4.5rem] flex flex-col gap-[1rem]">
        <div>
          <h1 className="uppercase text-white text-h1-mb">
            Create and share your photo stories.{" "}
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
          <button className="text-[0.75rem] tracking-[2px] flex text-white items-center gap-[1rem]">
            GET AN INVITE
            <img className="w-[42px]" src={arrow} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default HomePageHero;
