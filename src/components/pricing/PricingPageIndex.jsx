
import PricingPageHero from './PricingPageHero';
import PricingPageOptions from './PricingPageOptions';
import PictureCard from '../UI/PictureCard';
import FeaturesFooterHero from '../features/FeaturesFooterHero';
import PricingPageTable from './PricingPageTable';


function PricingPageIndex() {


  const priceCards = [{
    id: 1, 
    title: 'Basic',
    content: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    price: '19.00',
    plan: 'per month',
    cardStyle: 'bg-vlgray',
    titleStyle: '',
    buttonStyle: 'bg-black text-white'
  }, {
    id: 2,
    title: 'Pro',
    content: 'More advanced features available. Recommended for photography veterans and professionals.',
    price: '39.00',
    plan: 'per month',
    cardStyle: 'bg-black',
    buttonStyle: 'bg-white text-black',
    titleStyle: 'text-white',
    contentStyle : 'text-white',
    priceStyle: 'text-white',
    planStyle: 'text-white'
  }, {
    id: 3,
    title: 'Business',
    content: 'Additional features available such as more detailed metrics. Recommended for business owners.',
    price: '99.00',
    plan: 'per month',
    cardStyle: 'bg-vlgray',
    buttonStyle: 'bg-black text-white'
  }]



  return (
    <section className='fade-in'>
        <PricingPageHero/>
        <PricingPageOptions/>
        {priceCards.map((card, index) => (
          <PictureCard key={index} card={card}/>
        ))}
        <PricingPageTable/>
        <FeaturesFooterHero/>
        
        
      
    </section>
  )
}

export default PricingPageIndex