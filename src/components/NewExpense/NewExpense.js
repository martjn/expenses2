import React, {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [formEdit, setFormEdit] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const formEditHandler = (currentValue) => {
        currentValue === false ? setFormEdit(false) : setFormEdit(true)
        console.log(`formEdit in NewExpense.js = ${formEdit}`)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={formEditHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense