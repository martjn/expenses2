import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expenses/Expenses.js';

function App() {
    const expenses = [
        {
            date : new Date(2023, 0, 10),
            title : 'New Book',
            price : 30.99
        },
        {
            date : new Date(2023, 0, 10),
            title : 'New jeans',
            price : 99.99
        }
    ]
  return (
    <div className="App">
        <Expenses expenseData={expenses}></Expenses>
    </div>
  );
}

export default App;
