"use client"

import React, { useEffect, useRef } from 'react'
import s from '@styles/Components/_TotalExpensesListItem.module.scss'

import { GrFormDown } from 'react-icons/gr';
import { MdOutlineEuro } from 'react-icons/md';
import { useState } from 'react';
import { useGlobalContext } from "@context/context"
import dayjs from 'dayjs';


const TotalExpensesListItem = ({ name, expenses, isChecked, setIsChecked }: any) => {

  const { sumTotalExpenses } = useGlobalContext();
  const [showSubItem, setShowSubItem] = useState(false)

  const toggleSubItems = () => {
    setShowSubItem((prev) => !prev)
  }

  ///////////// Current month expenses
  const startOFMonth = dayjs().startOf("month").toISOString();
  const currentMonthExpenses = expenses.filter((expense: any) => {
    return expense.createdAt > startOFMonth
  })
  const totalAmountByCategory = currentMonthExpenses?.map((expense: any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);
  //////////// Previous month expenses
  const startOFPreviousMonth = dayjs().subtract(1, 'month').startOf("month").toISOString();
  const endOFPreviousMonth = dayjs().subtract(1, 'month').endOf("month").toISOString()
  const previousMonthExpenses = expenses.filter((expense: any) => {
    return expense.createdAt > startOFPreviousMonth && expense.createdAt < endOFPreviousMonth
  })
  const previousMonthTotalAmountByCategory = previousMonthExpenses?.map((expense: any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);

  const toggleRadio = (e: any): void => {
    const { name, checked, value } = e.currentTarget
    if (checked) {
      setIsChecked([...isChecked, { name: name, checked: true }])
    } else {
      setIsChecked(isChecked.filter((item: any) => item.name !== name))
      sumTotalExpenses(-value);
    }
  }

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
          <label htmlFor="categotyLabel">
            <input type="checkbox" id="categotyLabel" value={totalAmountByCategory} onClick={(e: any) => sumTotalExpenses(+e.target.value)} name={name} onChange={e => toggleRadio(e)} checked={isChecked.some((item: any) => item.name === name)} />
          </label>
        </div>
      </div>

      <div className={`${s.sub_items} ${showSubItem && s.open}`}>
        {
          currentMonthExpenses?.map((expense: any) => {
            return (
              <div className={s.sub_item} key={expense.id}>
                <div className={s.desc}>
                  <div>{expense.desc || name}</div>
                </div>
                <div className={s.amount_and_radio}>
                  <div className={s.amount}>- <span>{expense.amount}</span></div>
                  <MdOutlineEuro color='gray' className={s.euro_icon} size={12} />
                  <label htmlFor="expenseLabel">
                    <input type="checkbox" value={expense.amount} id="expenseLabel" onClick={(e: any) => sumTotalExpenses(+e.target.value)} name={expense.id} onChange={e => toggleRadio(e)} checked={isChecked.some((item: any) => item.name == expense.id)} />
                  </label>
                </div>
              </div>
            )
          })
        }
      </div>
    </li>
  )
}

export default TotalExpensesListItem
{/* <div>
<input type="checkbox" value='radio1' name='rad1' onChange={e => toggleRadio(e)} checked={isChecked.some((item: any) => item.name === 'rad1')} />
<input type="checkbox" value='radio2' name='rad2' onChange={e => toggleRadio(e)} checked={isChecked.some((item: any) => item.name === 'rad2')} />
<input type="checkbox" value='radio3' name='rad3' onChange={e => toggleRadio(e)} checked={isChecked.some((item: any) => item.name === 'rad3')} />
<button onClick={reset}>click</button>
</div> */}