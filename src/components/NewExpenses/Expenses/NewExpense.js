import React from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    const enteredValues=(values)=>{
      
        const expenses={
            ...values,
            id:Math.random().toString()
        }
       props.afterEntered(expenses)
    }
  return(
    <div>
        <ExpenseForm onEnteredValues={enteredValues}></ExpenseForm>
    </div>
  );
}
export default NewExpense