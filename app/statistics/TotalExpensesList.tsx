import React from 'react'
import s from '@styles/Components/_TotalExpensesList.module.scss'

import { MdOutlineEuro } from 'react-icons/md';
import { useState } from 'react';



const TotalExpensesList = ({ totalFoodExpenses }: any) => {
  // const totalFoodExpenses = totalFoodExpenses.map((item:any) => item.amount).reduce((prev:number, curr:number) => prev + curr, 0);
  //  console.log(totalFoodExpenses._sum.amount)
  console.log(totalFoodExpenses[0].category.name)
  const res = Array.from(totalFoodExpenses.reduce(
    (m: any, { category, amount }: any) => m.set(category.name, (m.get(category.name) || 0) + amount), new Map
  ), ([category, amount]) => ({ category, amount }));
  console.log(res);

  return (
    <ul className={s.list}>
      <h4 className={s.title} >Šį mėnesį išleista</h4>
      <hr />
      {res?.map(({ category, amount }: any) => {
        return (
          <li className={s.list_item} key={category}>
            <div>{category}</div>
            <div className={s.amount}>-<span>{amount} </span><MdOutlineEuro color='gray' size={15} /></div>
            {/* <div>{createdAt.toString()}</div> */}
          </li>
        )
      })}
    </ul>
  )
}

export default TotalExpensesList