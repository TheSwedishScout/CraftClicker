import React, { Component } from 'react';
import BlockItem from './BlockItem'

class SelectBlock extends Component {

    row = this.props.blocks.map ((block)=>{
        if(block.miningLevel <= this.props.pick.miningLevel){
                console.log(block.miningLevel)
                console.log(this.props.pick.miningLevel)
                return(<BlockItem key={block.id} block = {block} selectBlockFunk={this.props.selectBlockFunk}/>)
            }else{
                return null
            }
        }
        )
    

    render(){
        
        return (
            <div className="selectebaleBlocks">

            
            {this.row}
            </div>
            )
            
        
    }
}
export default SelectBlock;
