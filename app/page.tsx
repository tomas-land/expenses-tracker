
import React from 'react'

import s from '@styles/Pages/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

// import { getExpenses } from '../lib/prisma/expenses'
import  {prisma}  from '@lib/prisma/prisma'
export const dynamic = 'force-dynamic'


const getData = async () => {
  const data = await prisma.category.findMany({
    include: {
      CategoriesOnExpenses: {
        include: {
          Expense: true
        }
      }
    }
  })
  return JSON.parse(JSON.stringify(data));
}

const Home = async () => {
  const expenses = await getData();
  // console.dir(expenses, { depth: null })
  console.log(expenses);
  return (
    <section className={s.home}>
      d
      {/* <BalanceDisplay expenses={expenses} /> */}
      <ExpensesList expenses={expenses} />
    </section>
  )
}

export default Home
