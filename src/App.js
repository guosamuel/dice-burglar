import React from 'react';
import GameGrid from './containers/GameGrid.js'

class App extends React.Component{
  render() {
    return (
      <div>
        <GameGrid observingDiePosition={this.props.observingDiePosition}/>
      </div>
    );
  }
}

export default App;
