import React, { Component } from 'react';

class Expense extends Component {
    render() {
        return (
            <div> ${this.props.amt}, {this.props.cat}, {this.props.descr}
             {/* <button onClick={this.props.handleDelete.bind(this, this.props.index)}>Delete</button> */}
             <button onClick={this.props.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default Expense;