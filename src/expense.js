import React, { Component } from 'react';
import ExpenseForm from './expense-form';
import './index.css';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(){
        this.setState({ toggle: !this.state.toggle  });
        console.log(this.state.toggle);
       }

    render() {
        return (
            <div className="expense">
                {/* <p className="icons">
                   <i className="fa fa-trash-o" onClick={this.props.handleDelete}></i>
                   <i className="fa fa-pencil-square-o" onClick={this.toggleEdit}></i>
                </p> */}
                 <p>Amount: ${this.props.amt}</p>
                 <p>Category: {this.props.cat}</p>
                 <p>Description: {this.props.descr}</p>
             <button onClick={this.props.handleDelete}>Delete</button>
             <button onClick={this.toggleEdit}>Edit</button>

             <div className={!this.state.toggle ? 'hide': null} >
               <ExpenseForm buttonText="save edit" id="edit" index={this.props.index}
               editExpense={this.props.editExpense} />
             </div>
            </div>
        );
    }
}

export default Expense;