
people/search/:letter
people/search/s

    var letter = props.match.params.letter

    var searchResults = people.filter((person) => {
      return person.lastName.split('')[0].toLowerCase() == letter
    })
