import React from 'react'
import Die from './Die'
import DieSquare from './DieSquare'

import { moveDie } from '../observations/observe'
import DiceTraySquare from './DiceTraySquare'

function renderDieSquare(i, [dieX, dieY]) {
  const x = i % 4
  const y = Math.floor(i/4)

  // const isDieHere = x === dieX && y === dieY
  // const red = (x + y) % 2 === 1
  // const piece = isDieHere ? <Die /> : null

  return (
    <div
      key={i}
      style={{ width: '25%', height: '25%' }}
    >
      <DiceTraySquare x={x} y={y}>
        {renderPiece(x, y, [dieX, dieY])}
      </DiceTraySquare>
    </div>
  )
}

function renderPiece(x, y, [dieX, dieY]) {
  if (x === dieX && y === dieY) {
    return <Die />
  }
}
// function handleSquareClick(toX, toY) {
//   moveDie(toX, toY)
// }

export default renderDieSquare
