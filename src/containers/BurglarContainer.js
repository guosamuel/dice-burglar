//BURGLAR CONTAINER WAS MOVED INTO THE GAME GRID IN ORDER TO USE THE
//USE CONTEXT HOOK

import React, { useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import DiceTray from './DiceTray'

function BurglarContainer(props) {
  const burglarContainerID = useContext(BurglarContainerIDs)
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


export default BurglarContainer
