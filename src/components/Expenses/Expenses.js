import React, {useState} from 'react';
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

    props.expenseData.map((expense) => {
        console.log(expense)
    })

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeSelectedYear={selectedYearChangeHandler}></ExpensesFilter>
            {
                props.expenseData.map((expense) => {
                    return <ExpenseItem
                        expenseData={expense}
                        ></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses