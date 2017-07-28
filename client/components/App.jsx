import React from 'react'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <Names path='/names/:letter' component={Names}/>
    </div>
  )
}

export default App
