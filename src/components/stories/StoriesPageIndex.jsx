import StoriesHero from "./StoriesHero"
import StoriesFeatured from "./StoriesFeatured"

function StoriesPageIndex() {
  return (
    <section className='fade-in'>
        <StoriesHero/>
        <StoriesFeatured/>
    </section>
  )
}

export default StoriesPageIndex