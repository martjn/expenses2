import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';

const Expenses = (props) => {
    const [currentSelectedYear, setCurrentSelectedYear] = useState('2023')
    const selectedYearChangeHandler = (selectedYear) => {
        setCurrentSelectedYear(selectedYear);
        console.log(`Year data in Expenses.js ${currentSelectedYear}` )
    }
    return (
        <Card className="expenses">
            <ExpensesFilter onChangeSelectedYear={selectedYearChangeHandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses