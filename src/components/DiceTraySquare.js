import React from 'react'
import DieSquare from './DieSquare'
import { ItemTypes } from '../constants/constants'
import { canMoveDie, moveDie } from '../observations/observe'
import { useDrop } from 'react-dnd'

export default function DiceTraySquare({x, y, children}) {
  const red = (x + y) % 2 === 1

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.DIE,
    canDrop: () => canMoveDie(x, y),
    drop: () => moveDie(x, y),
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  })

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <DieSquare red={red}>{children}</DieSquare>
      {isOver &&
        (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: 'yellow',
            }}
          />
        )
      }
    </div>
  )
}
