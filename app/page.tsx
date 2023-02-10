
import React from 'react'

import s from '@styles/Pages/_Home.module.scss'
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';
import { getExpensesWithCategory } from '@lib/prisma/expenses'


export const dynamic = 'force-dynamic'

const getExpensesWithCategoryDB = async () => {
  const data = await getExpensesWithCategory()
  return data
}

const Home = async () => {
  const expenses = await getExpensesWithCategoryDB();

  return (
    <section className={s.home}>
      <BalanceDisplay expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </section>
  )
}

export default Home
