import React, { Component } from 'react';
import Expense from './expense'
import './index.css';

class ExpenseDisplay extends Component {
  renderExpenses() {
    return this.props.expenses.map((expense, index) =>
    <Expense key={index} {...expense} index={index}
    handleDelete={this.props.handleDelete.bind(this, index)}
    editExpense={this.props.editExpense}
    />);
}

    render() {
        return (
             <div className="list">
                {this.renderExpenses()}
            </div>
        );
    }
}

export default ExpenseDisplay;