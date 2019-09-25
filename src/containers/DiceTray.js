import React from 'react'
// import Die from '../components/Die'
// import DieSquare from '../components/DieSquare'
import RenderDieSquare from '../components/RenderDieSquare'

function DiceTray({ diePosition }) {
  const squares = []

  for (let i = 0; i < 4; i++) {
    squares.push(RenderDieSquare(i, diePosition))
  }
  console.log(squares)
  return(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}

export default DiceTray
