import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MobileMenu from "./components/mobile/MobileMenu";
import HomePageIndex from "./components/homepage/HomePageIndex";
import Footer from "./components/footer/Footer";
import FooterTablet from "./components/footer/FooterTablet";
import FooterDesktop from "./components/footer/FooterDesktop";
import StoriesPageIndex from "./components/stories/StoriesPageIndex";
import FeaturesPageIndex from "./components/features/FeaturesPageIndex";
import PricingPageIndex from "./components/pricing/PricingPageIndex";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerMenuHandler = () => {
    setBurgerMenu((prev) => !prev);
    console.log("clicked");
  };

  // return to top of each page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="wrapper" className="overflow-hidden w-[375px] tablet:w-[768px] desktop:w-[1440px] mx-auto ">
      <Header burgerMenuHandler={burgerMenuHandler} burgerMenu={burgerMenu} />
      <MobileMenu
        burgerMenu={burgerMenu}
        burgerMenuHandler={burgerMenuHandler}
      />
      <main className="border-r-2 border-gray overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePageIndex />}/>
          <Route path="/stories" element={<StoriesPageIndex />} />
          <Route path="/features" element={<FeaturesPageIndex />} />
          <Route path="/pricing" element={<PricingPageIndex />} />
        </Routes>
      </main>
      <Footer scrollToTop={scrollToTop} />
      <FooterTablet scrollToTop={scrollToTop}/>
      <FooterDesktop scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
