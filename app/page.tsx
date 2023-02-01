
import React from 'react'

import s from '@styles/Pages/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

import { getExpenses } from '../lib/prisma/expenses'

export const dynamic = 'force-dynamic'

async function getData() {
  const expenses = await getExpenses()
  return expenses;
}

const Home = async () => {
  const { expenses } = await getData();
  // console.dir(expenses, { depth: null })
  return (
    <section className={s.home}>
      {/* <BalanceDisplay expenses={expenses} /> */}
      <ExpensesList expenses={expenses} />
    </section>
  )
}

export default Home
