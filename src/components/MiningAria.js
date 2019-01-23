import React, { Component } from 'react';
//import MiningBlock from './MiningBlock';

class MiningAria extends Component {
  state = {
    
  }
  
  render() {

    return (
      <div className="MiningAria">
        <button onClick= {this.props.mine} >Mine Block</button>
        <div className={"damage" + this.props.block.damage / this.props.block.durability}>{this.props.block.durability - this.props.block.damage}</div>
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
