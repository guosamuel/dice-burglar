import React from 'react'
import Die from './Die'
import DieSquare from './DieSquare'

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

export default renderDieSquare
