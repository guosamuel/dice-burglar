// import React from 'react'
import Die from '../components/Die'
import DieSquare from '../components/DieSquare'

function renderDieSquare(i, [dieX, dieY]) {
  const x = i % 3
  const y = Math.floor(i/3)
  const isDieHere = x === dieX && y === dieY
  const red = (x + y) % 2 === 1
  const piece = isDieHere ? <Die /> : null

  return (
    <div key={i} style={{ width: '33.3%', height: '33.3%' }}>
      <DieSquare red={red}>{piece}</DieSquare>
    </div>
}

function DiceTray(diePosition)  {
  render() {
    return (
      <div>
        renderDieSquare(0, 1, {diePosition})
      </div>
    )
  }
}

export default DiceTray
