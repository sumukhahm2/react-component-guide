import ExpenseItem from './components/NewExpenses/Expenses/ExpenseItem';
import React from 'react'
import ExpenseForm from './components/NewExpenses/Expenses/ExpenseForm';
const App=()=>
{
    
   
    const obj=[
        {
            id:'e1',
            title:'Toilet Paper',
            amount:94.36,
            date:new Date(2021,2,18),
            location:'shop'

        },
        {
            id:'e2',
            title:'TV',
            amount:964.36,
            date:new Date(2022,8,28),
            location:'TV showroom'

        },
        {
            id:'e3',
            title:'food',
            amount:364.1,
            date:new Date(2019,0,15),
            location:'Restorant'


        },
        {
            id:'e4',
            title:'shopping',
            amount:954.36,
            date:new Date(2021,4,1),
            location:'Market'


        }
    ];
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
         <h2>Lets get started---</h2> 
         <ExpenseForm></ExpenseForm>
        {datas}
        </>
    )
   
   
    
}
export default App;