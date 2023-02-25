"use client"

import React from 'react'
import s from '@styles/Components/_TotalDisplay.module.scss'
import { MdOutlineEuro } from 'react-icons/md';
import { useGlobalContext } from "@context/context"
import { currentMonthLT, previousMonthLT } from '@lib/dayJS';

const TotalDisplay = ({ totalAmountExpenses, previousMonthTotalAmountExpenses }: any) => {
  
  const { totalExpenses } = useGlobalContext();
  
  return (
    <div className={s.total_display}>
      <div className={s.current_and_prev_months}>{currentMonthLT} <span className={s.prev_month}>/ {previousMonthLT}</span></div>
      <div className={s.total}>
        <span>- {totalExpenses || totalAmountExpenses._sum.amount}</span>
        <span className={s.prev_month_total}>/ {previousMonthTotalAmountExpenses._sum.amount}</span>
        <MdOutlineEuro className={s.euro_icon} size={12} color='gray' />
      </div>
    </div>
  )
}

// export const dynamic = 'force-dynamic'
export default TotalDisplay