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
     }
    const [oldCopy,newFun]=useState('2020')
    const addExpenseHandler=(expense)=>{
             newFun(expense)
        obj.push(expense)
      console.log(oldCopy)
    }

    const datas=obj.map((item)=>
    {
        return(
        
            <div key={item.id}>
               <ExpenseItem title={item.title}
                  amount={item.amount}
                  date={item.date}
                  location={item.location}
               ></ExpenseItem>
               
            </div>
        );
       
    })
    return(
        <>
        <NewExpense afterEntered={addExpenseHandler}></NewExpense>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        {datas}
        </>
    )
   
   
    
}
export default App;