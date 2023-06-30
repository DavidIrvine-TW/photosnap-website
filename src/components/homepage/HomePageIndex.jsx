import HomePageHero from "./HomePageHero";
import HomePageStories from "./HomePageStories";
import HomePageFeatures from "./HomePageFeatures";



function HomePageIndex() {
  return (
    <section id="home--page" className="fade-in mx-auto">
      <HomePageHero/>
      <HomePageStories/>
      <HomePageFeatures/>
    </section>
  )
}

export default HomePageIndex