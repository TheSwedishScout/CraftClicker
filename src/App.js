import React, { Component } from 'react';
import './App.css';
import MiningAria from './components/MiningAria'

class App extends Component {
  state = {
    curentsy: 0,
    minedBlocks: 0

  }
  generateStart = ()=>{
    let aria = []
    for (let index = 0; index < this.state.miningAria.size; index++) {
      for (let index2 = 0; index2 < this.state.miningAria.size; index2++) {
        aria[index][index2] = 1
      }
    }
    //this.setState((miningAria.blocks) => {aria})
    
  }
  blockBroken = (id)=>{
    this.setState({ curentsy: this.state.curentsy + id })
    this.setState({ minedBlocks: this.state.minedBlocks + 1 })
    console.log(this.state.curentsy)
    return true;
  }
  render() {
    /*if (this.state.miningAria.blocks.length == 0){
      //Generate Blocks
      //this.generateStart();
    }*/
    return (
      <div className="App">
        <MiningAria blockBroken = {this.blockBroken}/>
      </div>
    );
  }
}

export default App;
