import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card';

function Expenses(props){
    console.log(props.expenseData[0])
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses