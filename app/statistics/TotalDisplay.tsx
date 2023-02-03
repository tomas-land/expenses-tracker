"use client"

import React from 'react'
import s from '@styles/Components/_TotalDisplay.module.scss'
import { MdOutlineEuro } from 'react-icons/md';
import { useGlobalContext } from "@context/context"
import moment from 'moment';
import 'moment/locale/lt';

const TotalDisplay = ({ totalAmountExpenses }: any) => {
  const { totalExpenses } = useGlobalContext();
  const currentMonth = moment().format('MMMM');
  return (
    <div className={s.total_expenses}>
      <div className={s.date}>{currentMonth}</div>
      <div className={s.total}><span>- {totalExpenses || totalAmountExpenses._sum.amount}</span> <MdOutlineEuro size={15} color='gray' /></div>
    </div>
  )
}

export default TotalDisplay