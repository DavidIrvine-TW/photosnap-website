import featureOne from "../../assets/features/desktop/responsive.svg";
import featureTwo from "../../assets/features/desktop/no-limit.svg";
import featureThree from "../../assets/features/desktop/embed.svg";

function HomePageFeatures() {
  return (
    <section className="py-[5rem] px-[2rem] desktop:px-[10.3125rem] desktop:py-[7.5rem] desktop:flex gap-[2rem]">
      <div className="w-full text-center mb-[3.5rem] tablet:w-[457px] mx-auto desktop:mb-[0]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureOne} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">100% responsive</h4>
        <p className="mx-auto text-body">
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>

      <div className="w-full text-center mb-[3.5rem] tablet:w-[457px] mx-auto desktop:mb-[0]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureTwo} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">No Photo Upload Limit</h4>
        <p className="mx-auto text-body ">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>

      <div className="w-full text-center mb-[3.5rem] tablet:w-[457px] mx-auto desktop:mb-[0]">
        <div className="w-[72px] h-[72px]  mx-auto mb-[3rem]">
          <img src={featureThree} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">Available to Embed</h4>
        <p className="mx-auto text-body ">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>
    </section>
  );
}

export default HomePageFeatures;
