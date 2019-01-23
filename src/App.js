import React, { Component } from 'react';
import './App.css';
import MiningAria from './components/MiningAria';
import SelectBlock from './components/SelectBlock';
import Inventory from './components/Inventory'
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
    inventory:[
      {object: 1, amount: 62},
      /*//{object: 2, amount: 5},
      {object: 3, amount: 1},
      {object: 4, amount: 50}*/
    ]
  }

  mine = ()=>{
    //damage block
    this.setState(prevState => ({
      activeBlock: {
          ...prevState.activeBlock,
          damage: this.state.activeBlock.damage + this.state.pick.damage
      } 
    }))
    //block broken
    if(this.state.activeBlock.damage >= this.state.activeBlock.durability){
      this.blockBroken(this.state.activeBlock.id);
      //new Block of same type
      this.setState({ activeBlock: this.state.blocks[this.state.selectedBlock] })
    }
    
  }
  blockBroken = (id)=>{
    this.setState({ curentsy: this.state.curentsy + id })
    this.setState({ minedBlocks: this.state.minedBlocks + 1 })
    //add to inventory
    //let inInvPos = this.state.inventory.findIndex(o => o.object == id);
    //console.log(this.state.inventory[inInvPos].amount);

    this.updateItemBy1(id);

    //reduse pick durability
    if(this.state.ActivePick !== 0){
      this.setState(prevState => ({
        pick:{
          ...prevState.pick,
          durability: this.state.pick.durability - 1
        }
      }))
    }
    //bracke pick
    if(this.state.pick.durability === 0){
      this.setPick(0); // 0 is fist
    }
    return true;
  }
  selectBlockFunk = (block)=>{
    this.setState({ selectedBlock: block.id})
    this.setState({ activeBlock: block})
  }
  setPick = (pickId)=> {
    this.setState({ActivePick: pickId});
    this.setState({ActivePick: this.state.picks[pickId]});
  }
  updateItemBy1 = (id) => {
    var index = this.state.inventory.findIndex(x=> x.object === id && x.amount < 64);
    //console.log(id)
    if (index === -1){
      // handle error
      //add to array if array.length < 20
      this.setState(prevState => ({
        inventory: [...prevState.inventory, {object: id, amount: 1}]
      }))
    }else{
      this.setState({
        inventory: [
           ...this.state.inventory.slice(0,index),
           Object.assign({}, this.state.inventory[index], {amount: this.state.inventory[index].amount+1}),
           ...this.state.inventory.slice(index+1)
        ]
      });
    }
  }
  render() {

    return (
      <div className="App">
        <MiningAria mine = {this.mine} block= {this.state.activeBlock}/>
        <SelectBlock blocks={this.state.blocks} selectBlockFunk={this.selectBlockFunk} pick={this.state.pick} />
        <Inventory blocks = {this.state.blocks} inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
