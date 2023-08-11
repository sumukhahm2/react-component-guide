import React,{useState} from 'react'
import './ExpenseDetail.css'
const ExpenseDetail=(props)=>
{
    const [title,updateTitle]=useState(props.title)
    const [price,priceUpdate]=useState(props.amount)
    const deleteItem=()=>{
         updateTitle('updated---')
    }
    const updatePrice=()=>{
        priceUpdate(100)
    }
    return(
       <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${price}</div>
          <button onClick={updatePrice}>UpdatePrice</button>
          <div className='expense-item__location'>{props.location}</div>
          <button onClick={deleteItem}>UpdateTitle</button>
          </div>
    );
}
export default ExpenseDetail;