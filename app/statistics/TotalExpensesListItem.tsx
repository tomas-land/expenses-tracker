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

  
  // const date:any = dayjs("2023-02-08").unix();
  
  // const currentMonthExpenses = expenses.filter((category:any) => {
  //   // return category.CategoriesOnExpenses.every((coe:any) => {
  //     //   // return coe.categoryId === 1
  //     //   return coe.Expense.createdAt > '2023-02-08T08:32:42.766Z';
  //     //   // return dayjs(coe.Expense.createdAt).unix() > dayjs("2023-02-08").unix();
  //     //   // return coe.categoryId === 7
  //     return category.assignedAt > "2023-02-04T00:27:50.726Z"
  //   });
    const totalAmountByCategory = expenses?.map(( expense : any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);
  //   // category.forEach(element => {
  
  //   //   const exp[] = 
  //   // });
  // });
  // const exp = categoryWithExpenses.map((category:any)=>{
  // return category.id === 1 
  // })
  // console.log(dayjs().toISOString())


  // console.dir(res, {depth: null})
  //  console.dir(categoryWithExpenses, {depth: null})
  // console.log('2023-02-04T07:30:54.086Z' > '2023-02-09T08:32:42.766Z');
  // console.log(new Date(date).getTime());
  // console.dir(res, {depth: null});
  // console.log(date);
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
        {expenses?.map((expense : any) => {
          return (
            <div className={s.sub_item} key={expense.id}>
              <div className={s.category_and_desc}>
                <div>{name}</div>
                <div>{expense.desc}</div>
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