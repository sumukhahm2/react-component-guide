import './ExpenseList.css'
import ExpenseItem from '../Expenses/ExpenseItem'
import React from 'react'
const ExpensesList=(props)=>{

    console.log(props.year==='0')
    if(props.items.length===0 && props.year && props.year!=='0')
    {
        return <h2 className='expenses-list__fallback'>Found No Expense.</h2>
    }
    if(props.year==='0' || !props.year)
     return (
       <ul key={0} className='expenses-list'>
       {props.datas.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}  />)}
      </ul>
     );
    
    return(
        <ul key={0} className='expenses-list'>
           
            {props.items.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}  />)}
          
        </ul>
    );
}
export default ExpensesList