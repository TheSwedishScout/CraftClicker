import React, { Component } from 'react';

class Inventory extends Component {

    render(){
        return(
            this.props.inventory.map ((inv)=>(
                <div className={this.props.blocks[inv.object].name + " block inv"}>{this.props.blocks[inv.object].name+ " " + inv.amount}</div>
            ))
        )
    }
}
export default Inventory;
