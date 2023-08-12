import ExpenseItem from './components/NewExpenses/Expenses/ExpenseItem';
import React from 'react'
import obj from './components/NewExpenses/Expenses/Object'
import ExpenseForm from './components/NewExpenses/Expenses/ExpenseForm';
const App=()=>
{
    
   
    
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
        <ExpenseForm></ExpenseForm>
        {datas}
        </>
    )
   
   
    
}
export default App;