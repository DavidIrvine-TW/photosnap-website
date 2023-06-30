import React from "react";
import PricingSwitch from "../UI/PricingSwitch";
import PictureCard from "../UI/PictureCard"

function PricingPageOptions() {
  return (
    <article className="px-[1.8rem] py-[4rem] tablet:pt-[7rem] tablet:pb-[2.5rem]">
      <div className="flex justify-between w-[255px] items-center mx-auto gap-[2rem] font-bold text-h3">
        <div>
          <p>Monthly</p>
        </div>
        <div>
          <PricingSwitch />
        </div>
        <div>
          <p>Yearly</p>
        </div>
      </div>
    </article>
  );
}

export default PricingPageOptions;
