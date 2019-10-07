import React from 'react'
import { Grid } from 'semantic-ui-react'
import DiceTray from './DiceTray'
import { observe } from '../observations/observe'

class BurglarContainer extends React.Component {
  render() {
    return (
      <div>
        <Grid textAlign='center' columns={1} celled={true} style={{height: '25vh'}}>
          <Grid.Row style={{height: '10%'}}>
            Burglar Name
          </Grid.Row>
          <Grid.Row style={{height: '25%'}}>
            Score: 0/20
          </Grid.Row>
          <Grid.Row style={{height: '10%'}}>
            Current Dice
          </Grid.Row>
          <Grid.Row style={{height: '55%'}}>
            observe(diePosition => (<DiceTray diePosition={diePosition} />)
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default BurglarContainer
