"use client";

import React, { useReducer, useState } from 'react'
const initialState = { expenses: [] }

const expenseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return { expenses: [...state.expenses, action.payload] }
        case 'RESET_EXPENSE':
            return initialState
        case 'DELETE_EXPENSE':
            return { expenses: state.expenses.filter((exp, i) => i !== action.payload) }
        default:
            return state
    }
}

const ExpenseList = ({ expenses }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>

            <tbody>
                {expenses.map((exp, i) => (
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{exp.description}</td>
                        <td>{exp.amount}</td>
                        <td>{exp.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


const ExpenseForm = () => {
    const [expense, setExpense] = useState({
        description: '',
        amount: '',
        date: ''
    })
    const [state, dispatch] = useReducer(expenseReducer, initialState)

    // handle form submission
    const handleDelete = (index) => {
        dispatch({ type: 'DELETE_EXPENSE', payload: index });
      }
    const handleChange = e => {
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        // dispatch action to add expense
        dispatch({ type: 'ADD_EXPENSE', payload: expense })
        // reset expense state
        setExpense({
            description: '',
            amount: '',
            date: ''
        })
    }
    const handleResetSubmit = e => {
        dispatch({ type: 'RESET_EXPENSE', payload: expense })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        value={expense.description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Amount
                    <input
                        type="number"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Date
                    <input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
                <button onClick={handleResetSubmit}>Reset</button>
                
                
            </form>

            <table>
        <thead>
          <tr>
          <th>Sr. No</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {state.expenses.map((exp, i) => (
            <tr key={i}>
              <td>{i}</td>  
              <td>{exp.description}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
            {/* <ExpenseList expenses={state.expenses} /> */}
        </div>
    )
}
export default ExpenseForm
