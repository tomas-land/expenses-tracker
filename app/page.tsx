
import React from 'react'

import s from '@styles/_Home.module.scss'

import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation';


const Home = () => {
 
  return (
    <div className={s.home}>
      <BalanceDisplay />
      {/* @ts-expect-error Server Component */}
      <ExpensesList />
    </div>
  )
}

export default Home
