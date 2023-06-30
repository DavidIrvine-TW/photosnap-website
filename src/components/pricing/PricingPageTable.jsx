import PricingPageTableTab from "./PricingPageTableTab";
import tick from "../../assets/pricing/desktop/check.svg";

function PricingPageTable() {
  return (
    <article className="px-[2rem] text-[0.75rem] uppercase tracking-[1.7px] pb-[4rem] tablet:pb-[7rem]">
      <h2 className="mx-auto text-h1 mt-[7rem] mb-[6.5rem] text-center ">
        COMPARE
      </h2>

      <PricingPageTableTab />

      <div className="tablet:hidden">
        <div className="border-b mb-[1.5rem]">
          <h3 className="uppercase mb-[1.5rem] font-bold tracking-[2px]">
            The features
          </h3>
        </div>

        <div className="border-b border-gray">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            unlimited story posting
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray ">
            <div className="flex flex-col justify-center">
              Basic <img className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            unlimited photo upload
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            Embedding custom content
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            Customize metadata
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            advanced metrics
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            photo downloads
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            search engine indexing
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray mt-[1.5rem]">
          <h4 className=" font-bold tracking-[2px] mb-[1rem]">
            custom analytics
          </h4>
          <div className=" flex justify-between gap-[4.375rem] mb-[1.5rem] w-[80%] font-bold text-gray">
            <div className="flex flex-col justify-center">
              Basic <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Pro <img id="checkmark" className="w-[16px]" src={tick} />
            </div>
            <div>
              Business <img className="w-[16px]" src={tick} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PricingPageTable;
