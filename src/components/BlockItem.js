import React, { Component } from 'react';

class BlockItem extends Component {

    render(){
        return(
            <div className={this.props.block.name + " block"} onClick={this.props.selectBlockFunk.bind(this, this.props.block)}>
                {this.props.block.name}
            </div>
        )
    }
}
export default BlockItem;
