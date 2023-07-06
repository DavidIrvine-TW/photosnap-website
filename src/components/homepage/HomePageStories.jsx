import arrowWhite from "../../../public/assets/shared/desktop/arrow-white.svg";

function HomePageStories() {
  const baseUrl = "./assets/stories/desktop/";
  const imagePaths = [
    {
      id: 1,
      path: "mountains.jpg",
      title: "The Mountains",
      by: "John Applseed",
      date: "April 16th 2020",
    },
    {
      id: 2,
      path: "cityscapes.jpg",
      by: "Sarah Conner",
      title: "Sunset Cityscapes",
      date: "April 14th 2020",
    },
    {
      id: 3,
      path: "18-days-voyage.jpg",
      title: "18 Days Voyage",
      by: "John Appleseed",
      date: "April 11th 2020",
    },
    {
      id: 4,
      path: "architecturals.jpg",
      title: "Architecturals",
      by: "Benjamin Cruz",
      date: "April 9th 2020",
    },
  ];

  return (
    <article className="w-[375px] tablet:w-[768px] desktop:w-[1440px] tablet:flex tablet:flex-wrap mx-auto bg-gradient-to-r from-gradient1 to-gradient3 relative z-[-1]">
      {imagePaths.map((path, index) => (
        <div key={index} className="mx-auto relative cursor-pointer">
          <div
            id="img--container"
            className=" w-[375px] tablet:w-[384px] desktop:w-[360px]"
          >
            <img
              src={`${baseUrl}${path.path}`}
              alt={path.title}
              loading="lazy"
              className="relative z-[-10]  w-full "
            />
            <div className="absolute inset-0 bg-overlay z-[-9]" />
            <div className="absolute top-[350px] tablet:top-[390px] desktop:top-[360px] left-[32px] ">
              <p className="font-bold text-white text-h3 mb-[0.2rem]">
                {path.title}
              </p>
              <p className="mb-[1rem] text-white text-[0.8125rem]">
                by {path.by}
              </p>
              <hr className="mb-[1.25rem] border-t border-gray"></hr>
              <button className="hover:underline flex w-[310px] items-center justify-between font-bold text-white tracking-[2px]">
                READ STORY <img className="w-[42px] " src={arrowWhite} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}

export default HomePageStories;
