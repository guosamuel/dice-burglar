import React, { useContext } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import BurglarContainer from '../containers/BurglarContainer'
import DicePool from '../components/DicePool.js'

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function GameGrid(props) {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Grid columns={3} celled={true} style={{height: '100vh'}}>
          <Grid.Row style={{height: '33%'}}>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{height: '33%'}}>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <DicePool observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{height: '33%'}}>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainer observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DndProvider>
    </div>
  )
}


export default GameGrid
