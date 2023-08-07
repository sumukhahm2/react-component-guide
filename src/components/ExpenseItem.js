
import './ExpenseItem.css';

function ExpenseItem()
{
    const ExpenseDtae=new Date(2021,2,28);
    const ExpenseDescription='Car Insurance';
    const ExpensePrice=294.67;
    const LocationOfExpenditure='Insurance Office'
    return (
       <div className='expense-item'>
        <div>{ExpenseDtae.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{ExpenseDescription}</h2>
          <div className='expense-item__price'>${ExpensePrice}</div>
          <div className='expense-item__location'>{LocationOfExpenditure}</div>
          </div>
        
        </div>
        );
    
}

export default ExpenseItem;