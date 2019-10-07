import React from 'react'

import { ItemTypes } from '../constants/constants'
import { useDrag } from 'react-dnd'

function Die() {
  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.DIE },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}
    >
      ⚄
    </div>
  )
}

export default Die
