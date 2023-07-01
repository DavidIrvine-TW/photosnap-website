import StoriesHero from "./StoriesHero"
import StoriesFeatured from "./StoriesFeatured"

function StoriesPageIndex() {
  return (
    <section id="stories--page" className='fade-in mx-auto'>
        <StoriesHero/>
        <StoriesFeatured/>
    </section>
  )
}

export default StoriesPageIndex