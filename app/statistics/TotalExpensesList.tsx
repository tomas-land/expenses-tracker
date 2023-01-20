import React from 'react'
import s from '@styles/Components/_TotalExpensesList.module.scss'

import { MdOutlineEuro } from 'react-icons/md';



const TotalExpensesList = ({ totalFoodExpenses }: any) => {
  // const totalFoodExpenses = expenses.map((item:any) => item.amount).reduce((prev:number, curr:number) => prev + curr, 0);
console.log(totalFoodExpenses)
  return (
    <ul className={s.list}>
      <h4 className={s.title} >Šį mėnesį išleista</h4>
      <hr />
      {totalFoodExpenses?.map(({ id, title, amount, desc, category, createdAt }: any) => {
        return (
          <li className={s.list_item} key={id}>
            <div>{category?.name}</div>
            <div className={s.amount}>-<span>{amount}</span><MdOutlineEuro size={15} /></div>
            {/* <div>{createdAt.toString()}</div> */}
          </li>
        )
      })}
    </ul>
  )
}

export default TotalExpensesList