import { BrowserRouter } from "react-router-dom"
import { Contact,Hero, Navbar, Tech, Works,  } from './components'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Tech />
          <Works />
          <Contact />
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App
