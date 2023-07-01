import React from "react";
import PricingSwitch from "./PricingSwitch";
import PictureCard from "./PictureCard"

function PricingPageOptions({pricingHandler, billing}) {

  const active = billing === 'per month' ? '' : 'text-gray'
  const activeYear = billing === 'per month' ? 'text-gray' : ''

  return (
    <article className="relative px-[1.8rem] py-[4rem] tablet:pt-[7rem] tablet:pb-[2.5rem] desktop:mb-[5.5rem]">
      <div className="flex justify-between w-[255px] items-center mx-auto gap-[2rem] text-h3">
        <div>
          <p className={`${active} tracking-[2px]`} >Monthly</p>
        </div>
        <div>
          <PricingSwitch pricingHandler={pricingHandler} billing={billing} />
        </div>
        <div>
          <p className={`${activeYear} tracking-[2px]`} >Yearly</p>
        </div>
      </div>
    </article>
  );
}

export default PricingPageOptions;
