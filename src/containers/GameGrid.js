import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import BurglarContainer from '../containers/BurglarContainer'
import DicePool from '../components/DicePool.js'

class GameGrid extends React.Component {
  render() {
    return (
      <div>
      <Grid columns={3} celled={true} style={{height: '100vh'}}>
        <Grid.Row style={{height: '33%'}}>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '33%'}}>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
          <Grid.Column verticalAlign='center'>
            <DicePool />
          </Grid.Column>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '33%'}}>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
          <Grid.Column verticalAlign='center'>
            <BurglarContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default GameGrid
