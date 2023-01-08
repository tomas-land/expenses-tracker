
import React from 'react'

import s from '@styles/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';


async function getData() {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/expenses`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Home = async () => {
  const { expenses } = await getData();
  return (
    <div className={s.home}>
      <BalanceDisplay expenses={expenses}/>
      <ExpensesList expenses={expenses} />
    </div>
  )
}

export default Home
