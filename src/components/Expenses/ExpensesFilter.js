import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023')

    const yearChangeHandler = (event) => {
        event.preventDefault()
        console.log('filter change handled by ExpensesFilter.js')
        setSelectedYear(event.target.value)
        props.onChangeSelectedYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};
export default ExpensesFilter;