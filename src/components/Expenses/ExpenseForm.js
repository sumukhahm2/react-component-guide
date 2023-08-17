 
import './ExpenseForm.css';
import React,{ useState} from 'react'
const ExpenseForm=(props)=>
{
    const [updatedTitle,setTitle]=useState('');
    const [updatedAmount,setAmount]=useState('');
    const [updatedDate,setDate]=useState('');
    
    
   const addExpense=(event)=>{
    event.preventDefault();
      
       const expenseAdd= {
            title:updatedTitle,
            amount:updatedAmount,
            date: new Date(updatedDate),
            location:''
          
        }
        props.onEntered(expenseAdd)
        setTitle('')
        setAmount('')
        setDate('')
      
   }
    
    
    const titleChangeHandler=(event)=>{
        setTitle(event.target.value)
        
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value)
        
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
        
    }
    
   

   return (
    <form className="expense-form" onSubmit={addExpense} on>
        <div className="expense-form__items">
            <div className="expense-form__item">
                <label>Expense Title</label>
                <input id='title' type="text" value={updatedTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="expense-form__item">
                <label>Expense Amount</label>
                <input id='amount' type="number" min="0.01" step="0.01" value={updatedAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="expense-form__item">
                <label>Expense Date</label>
                <input id='date' type="date" min="2019-01-01" max="2023-08-01" value={updatedDate} onChange={dateChangeHandler}/>
            </div>
            <div className="expense-form__action">
                <button type='button' className='bton' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className='btn' >Add Expesne</button>
            </div>

        </div>

    </form>
   );
}
export default ExpenseForm;