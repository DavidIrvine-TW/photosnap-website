import React from "react";

function PictureCard({ card }) {
  return (
    <article
      className={`pt-[3.5rem] pb-[2.5rem] 
      px-[1rem] text-center mx-auto w-[318px] mb-[1.5rem] 
      ${card.cardStyle} tablet:w-[689px] tablet:flex tablet:pt-[2.5rem] tablet:px-[2.5rem]`}
    >
      <div className="mx-auto flex flex-col tablet:hidden">
        <p className={`text-h2 ${card.titleStyle} mb-[1rem]`}>{card.title}</p>
        <p className={`mb-[2.5rem] ${card.contentStyle} opacity-[0.6]`}>
          {card.content}
        </p>
        <span className={`text-h1 ${card.priceStyle} tracking-[4.167px]`}>
          ${card.price}
        </span>
        <span className={`text-body opacity-[0.6] ${card.planStyle}`}>
          {card.plan}
        </span>
      </div>

      <div className="hidden tablet:inline-flex w-[270px] justify-between ">
        <div>
          <div className="text-left">
            <p className={`text-h2 ${card.titleStyle} mb-[1rem]`}>
              {card.title}
            </p>
            <p className={`mb-[2.5rem] ${card.contentStyle} opacity-[0.6]`}>
              {card.content}
            </p>
          </div>
          <div className=" h-[40px] mt-[2.5rem] tablet:block w-full">
            <button
              className={`${card.buttonStyle} text-[0.75rem] w-full h-full tracking-[2px] '`}
            >
              PICK PLAN
            </button>
          </div>
        </div>

        <div className="px-[2rem] h-[40px] mt-[2.5rem] tablet:hidden">
          <button
            className={`${card.buttonStyle} text-[0.75rem] w-full h-full tracking-[2px]'`}
          >
            PICK PLAN
          </button>
        </div>
      </div>

      <div className="flex-col ml-auto hidden tablet:inline-flex ">
        <p className={`text-h1 ${card.priceStyle} tracking-[4.167px]`}>
          ${card.price}
        </p>
        <p className={`text-body opacity-[0.6] ${card.planStyle} ml-auto`}>
          {card.plan}
        </p>
      </div>

      <div className="px-[2rem] h-[40px] mt-[2.5rem] tablet:hidden">
        <button
          className={`${card.buttonStyle} text-[0.75rem] w-full h-full tracking-[2px]'`}
        >
          PICK PLAN
        </button>
      </div>
    </article>
  );
}

export default PictureCard;
