import React, { Component } from 'react';
import MiningBlock from './MiningBlock';

class MiningAria extends Component {
  state = {
    block: {
        id: 1,
        type : "Cobbelstone",
        damage : 0,
        durability: 5,
    }
  }
  mine = ()=>{
    this.setState(prevState => ({
      block: {
          ...prevState.block,
          damage: this.state.block.damage + 1
      } 
    }))
    if(this.state.block.damage === this.state.block.durability){
      this.props.blockBroken(this.state.block.id);
      //new Block
      this.setState({ block: {
        id: 2,
        type : "Cobbelstone",
        damage : 0,
        durability: this.state.block.durability+1,} })
    }
    
  }
  render() {

    return (
      <div className="MiningAria">
        <button onClick= {this.mine} >Mine Block</button>
        <div className={"damage" + this.state.block.damage / this.state.block.durability}>{this.state.block.durability - this.state.block.damage}</div>
      </div>
    )
    /*let rows =  this.props.miningAria.blocks.map ((blockRow)=>{
        let entry = blockRow.map((block)=>{
          console.log(block)
          return {block};
        })
      //(<MiningBlock block={blockRow[i]}/>)
      return (<MiningBlock block={entry}/>)
    });

    return (rows);
    */
    /*
    var rows = this.props.columns.map(function (item, i){
      var entry = item.map(function (element, j) {
          return ( 
              <td key={j}> {element} </td>
              );
      });
      return (
          <tr key={i}> {entry} </tr>
       );
  });
  return (
      <table className="table-hover table-striped table-bordered">
          <tbody>
              {rows}
          </tbody>
      </table>
  );

*/
  }
}

export default MiningAria;
