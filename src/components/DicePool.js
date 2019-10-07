import React from 'react'
import DiceTray from '../containers/DiceTray'
import { Grid } from 'semantic-ui-react'

class DicePool extends React.Component {
  render() {
    return (
      <div>
      <Grid textAlign='center' columns={1} celled={true} style={{height: '25vh'}}>
        <Grid.Row style={{height: '10%'}}>
          All dice go in here.
        </Grid.Row>
        <Grid.Row style={{height: '90%'}}>
          <DiceTray diePosition={this.props.observingDiePosition} />
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default DicePool
