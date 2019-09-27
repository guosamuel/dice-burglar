import React from 'react'
import DiceTray from '../containers/DiceTray'

class DicePool extends React.Component {
  render() {
    return (
      <div>
        All dice go in here
        <DiceTray diePosition={[0,0]}/>
      </div>
    )
  }
}

export default DicePool
