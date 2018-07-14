import React, { Component } from 'react';
import Expense from './expense'

class ExpenseDisplay extends Component {

  renderExpenses() {
    return this.props.expenses.map((expense, index) =>
    <Expense key={index} {...expense}
    handleDelete={this.props.handleDelete.bind(this, index)} />);
}

    render() {
        return (
             <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;