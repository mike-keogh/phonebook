import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Names from './Names'

const App = () => {
  return (
    <div>
      <Header />
      <Names/>
      
      <Footer />

    </div>
  )
}

export default App
// path='/names/:letter' component={Names}
