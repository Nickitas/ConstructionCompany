import React, { useState } from 'react'

import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Works from './components/Works/Works'
import Reviews from './components/Reviews/Reviews'
import About from './components/About/About'
import TypesOfJobs from './components/TypesOfJobs/TypesOfJobs'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

import { cardsData, 
  reviewsData, 
  aboutData, 
  typesOfJobsData 
} from './components/data'

const App = () => {

  const [openPage, setOpenPage] = useState('main')

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Works data={cardsData}/>
      <Reviews data={reviewsData}/>
      <About data={aboutData}/>
      <TypesOfJobs data={typesOfJobsData} />
      <Contacts />
      <Footer/>
    </div>
  )
}

export default App