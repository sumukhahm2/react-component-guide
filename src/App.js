
import React,{useState} from 'react'
import obj from './components/Expenses/Object'
import NewExpense from './components/Expenses/NewExpense';
import Expenses from './components/Expense/Expenses';
const App=()=>
{
   const [datas,newFun]=useState(obj)
    
    const addExpenseHandler=(expense)=>{
          
             newFun(oldExpense=>{
                return [expense,...oldExpense]
             })
             
        
    }

   
    return(
        <>
        <NewExpense afterEntered={addExpenseHandler}></NewExpense>
        <Expenses items={datas}></Expenses>
        </>
    )
   
   
    
}
export default App;