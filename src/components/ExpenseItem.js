
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
function ExpenseItem(props)
{
   
    return (
       <div className='expense-item'>
       <ExpenseDate date={props.date}/>
       <ExpenseDetail amount={props.amount} location={props.location} title={props.title}/>
        </div>
        );
    
}

export default ExpenseItem;