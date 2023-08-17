import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense=(props)=>{
   const enteredDetails=(item)=>{
     props.afterEntered(item)
     editingHandler(false)
   }
   const [isEditing,editingHandler]=useState(false)
   const handleEditing=()=>{
     editingHandler(true)
   }
  const stopEditingHandler=()=>{
    editingHandler(false)
  }
  return(
    <div className='ad-expense'>
      {!isEditing && <button onClick={handleEditing} className='add-button'>Add Expense</button>}
       {isEditing && <ExpenseForm onEntered={enteredDetails} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  );
}
export default NewExpense