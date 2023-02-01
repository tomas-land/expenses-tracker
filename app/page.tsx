
import React from 'react'

import s from '@styles/Pages/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

import { getExpenses } from '../lib/prisma/expenses'
import prisma from '@lib/prisma';
export const dynamic = 'force-dynamic'

async function getData() {
  // @ts-ignore
  const expenses = await prisma.expense.findMany({
    // include:{
    //   categories: true
    // }
    // select: {
    //   id: true,
    //   amount: true,
    //   desc: true,
    //   // createdAt: true,
    //   // categories: {
    //   //   select: {
    //   //     category: {
    //   //       select: {
    //   //         name: true,
    //   //       },
    //   //     },
    //   //   }
    //   // }
    // }
    // // orderBy: {
    // //   createdAt: "desc",
    // // },
  });
  return JSON.parse(JSON.stringify(expenses));
}

const Home = async () => {
  const expenses  = await getData();
  // console.dir(expenses, { depth: null })
  return (
    <section className={s.home}>
      {/* <BalanceDisplay expenses={expenses} /> */}
      <ExpensesList expenses={expenses} />
    </section>
  )
}

export default Home
