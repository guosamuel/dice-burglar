import React from 'react'
import Die from '../components/Die'
import DieSquare from '../components/DieSquare'

class DiceTray extends React.Component {
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
