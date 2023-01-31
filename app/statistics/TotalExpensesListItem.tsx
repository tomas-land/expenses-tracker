"use client"

import React, { useEffect } from 'react'
import s from '@styles/Components/_TotalExpensesListItem.module.scss'

import { GrFormDown } from 'react-icons/gr';
import { MdOutlineEuro } from 'react-icons/md';
import { useState } from 'react';
import { useGlobalContext } from "@context/context"

const TotalExpensesListItem = ({ name, expenses }: any) => {

  const { totalExpenses, addExpenses } = useGlobalContext();
  const [showSubItem, setShowSubItem] = useState(false)

  const toggleSubItems = () => {
    setShowSubItem((prev) => !prev)
  }

  const totalAmountByCategory = expenses?.map(({ expense }: any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);
  // console.log(expenses)
  return (
    <li className={s.list_item} >
      <div className={s.item_header}>
        <div>
          <button className={s.toggle_btn} onClick={toggleSubItems}><GrFormDown className={`${showSubItem ? s.rotate_up : s.rotate_down}`} /></button>
          {name}
        </div>
        <div className={s.amount_radio}>
          <div className={s.amount}>- <span>{totalAmountByCategory} </span><MdOutlineEuro color='gray' size={15} /></div>
          <input type="radio" value={totalAmountByCategory} onClick={(e: any) => addExpenses(+e.target.value)} />
        </div>
      </div>

      <div className={`${s.sub_items} ${showSubItem && s.open}`}>
        {expenses?.map(({ expense }: any, index: number) => {
          return (
            <div className={s.sub_item} key={index}>
              <div className={s.category_and_desc}>
                <div>{name}</div>
                <div>desc</div>
              </div>
              <div className={s.amount_and_radio}>
                <div className={s.amount}>- <span>{expense.amount}</span> <MdOutlineEuro color='gray' size={15} /></div>
                <input type="radio" value={expense.amount} onClick={(e: any) => addExpenses(+e.target.value)} />
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