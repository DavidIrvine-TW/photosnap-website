import {useState} from 'react'
import Header from "./components/header/Header"
import MobileMenu from './components/mobile/MobileMenu'
import HomePageIndex from './components/homepage/HomePageIndex';

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false)

  const burgerMenuHandler = () => {
    setBurgerMenu((prev) => !prev)
    console.log('clicked')
  }

  return (
    <div id="wrapper" className='overflow-hidden'>
      <Header burgerMenuHandler={burgerMenuHandler} burgerMenu={burgerMenu}/>
      <MobileMenu burgerMenu={burgerMenu}/>
      <main>
        <HomePageIndex/>

      </main>




    </div>
    
   
  )
}

export default App
