
import React from 'react'

import s from '@styles/Pages/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

// import { getExpenses } from '../lib/prisma/expenses'
// import { prisma } from '@lib/prisma/db'
export const dynamic = 'force-dynamic'
import { PrismaClient } from '@prisma/client'

async function getData() {
  const prisma = new PrismaClient()
  const expenses = await prisma.expense.findMany({
    // include: {
    //   CategoriesOnExpenses: {
    //     include: {
    //       Expense: true,
    //     },
    //   },
    // },
  });
  return JSON.parse(JSON.stringify(expenses));
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
