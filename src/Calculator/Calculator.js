import React, { Component } from 'react';
 class calculator extends Component
 {
     constructor(props){
         super(props);
         this.state={
            fieldnumber1: 0,
            fieldnumber2: 0,
            operator: null,
            answer: null
         };
     }
     firstInputChangeHandler = (event) => {
         if (event.target.value.match(/[0-9]*/)[0] !== event.target.value){
            this.setState({
                answer: 'Please enter number'
            });
         }
         else
         {
            this.setState({
                answer: null,
                fieldnumber1: parseInt(event.target.value)
            });
         }
     }


     secondInputChangeHandler = event =>{
        if (event.target.value.match(/[0-9]*/)[0] !== event.target.value){
            this.setState({
                answer: 'Please enter number'
            });
         }
         else
         {
            this.setState({
                answer: null,
                fieldnumber2: parseInt(event.target.value)
            });
         }
     }


     calculationHandler = (operator) =>{
         const number1 = this.state.fieldnumber1;
         const number2 = this.state.fieldnumber2;
         if(operator === '+')
         {
             this.setState({
                 answer: number1 + number2,
             });
         }
         else if(operator === '-')
         {
             this.setState({
                 answer: number1 - number2,
             });
         }
         else if(operator === '*')
         {
             this.setState({
                 answer: number1 * number2,
             });
         }
         else if(operator === '/')
         {
             this.setState({
                 answer: number1 / number2,
             });
         }
         else
         {
             alert('Wrong operation');
         }
     }


     render(){
         let disableButton = true;
         if(disableButton && this.state.fieldnumber1 && this.state.fieldnumber2)
         {
             disableButton = false
         }
         else{
            disableButton = true
         }
        return (
            <div>
                <h1>Demo App calculator</h1>
                <div className='textbox--div'>
                    <input
                    type='text'
                    id='fieldnumber1'
                    onChange={(event)=> this.firstInputChangeHandler(event)}></input>
                    <input 
                    type='text'
                    id='fieldnumber2'
                    onChange={(event)=> this.secondInputChangeHandler(event)}
                     ></input>
                </div>
                <div className='button--div'>
                    <button disabled={disableButton ? 'disabled': null}
                     onClick={() => this.calculationHandler('+')}>+</button>
                    <button disabled={disableButton ? 'disabled': null}
                    onClick={() => this.calculationHandler('-')}>-</button>
                    <button disabled={disableButton ? 'disabled': null}
                    onClick={() => this.calculationHandler('*')}>*</button>
                    <button disabled={disableButton ? 'disabled': null}
                    onClick={() => this.calculationHandler('/')}>/</button>
                </div>
                <div>
                    answer: {this.state.answer}
                    <br/>
                    number1: {this.state.fieldnumber1}
                    <br/>
                    number2: {this.state.fieldnumber2}
                </div>
            </div>
        );
     };
 }


 export default calculator;