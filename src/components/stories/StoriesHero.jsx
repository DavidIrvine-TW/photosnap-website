
import heroImg from "../../../public/assets/stories/mobile/moon-of-appalacia.jpg";
import heroImgDesk from "../../../public/assets/stories/desktop/moon-of-appalacia.jpg";
import arrow from "../../../public/assets/shared/desktop/arrow-white.svg";

function StoriesHero() {


  const appalacia = [
    {
      id: 9,
      path: "moon-of-appalacia.jpg",
      title: "Hazy Full Moon of Appalachia",
      by: "John Appleseed",
      date: "March 2nd 2020",
      content:
        "The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains', especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
    },
  ];

  return (
    <article className="relative z-[-10] w-[375px] tablet:w-[768px] desktop:w-[1440px]">
      {appalacia.map((img, index) => (
        <div key={index} className="relative">
          <div>
            <picture>
              <source srcSet={heroImgDesk} media="(min-width: 1440px)" />
              <img src={heroImg} />
            </picture>
          </div>

          <div className="bg-black px-[2rem] py-[3rem] tablet:w-[387px] tablet:absolute tablet:bg-transparent top-[65px] desktop:left-[85px]">
            <p className="text-white font-bold mb-[1rem] tracking-[2px] tablet:mb-[1.5rem]">
              LAST MONTH’S FEATURED STORY
            </p>
            <h1 className="text-white text-h1-mb tablet:text-h1 mb-[1rem]">
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <div className="flex text-white gap-[0.5rem] mb-[1.5rem]">
              <p className="text-[0.8125] text-gray opacity-[0.6]">
                {img.date}
              </p>
              <p>by {img.by}</p>
            </div>
            <div className="text-gray opacity-[0.6] mb-[1.5rem] text-justify">
              <p>{img.content}</p>
            </div>
            <button className="hover:underline font-bold text-white text-h4 tracking-[2px] flex items-center justify-between w-[200px] relative z-[10000]">
              READ THE STORY
              <img className="w-[42px]" src={arrow} />
            </button>
          </div>
        </div>
      ))}
    </article>
  );
}

export default StoriesHero;
