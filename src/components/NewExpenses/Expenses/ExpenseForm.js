import './ExpenseForm.css';
import React from 'react'
const ExpenseForm=()=>
{

    const addExpense=(e)=>{
        e.preventDefault()
        const etitle=document.getElementById('title').value;
        const eamount=document.getElementById('amount').value ;
        const edate=document.getElementById('date').value ;
        console.log(etitle,eamount,edate);
    }
   return (
    <form className="expense-form">
        <div className="expense-form__items">
            <div className="expense-form__item">
                <label>Expense Title</label>
                <input id='title' type="text"/>
            </div>
            <div className="expense-form__item">
                <label>Expense Amount</label>
                <input id='amount' type="number" min="0.01" step="0.01"/>
            </div>
            <div className="expense-form__item">
                <label>Expense Date</label>
                <input id='date' type="date" min="2019-01-01" max="2023-08-01"/>
            </div>
            <div className="expense-form__action">
                <button className='btn' onClick={addExpense}>Add Expesne</button>
            </div>

        </div>

    </form>
   );
}
export default ExpenseForm;