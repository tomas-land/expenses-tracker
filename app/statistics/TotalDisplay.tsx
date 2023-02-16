"use client"

import React from 'react'
import s from '@styles/Components/_TotalDisplay.module.scss'
import { MdOutlineEuro } from 'react-icons/md';
import { useGlobalContext } from "@context/context"
import moment from 'moment';
import 'moment/locale/lt';

const TotalDisplay = ({ totalAmountExpenses, previousMonthTotalAmountExpenses }: any) => {
  const { totalExpenses } = useGlobalContext();
  const currentMonth = moment().format('MMMM');
  return (
    <div className={s.total_expenses}>
      <div className={s.current_month}>{currentMonth} <span className={s.prev_month}>/ Sausis</span></div>
      <div className={s.total}>
        <span>- {totalExpenses || totalAmountExpenses._sum.amount}</span>
        <span className={s.prev_month_total}>/ {previousMonthTotalAmountExpenses._sum.amount}</span>
        <MdOutlineEuro className={s.euro_icon} size={12} color='gray' />
      </div>
    </div>
  )
}

export default TotalDisplay