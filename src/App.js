import ExpenseItem from './components/NewExpenses/Expenses/ExpenseItem';
import React,{useState} from 'react'
import obj from './components/NewExpenses/Expenses/Object'
import NewExpense from './components/NewExpenses/Expenses/NewExpense'
import ExpenseFilter from './components/NewExpenses/Expenses/ExpenseFilter';
const App=()=>
{
     const [filteredYear,setFilteredYear]=useState('')
     const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
         const year=obj.filter(exp =>{
          return exp.date.getFullYear()==selectedYear
             
        })
        newFun(year)
        
       
     }
     
    const [datas,newFun]=useState(obj)
    const addExpenseHandler=(expense)=>{
          
             newFun(oldExpense=>{
                return [expense,...oldExpense]
             })
             obj.push(expense)
        
    }

   
    return(
        <>
        <NewExpense afterEntered={addExpenseHandler}></NewExpense>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        {datas.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}  />)}
        </>
    )
   
   
    
}
export default App;