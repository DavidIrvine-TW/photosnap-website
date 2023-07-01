import PricingPageHero from "./PricingPageHero";
import PricingPageOptions from "./PricingPageOptions";
import PictureCard from "./PictureCard";
import FeaturesFooterHero from "../features/FeaturesFooterHero";
import PricingPageTable from "./PricingPageTable";
import { useState } from "react";

function PricingPageIndex() {
  const [basic, setBasic] = useState("19.00");
  const [pro, setPro] = useState("39.00");
  const [business, setbusiness] = useState("99.00");
  const [billing, setBilling] = useState("per month");

  const pricingHandler = () => {
    setBasic(basic === "19.00" ? "39.00" : "19.00");
    setPro(pro === "39.00" ? "390.00" : "39.00");
    setbusiness(business === "99.00" ? "990.00" : "99.00");
    setBilling(billing === "per month" ? "per year" : "per month");
  };
  const priceCards = {
    Basic: {
      title: "Basic",
      content:
        "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      price: basic,
      plan: billing,
      cardStyle: "bg-vlgray desktop:w-[350px] desktop:h-[407px]",
      titleStyle: "",
      buttonStyle: "bg-black text-white hover:bg-gray hover:text-black",
    },
    Pro: {
      title: "Pro",
      content:
        "More advanced features available. Recommended for photography veterans and professionals.",
      price: pro,
      plan: billing,
      cardStyle: "bg-black desktop:w-[350px] desktop:h-[470px] desktop:relative desktop:top-[-32px] desktop:pt-[4.5rem]",
      buttonStyle: "bg-white text-black hover:bg-black hover:text-white",
      titleStyle: "text-white",
      contentStyle: "text-white",
      priceStyle: "text-white",
      planStyle: "text-white",
    },
    Business: {
      title: "Business",
      content:
        "Additional features available such as more detailed metrics. Recommended for business owners.",
      price: business,
      plan: billing,
      cardStyle: "bg-vlgray desktop:w-[350px] desktop:h-[407px]",
      buttonStyle: "bg-black text-white hover:bg-gray hover:text-black",
    },
  };

  return (
    <section id="pricing--page" className="fade-in mx-auto">
      <PricingPageHero />
      <PricingPageOptions pricingHandler={pricingHandler} billing={billing} />
      <div className="desktop:w-[1440px] desktop:px-[10.3125rem] desktop:flex gap-[2rem]">
        {Object.keys(priceCards).map((key) => (
          <PictureCard
            key={key}
            card={priceCards[key]}
            basic={basic}
            pro={pro}
            business={business}
            billing={billing}
          />
        ))}
      </div>
      <PricingPageTable />
      <FeaturesFooterHero />
    </section>
  );
}

export default PricingPageIndex;
