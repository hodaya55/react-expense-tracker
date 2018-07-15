import React, { Component } from 'react';
import './App.css';
import ExpenseDisplay from './expense-display';
import ExpenseForm from './expense-form';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [], asc:false
    };
    this.addExpense = this.addExpense.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  addExpense(expense) {
    this.setState({
      expenses: this.state.expenses.concat(expense)
    });
  }

  handleDelete(index) {
    this.setState({
      expenses: this.state.expenses.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleEdit(index, expense) {
   let update = this.state.expenses.map((exp, i) =>{
      if (i===index)
       return expense;

     return exp;
    });

    this.setState({ expenses: update });
  }

  handleSort() {
    let sortDirecttion = !this.state.asc;
    let sortArray = this.state.expenses;
    if (sortDirecttion)
      sortArray = sortArray.sort((a, b) =>
        a.amt - b.amt );
    else
      sortArray = sortArray.reverse();

    this.setState({
      expenses: sortArray,
      asc: sortDirecttion
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Expense project</h1>
        </header>
        <p className="App-intro">
        </p>

         <div>
         <ExpenseForm addExpense={this.addExpense}  buttonText="Add Expense" id="add"/>
         <button onClick={this.handleSort}>Sort by amount</button>
         </div>

        <ExpenseDisplay expenses={this.state.expenses}
        handleDelete={this.handleDelete}
        editExpense={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
