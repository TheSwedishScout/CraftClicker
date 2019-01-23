import React, { Component } from 'react';
import './App.css';
import MiningAria from './components/MiningAria';
import SelectBlock from './components/SelectBlock';
//import axios from 'axios';
import myBlocks from './components/assets/blocks.json';
import myPicks from './components/assets/picks.json';



console.log(myBlocks);
class App extends Component {
  state = {
    curentsy: 0,
    minedBlocks: 0,
    selectedBlock: 3,
    ActivePick: 0,
    pick: {
        id: 0,
        type: 'fist',
        durability: Infinity,
        damage: 1,
        miningLevel: 10
    },
    activeBlock: {
      id: 3,
      name : "Cobbelstone",
      damage : 0,
      durability: 10,
      worth: 1,
    },
    blocks: myBlocks,
    picks :myPicks,
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
  mine = ()=>{
    this.setState(prevState => ({
      activeBlock: {
          ...prevState.activeBlock,
          damage: this.state.activeBlock.damage + this.state.pick.damage
      } 
    }))
    if(this.state.activeBlock.damage >= this.state.activeBlock.durability){
      this.blockBroken(this.state.activeBlock.id);
      //new Block
      this.setState({ activeBlock: this.state.blocks[this.state.selectedBlock] })
    }
    
  }
  blockBroken = (id)=>{
    this.setState({ curentsy: this.state.curentsy + id })
    this.setState({ minedBlocks: this.state.minedBlocks + 1 })
    this.setState(prevState => ({
      pick:{
        ...prevState.pick,
        durability: this.state.pick.durability - 1
      }
    }))
    console.log(this.state.curentsy)
    return true;
  }
  selectBlockFunk = (block)=>{
    this.setState({ selectedBlock: block.id})
    this.setState({ activeBlock: block})
  }
  render() {
    /*if (this.state.miningAria.blocks.length == 0){
      //Generate Blocks
      //this.generateStart();
    }*/
    return (
      <div className="App">
        <MiningAria mine = {this.mine} block= {this.state.activeBlock}/>
        <SelectBlock blocks={this.state.blocks} selectBlockFunk={this.selectBlockFunk} pick={this.state.pick} />
      </div>
    );
  }
}

/*axios.get('http://localhost/clicker/src/components/assets/blocks.json')
  .then((res)=>{
    console.log(res.data);
    this.setState({blocks: res.data})
  })*/

export default App;
