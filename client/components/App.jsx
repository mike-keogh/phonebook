import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import {HashRouter as Router, Route} from 'react-router-dom'
import Names from './Names'

const App = () => {
  return (
  <div>
    <Header />
    <div className='container'>
      <Router>
        <Route path='/' component={Nav} />
      </Router>
      <Names/>
      {/* <Names path='/names/:letter' component={Names}/> */}
    </div>
    <Footer />
  </div>
  )
}

export default App

// <Names path='/names/:letter' component={Names}/>
