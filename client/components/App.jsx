import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Footer />
      <Names path='/names/:letter' component={Names}/>
    </div>
  )
}

export default App
