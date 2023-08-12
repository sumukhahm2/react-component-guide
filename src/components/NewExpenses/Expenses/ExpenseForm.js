import './ExpenseForm.css';
import React,{ useState} from 'react'
const ExpenseForm=()=>
{
    const [updatedTitle,setTitle]=useState('');
    const [updatedAmount,setAmount]=useState('');
    const [updatedDate,setDate]=useState('');
    const titleChangeHandler=(event)=>{
        setTitle(event.target.value)
        console.log(updatedTitle)
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value)
        console.log(updatedAmount)
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
        console.log(updatedDate)
    }

   return (
    <form className="expense-form">
        <div className="expense-form__items">
            <div className="expense-form__item">
                <label>Expense Title</label>
                <input id='title' type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="expense-form__item">
                <label>Expense Amount</label>
                <input id='amount' type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="expense-form__item">
                <label>Expense Date</label>
                <input id='date' type="date" min="2019-01-01" max="2023-08-01" onChange={dateChangeHandler}/>
            </div>
            <div className="expense-form__action">
                <button className='btn'>Add Expesne</button>
            </div>

        </div>

    </form>
   );
}
export default ExpenseForm;