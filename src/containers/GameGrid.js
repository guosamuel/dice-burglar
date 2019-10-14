import React, { useContext } from 'react'
import { Grid, Image } from 'semantic-ui-react'
// import BurglarContainer from '../containers/BurglarContainer'
import DicePool from '../components/DicePool.js'
import DiceTray from './DiceTray'

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const BurglarContainerIDs = React.createContext()

function GameGrid(props) {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Grid columns={3} celled={true} style={{height: '100vh'}}>
          <Grid.Row style={{height: '33%'}}>
            <Grid.Column verticalAlign='center'>
              <BurglarContainerIDs.Provider value={1}>
                <BurglarContainer observingDiePosition={props.observingDiePosition} />
              </BurglarContainerIDs.Provider>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainerIDs.Provider value={2}>
                <BurglarContainer observingDiePosition={props.observingDiePosition}/>
              </BurglarContainerIDs.Provider>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainerIDs.Provider value={3}>
                <BurglarContainer observingDiePosition={props.observingDiePosition}/>
              </BurglarContainerIDs.Provider>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{height: '33%'}}>
            <Grid.Column verticalAlign='center'>
              <BurglarContainerIDs.Provider value={4}>
                <BurglarContainer observingDiePosition={props.observingDiePosition}/>
              </BurglarContainerIDs.Provider>
            </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <DicePool observingDiePosition={props.observingDiePosition}/>
            </Grid.Column>
              <BurglarContainerIDs.Provider value={6}>
                <BurglarContainer observingDiePosition={props.observingDiePosition}/>
              </BurglarContainerIDs.Provider>
          </Grid.Row>

          <Grid.Row style={{height: '33%'}}>
            <Grid.Column verticalAlign='center'>
              <BurglarContainerIDs.Provider value={7}>
                <BurglarContainer observingDiePosition={props.observingDiePosition}/>
              </BurglarContainerIDs.Provider>
            </Grid.Column>
              <Grid.Column verticalAlign='center'>
                <BurglarContainerIDs.Provider value={8}>
                  <BurglarContainer observingDiePosition={props.observingDiePosition}/>
                </BurglarContainerIDs.Provider>
              </Grid.Column>
            <Grid.Column verticalAlign='center'>
              <BurglarContainerIDs.Provider value={9}>
                <BurglarContainer observingDiePosition={props.observingDiePosition}/>
              </BurglarContainerIDs.Provider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DndProvider>
    </div>
  )
}

function BurglarContainer(props) {
  const burglarContainerID = useContext(BurglarContainerIDs)
  console.log(burglarContainerID)
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
          <DiceTray diePosition={props.observingDiePosition} />
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default GameGrid
