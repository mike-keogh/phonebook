import React from 'react'
import names from '../../data/names.js'
import {Link} from 'react-router-dom'


export default function(props) {
  const letter = props.match.params.letter

  return (
    <div className="letters">
      <h1>{letter}</h1>
      <ul>
        var searchResults = names.filter((lastname) => {
          return lastname.split('')[0].toLowerCase() == this.letter
          <li> {this.firstname + " " + this.lastname}</li>
        })
      </ul>
    </div>

  )
}
//<Link to='/rank/:rank/:name'>{rankObject.name}</Link>
