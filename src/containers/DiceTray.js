// import React from 'react'
import Die from '../components/Die'
import DieSquare from '../components/DieSquare'

function renderDieSquare(x, y, [dieX, dieY]) {
  const x = i % 2
  const y = Math.floor(i/2)
  const isDieHere = x === dieX && y === dieY
  const red = (x + y) % 2 === 1
  const piece = isDieHere ? <Die /> : null

  return <DieSquare red={red}>{piece}</DieSqaure>
}

function DiceTray  {
  render() {
    return (
      <div>
        <DieSquare red>
          <Die />
        </DieSquare>
      </div>
    )
  }
}

export default DiceTray
