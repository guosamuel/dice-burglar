import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import BurglarContainer from '../containers/BurglarContainer'
import DicePool from '../components/DicePool.js'

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class GameGrid extends React.Component {
  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <Grid columns={3} celled={true} style={{height: '100vh'}}>
            <Grid.Row style={{height: '33%'}}>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{height: '33%'}}>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <DicePool observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{height: '33%'}}>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <BurglarContainer observingDiePosition={this.props.observingDiePosition}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </DndProvider>
      </div>
    )
  }
}

export default GameGrid
