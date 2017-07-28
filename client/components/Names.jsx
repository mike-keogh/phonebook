import React from 'react'

import alphabet from '../../data/alphabet.js'
import {Link} from 'react-router-dom'


export default function(props) {

  const letter = props.match.params.letter
  //console.log(letter)
  let person = alphabet.filter((person) => {
    return person.lastname.split('')[0].toUpperCase() == letter
  })
  //console.log(person)
  return (
    <div className="Details">
      <ul>
         { person.map((person) => (<li>{person.firstname +` `+  person.lastname +` `+  person.address +` `+  person.phone}</li>)) }


      </ul>
      <h1></h1>
    </div>
  )
 }
