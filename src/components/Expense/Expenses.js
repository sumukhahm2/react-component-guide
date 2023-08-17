import ExpensesList from './ExpenseList';
import React,{useState} from 'react'
import ExpenseFilter from '../Expenses/ExpenseFilter'
import './Expenses.css'
import ExpensesChart from '../Expenses/ExpensesChart'
const Expenses=(props)=>{
  
    const [filteredYear,setFilteredYear]=useState('')
    const filterChangeHandler=(selectedYear)=>{
       setFilteredYear(selectedYear)
          
        }
        
        const filteredExpense=props.items.filter(exp =>{
           return exp.date.getFullYear().toString()===filteredYear
        })
       
           
       
    return(
        <div className='expenses-item'>
            <div className='expenses-items'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpense}></ExpensesChart>
            <ExpensesList items={filteredExpense} year={filteredYear} datas={props.items}></ExpensesList>
            </div >
        </div>
        
    );

}
export default Expenses;