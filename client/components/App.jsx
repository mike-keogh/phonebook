import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
// import Names from './Names'

const App = () => {
  return (
    <div>
      <Header />
      <Router>
      <Route component={Nav}/ ></Route>
      </Router>
      <Footer />
      {/* <Names path='/names/:letter' component={Names}/> */}
    </div>
  )
}

export default App

// <Names path='/names/:letter' component={Names}/>
