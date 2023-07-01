import tick from "../../assets/pricing/desktop/check.svg";

function PricingPageTableTab() {
  return (
    <article className="uppercase font-bold tracking-[2px] text-[0.75rem] hidden tablet:block desktop:w-[1440px] desktop:px-[22.1875rem]">
        {/* headers */}
        <div className="flex gap-[6.5rem] items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>The Features</p>
            </div>
            <div className="flex">
                <p className="w-[140px] text-center">basic</p>
                <p className="w-[140px]  text-center">pro</p>
                <p className="w-[140px]  text-center">buisness</p>
            </div>
        </div>
        {/* rows */}
        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>unlimited story posting</p>
            </div>
            <div className="flex">
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>

        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>unlimited photo upload</p>
            </div>
            <div className="flex">
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>


        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>embedding custom content</p>
            </div>
            <div className="flex">
                
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>


        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>customize metadata</p>
            </div>
            <div className="flex">
               
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>


        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>advanced metrics</p>
            </div>
            <div className="flex">
                
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>


        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>photo downloads</p>
            </div>
            <div className="flex">
               
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>

        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>search engine indexing</p>
            </div>
            <div className="flex">
              
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>

        <div className="flex w-full items-center justify-between border-b border-gray p-[1.5rem]">
            <div>
                <p>custom analytics</p>
            </div>
            <div className="flex">
             
                <p className="w-[140px] flex justify-center"><img src={tick}/></p>
            </div>
        </div>
    </article>
  )
}

export default PricingPageTableTab