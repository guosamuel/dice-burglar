import React from 'react'
import { Grid } from 'semantic-ui-react'

class DiceTray extends React.Component {
  render() {
    return (
      <Grid columns={9} celled={true} style={{height: '15vh'}}>
        <Grid.Row style={{height: '33%'}}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{height: '33%'}}>
        </Grid.Row>
        <Grid.Row style={{height: '33%'}}>
        </Grid.Row>
      </Grid>
    )
  }
}

export default DiceTray
