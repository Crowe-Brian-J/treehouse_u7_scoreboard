import React, { memo } from 'react'
import PropTypes from 'prop-types'

// import counter & icon components
import Counter from './Counter'
import Icon from './Icon'

const Player = ({ name, score, id, highScore, removePlayer, changeScore }) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        <Icon score={score} highScore={highScore} />
        {name}
      </span>

      <Counter score={score} id={id} changeScore={changeScore} />
    </div>
  )
}

//use to eliminate wasted renders as second argument in memo
const playerPropsAreEqual = (prevProps, nextProps) => {
  return (
    prevProps.score === nextProps.score &&
    prevProps.highScore === nextProps.highScore
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  highScore: PropTypes.number.isRequired,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func
}

export default memo(Player, playerPropsAreEqual)
