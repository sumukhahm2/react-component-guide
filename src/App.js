import ExpenseItem from './components/NewExpenses/Expenses/ExpenseItem';
import React,{useState} from 'react'
import obj from './components/NewExpenses/Expenses/Object'
import NewExpense from './components/NewExpenses/Expenses/NewExpense'
import ExpenseFilter from './components/NewExpenses/Expenses/ExpenseFilter';
const App=()=>
{
   const [datas,newFun]=useState(obj)
     const [filteredYear,setFilteredYear]=useState('')
     const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
           
         }
         
         const filteredExpense=datas.filter(exp =>{
            return exp.date.getFullYear().toString()===filteredYear
         })
        
            
         let filterContent;
          
           filterContent=datas.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}  />)
           if(filterContent.length===1)
           filterContent=datas.map(expense=><div key={expense.id}><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}  />
           <p>Only single Expense here. Please add more...</p>
           </div>)
   if(filteredExpense.length===0 && filteredYear && filteredYear!=='0')
      filterContent= <p>No expenses found.</p>;
   if(filteredExpense.length>0)
   {
      
        filterContent=filteredExpense.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}  />)
   }
    const addExpenseHandler=(expense)=>{
          
             newFun(oldExpense=>{
                return [expense,...oldExpense]
             })
             
        
    }

   
    return(
        <>
        <NewExpense afterEntered={addExpenseHandler}></NewExpense>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        {filterContent}
        </>
    )
   
   
    
}
export default App;