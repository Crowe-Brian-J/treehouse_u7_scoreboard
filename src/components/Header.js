import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({ players, title }) => {
  // const { players, title } = props
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  )
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

// Use defaultProps, part of PropTypes, to set default values in case you forget to pass them
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header
