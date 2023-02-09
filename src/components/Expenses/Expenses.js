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

    const filteredExpenses = props.expenseData.filter(expense => expense.date.getFullYear() === Number(currentSelectedYear))

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeSelectedYear={selectedYearChangeHandler}></ExpensesFilter>
            {
                filteredExpenses.length === 0 && <p>No expenses found.</p>
            }
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        ></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses