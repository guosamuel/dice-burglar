import React from 'react'
import Die from '../components/Die'

class DiceTray extends React.Component {
  render() {
    return (
      <div style={{
        backgroundColor: 'red'
      }}>
        <Die />
      </div>
    )
  }
}

export default DiceTray
