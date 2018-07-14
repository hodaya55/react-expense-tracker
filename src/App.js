import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };
    this.addExpense = this.addExpense.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addExpense(expense) {
    this.setState({
      expenses: this.state.expenses.concat(expense)
    });
    console.log(this.state.expenses);
  }

  handleDelete(index) {
    this.setState({
      expenses: this.state.expenses.filter((e, i) => {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Expense project</h1>
        </header>
        <p className="App-intro">
        </p>

        <ExpenseForm addExpense={this.addExpense}/>
        <ExpenseDisplay expenses={this.state.expenses}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
