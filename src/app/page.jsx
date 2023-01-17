import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NewExpenseForm from './components/NewExpense'
import ExpenseForm from './components/Expense'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <ExpenseForm />
        {/* <ExpenseForm /> */}
      </div>
    </main>
  )
}
