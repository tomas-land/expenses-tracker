
import React from 'react'

import s from '@styles/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

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
      <BalanceDisplay />
      <ExpensesList expenses={expenses} />
    </div>
  )
}

export default Home
