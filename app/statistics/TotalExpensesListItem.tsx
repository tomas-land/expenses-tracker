"use client"

import React, { useEffect } from 'react'
import s from '@styles/Components/_TotalExpensesListItem.module.scss'

import { GrFormDown } from 'react-icons/gr';
import { MdOutlineEuro } from 'react-icons/md';
import { useState } from 'react';
import { useGlobalContext } from "@context/context"
import dayjs from 'dayjs';


const TotalExpensesListItem = ({ name, expenses }: any) => {

  const { totalExpenses, addExpenses } = useGlobalContext();
  const [showSubItem, setShowSubItem] = useState(false)

  const toggleSubItems = () => {
    setShowSubItem((prev) => !prev)
  }
  /////////////////////////// Current month expenses
  const startOFMonth = dayjs().startOf("month").toISOString();
  const currentMonthExpenses = expenses.filter((expense: any) => {
    return expense.createdAt > startOFMonth
  })
  const totalAmountByCategory = currentMonthExpenses?.map((expense: any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);
  /////////////////////////// Previous month expenses
  const startOFPreviousMonth = dayjs().subtract(1, 'month').startOf("month").toISOString();
  const endOFPreviousMonth = dayjs().subtract(1, 'month').endOf("month").toISOString()
  const previousMonthExpenses = expenses.filter((expense: any) => {
    return expense.createdAt > startOFPreviousMonth && expense.createdAt < endOFPreviousMonth
  })
  const previousMonthTotalAmountByCategory = previousMonthExpenses?.map((expense: any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);
  console.log(totalAmountByCategory)

  return (
    <li className={s.list_item} >
      <div className={s.item_header}>
        <div>
          <button className={s.toggle_btn} onClick={toggleSubItems}><GrFormDown className={`${showSubItem ? s.rotate_up : s.rotate_down}`} /></button>
          {name}
        </div>
        <div className={s.amount_radio}>
          <div className={s.amount}>- {totalAmountByCategory} <span className={s.prev_month_amount}> / {previousMonthTotalAmountByCategory}</span> </div>
          <MdOutlineEuro color='gray' className={s.euro_icon} size={12} />
          <input type="radio" value={totalAmountByCategory} onClick={(e: any) => addExpenses(+e.target.value)} />
        </div>
      </div>

      <div className={`${s.sub_items} ${showSubItem && s.open}`}>
        {
          // previousMonthExpenses?.map((prev_expense: any) => {
          //   return (
              currentMonthExpenses?.map((expense: any) => {
                return (
                  <div className={s.sub_item} key={expense.id}>
                    <div className={s.category_and_desc}>
                      <div>{name}</div>
                      <div>{expense.desc}</div>
                    </div>
                    <div className={s.amount_and_radio}>
                      <div className={s.amount}>- <span>{expense.amount}</span> <MdOutlineEuro color='gray' size={12} /></div>
                      <input type="radio" value={expense.amount} onClick={(e: any) => addExpenses(+e.target.value)} />
                    </div>
                  </div>
                )
              })
          //   )
          // })
        }
      </div>
    </li>
  )
}

export default TotalExpensesListItem