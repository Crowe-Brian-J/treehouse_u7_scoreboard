import React from 'react'

const Counter = (props) => {
  /*   const incrementScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  const decrementScore = () => {
    setScore((prevScore) => prevScore - 1)
  }
 */
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        //        onClick={() => decrementScore()}
      >
        {' '}
        -{' '}
      </button>
      <span className="counter-score">{props.score}</span>
      <button
        className="counter-action increment"
        //        onClick={() => incrementScore()}
      >
        {' '}
        +{' '}
      </button>
    </div>
  )
}

export default Counter
