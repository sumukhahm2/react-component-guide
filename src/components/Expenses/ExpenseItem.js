import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '.././UI/card'

const ExpenseItem=(props)=>
{
    
    return (
        <li>
       <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
       <ExpenseDetail amount={props.amount} location={props.location} title={props.title}/>
       </Card>
       </li>
       
        );
    
}

export default ExpenseItem;