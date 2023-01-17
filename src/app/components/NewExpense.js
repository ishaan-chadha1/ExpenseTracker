"use client";
import React, { useState } from 'react'
import '../styles/Expense.css'

const NewExpenseForm = () => {
  // useState hook for form inputs
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    date: ''
  })
  const [expenses, setExpenses] = useState([])

  // handle input changes
  const handleChange = e => {
    setExpense({ ...expense, [e.target.name]: e.target.value })
  }

  // handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    setExpenses([...expenses, expense])
    setExpense({
        description: '',
        amount: '',
        date: ''
      })
    // add logic for submitting the expense to an API or database here
    console.log(expenses)
  }

  return (
    <form onSubmit={handleSubmit} className='expense-form'>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <div>
        <p></p>
      </div>
    </form>
    
  )
}

export default NewExpenseForm
