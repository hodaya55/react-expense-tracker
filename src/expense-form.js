import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
  constructor(props){
    super(props);
    this.state = { amt: '', cat: '', descr: '' };
    this.changeExpense = this.changeExpense.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    console.log(this.state);
}

changeExpense(e){
  this.setState({[e.target.id] : e.target.value});
//e.target.id <-- the element id (which matches our state)
//e.target.value <-- the element value
//[e.target.id] <-- is the way to define a dynamic var name
}

onBtnClick(e){
  console.table(this.state);
  //to pass the changes to the parent component (App)
  if (e.target.id === "add") {
      this.props.addExpense(this.state);
  }
  else { // id= "edit"
      this.props.editExpense(this.props.index, this.state);
  }
   //reset the inputs
  this.setState({ amt: '', cat: '', descr: ''});
}

    render() {
        return (
            <div>
               <form>
               <SingleInput content={this.state.amt} controlFunc={this.changeExpense} id="amt" type="number" placeholder="$ amount?"/>
               <SingleInput content={this.state.cat} controlFunc={this.changeExpense} id="cat" type="text" placeholder="category?"/>
               <SingleInput content={this.state.descr} controlFunc={this.changeExpense} id="descr" type="text" placeholder="add description.."/>
              <button onClick={this.onBtnClick} type="button" id={this.props.id} >{this.props.buttonText}</button>
               </form>
            </div>
        );
    }
}

export default ExpenseForm;