import arrowWhite from '../../assets/shared/desktop/arrow-white.svg'

function StoriesFeatured() {
  const baseUrl = "src/assets/stories/mobile/";
  const baseUrlDesk = "src/assets/stories/desktop/";

  const imgPaths = [
    {
      id: 1,
      path: "18-days-voyage.jpg",
      title: "18 Days Voyage",
      by: "John Appleseed",
      date: "April 11th 2020",
    },
    {
      id: 2,
      path: "architecturals.jpg",
      title: "Architecturals",
      by: "Benjamin Cruz",
      date: "April 9th 2020",
    },
    {
      id: 3,
      path: "behind-the-waves.jpg",
      title: "Behind The Waves",
      by: "Lammar Wilson",
      date: "March 11th 2020",
    },
    {
      id: 4,
      path: "calm-waters.jpg",
      title: "Calm Waters",
      by: "John Doe",
      date: "March 9th 2020",
    },
    {
      id: 5,
      path: "cityscapes.jpg",
      by: "Sarah Conner",
      title: "Sunset Cityscapes",
      date: "April 14th 2020",
    },
    {
      id: 6,
      path: "dark-forest.jpg",
      title: "Night at The Dark Forest",
      by: "Alexi Boradin",
      date: "March 4th 2020",
    },
    {
      id: 7,
      path: "land-of-dreams.jpg",
      title: "Land of Dreams",
      by: "William Keital",
      date: "February 25th 2020",
    },
    {
      id: 8,
      path: "milky-way.jpg",
      title: "The Milky Way",
      by: "Sammantha Brooke",
      date: "March 5th 2020",
    },
    {
      id: 10,
      path: "mountains.jpg",
      title: "The Mountains",
      by: "John Applseed",
      date: "April 16th 2020",
    },
    {
      id: 11,
      path: "rage-of-the-sea.jpg",
      title: "Rage of the Sea",
      by: " Mohammed Abdul",
      date: "March 19th 2020",
    },
    {
      id: 12,
      path: "running-free.jpg",
      title: "Running Free",
      by: "Michelle Brown",
      date: "March 16th 2020",
    },
    {
      id: 13,
      path: "somwarpet.jpg",
      title: "SomWarps Beauty",
      by: "Bobby",
      date: "March 1st 2020",
    },
    {
      id: 14,
      path: "trip-to-nowhere.jpg",
      title: "The Trip to Nowhere",
      by: "Felicia Rourke",
      date: "March 1st 2020",
    },
    {
      id: 15,
      path: "unforeseen-corners.jpg",
      title: "Unforseen Corners",
      by: "William Malcolm",
      date: "April 3rd 2020",
    },
    {
      id: 16,
      path: "world-tour.jpg",
      title: "World Tour 2019",
      by: "Timothy Wagner",
      date: "April 7th 2020",
    },
    {
      id: 17,
      path: "king-on-africa.jpg",
      title: "King of Africa: Part II",
      by: "Tim Heisenburgh",
      date: "March 29th 2020",
    },
  ];

  return (
    <article className="tablet:w-[768px] tablet:flex tablet:flex-wrap mx-auto bg-gradient-to-r from-gradient1 to-gradient3 relative z-[-1]">
      {imgPaths.map((path, index) => (
   
          <div id="img--container" key={index} className="relative cursor-pointer w-[375px] tablet:w-[384px]">
            <picture>
              <source srcSet={baseUrlDesk} media="(min-width: 1440px)" />
              <img
                src={`${baseUrlDesk}${path.path}`}
                alt={path.title}
                className="relative z-[-10] w-full"
              />
            </picture>

            <div className="absolute inset-0 bg-overlay z-[-9]" />
            <div className="absolute top-[350px] tablet:top-[390px]  left-[32px] ">
              <p className="font-bold text-white text-h3 mb-[0.2rem]">
                {path.title}
              </p>
              <p className="mb-[1rem] text-white text-[0.8125rem]">
                by {path.by}
              </p>
              <hr className="mb-[1.25rem] border-t border-gray"></hr>
              <button className="flex w-[310px] items-center justify-between font-bold text-[0.75rem] text-white tracking-[2px]">
                READ STORY <img className="w-[42px] " src={arrowWhite} />
              </button>
            </div>
         
          </div>

      
      ))}
    </article>
  );
}

export default StoriesFeatured;
