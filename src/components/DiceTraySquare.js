import React from 'react'
import DieSquare from './DieSquare'

export default function DiceTraySquare({x, y, children}) {
  const red = (x + y) % 2 === 1
  return <DieSquare red={red}>{children}</DieSquare>  
}
