import React from 'react'

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const Nav = () => {
  return (
    <div>
      <ul>
        <li>{alphabet.map(letter, i) => letter}</li>
      </ul>
    </div>
  )
}

export default Nav
