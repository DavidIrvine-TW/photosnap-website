import featureOne from "../../../public/assets/features/desktop/responsive.svg";
import featureTwo from "../../../public/assets/features/desktop/no-limit.svg";
import featureThree from "../../../public/assets/features/desktop/embed.svg";
import featureFour from "../../../public/assets/features/desktop/custom-domain.svg";
import featureFive from "../../../public/assets/features/desktop/boost-exposure.svg";
import featureSix from "../../../public/assets/features/desktop/drag-drop.svg";

function FeaturesFeatures() {
  return (
    <section className="py-[5rem] px-[2rem] tablet:flex tablet:flex-wrap gap-[1rem] tablet:px-[1.6rem] desktop:w-[1440px] desktop:py-[10rem] desktop:px-[10.3rem] desktop:gap-[2.7rem]">

      <div className="w-full text-center mb-[3.5rem] tablet:w-[340px] desktop:mb-[0px]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureOne} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">100% responsive</h4>
        <p className="mx-auto  text-body">
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>

      <div className="w-full text-center mb-[3.5rem] tablet:w-[340px] desktop:mb-[0px]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureTwo} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">No Photo Upload Limit</h4>
        <p className="mx-auto text-body ">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>

      <div className="w-full text-center mb-[3.5rem] tablet:w-[340px] desktop:mb-[0px]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureThree} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">Available to Embed</h4>
        <p className="mx-auto text-body ">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>

      <div className="w-full text-center mb-[3.5rem] tablet:w-[340px] desktop:mb-[0px]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureFour} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">Custom Domain</h4>
        <p className="mx-auto text-body ">
          With Photosnap subscriptions you can host your stories on your own
          domain. You can also remove our branding!
        </p>
      </div>

      <div className="w-full text-center mb-[3.5rem] tablet:w-[340px] desktop:mb-[0px]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureFive} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">Boost Your Exposure</h4>
        <p className="mx-auto text-body ">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>

      <div className="w-full text-center tablet:w-[340px] desktop:mb-[0px]">
        <div className="w-[72px] h-[72px] mx-auto mb-[3rem]">
          <img src={featureSix} />
        </div>
        <h4 className="mx-auto mb-[1rem] text-h3">Drag & Drop Image</h4>
        <p className="mx-auto text-body ">
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </p>
      </div>
    </section>
  );
}

export default FeaturesFeatures;
