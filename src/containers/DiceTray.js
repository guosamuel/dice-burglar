import React from 'react'
import Die from '../components/Die'
import DieSquare from '../components/DieSquare'

function renderDieSquare(i, [dieX, dieY]) {
  const x = i % 4
  const y = Math.floor(i/4)
  const isDieHere = x === dieX && y === dieY
  const red = (x + y) % 2 === 1
  const piece = isDieHere ? <Die /> : null

  return (
    <div key={i} style={{ width: '25%', height: '25%' }}>
      <DieSquare red={red}>{piece}</DieSquare>
    </div>
  )
}

function DiceTray({ diePosition }) {
  const squares = []

  for (let i = 0; i < 16; i++) {
    squares.push(renderDieSquare(i, diePosition))
  }

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
