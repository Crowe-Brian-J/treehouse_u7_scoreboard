import React, { memo } from 'react'
import PropTypes from 'prop-types'

// import counter component
import Counter from './Counter'

const Player = (props) => {
  return (
    <div className="player">
      {console.log(props.name + ' rendered.')}
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}
      />
    </div>
  )
}

//use to eliminate wasted renders as second argument in memo
const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func
}

export default memo(Player, playerPropsAreEqual)
