import arrowWhite from "../../assets/shared/desktop/arrow-white.svg";
import imgPaths from './imgPaths.js'

function StoriesFeatured() {
  const baseUrl = "src/assets/stories/mobile/";
  const baseUrlDesk = "src/assets/stories/desktop/";

  return (
    <article className="tablet:w-[768px] tablet:flex tablet:flex-wrap desktop:w-[1440px] mx-auto bg-gradient-to-r from-gradient1 to-gradient3 relative z-[-1]">
      {imgPaths.map((path, index) => (
        <div
          id="img--container"
          key={index}
          className="relative cursor-pointer w-[375px] tablet:w-[384px] desktop:w-[360px]"
        >
          <picture>
            <img
              loading="lazy"
              src={`${baseUrlDesk}${path.path}`}
              alt={path.title}
              className="relative z-[-10] w-full"
            />
          </picture>

          <div className="absolute inset-0 bg-overlay z-[-9]" />
          <div className="absolute top-[350px] tablet:top-[390px] left-[32px] right-[32px] desktop:top-[360px] ">
            <p className="font-bold text-white text-h3 mb-[0.2rem]">
              {path.title}
            </p>
            <p className="mb-[1rem] text-white text-[0.8125rem]">
              by {path.by}
            </p>
            <hr className="mb-[1.25rem] border-t border-gray"></hr>
            <div className="flex justify-between"> 
              <button className="hover:underline flex items-center justify-between font-bold text-[0.75rem] text-white tracking-[2px]">
                READ STORY 
              </button>
              <img className="w-[42px] " src={arrowWhite} />
            </div>
            
          </div>
        </div>
      ))}
    </article>
  );
}

export default StoriesFeatured;
