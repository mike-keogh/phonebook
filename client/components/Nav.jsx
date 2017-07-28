import React from 'react'

import {Link} from 'react-router-dom'

// const alphabet = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ]

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const Nav = () => {
  return (
    <div className='navBar'>
      <ul>
        {alphabet.toUpperCase().split('').map((letter, i) => <li>{letter}</li>)}
      </ul>
    </div>
  )
}

export default Nav
