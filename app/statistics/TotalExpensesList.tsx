"use client"

import React from 'react'
import s from '@styles/Components/_TotalExpensesList.module.scss'
import TotalExpensesListItem from './TotalExpensesListItem';
import { useGlobalContext } from "@context/context"

const TotalExpensesList = ({ categoryWithExpenses }: any) => {

  //   const totalAmountByCategoryList = Array.from(categoryAmountList.reduce(
  //     (m: any, { category, amount }: any) => m.set(category.name, (m.get(category.name) || 0) + amount), new Map
  //   ), ([category, amount]) => ({ category, amount }));

  //   const totalExpenses = Array.from(categoryWithExpenses.reduce(
  //     (m: any, { name, expense }: any) => m.set(name, (m.get(name) || 0) + expense), new Map
  //   ), ([name, amount]) => ({ name, amount }));
  // console.log(totalExpenses)
  // console.log(categoryWithExpenses)
  return (
    <>
      <h4 className={s.title} >Šį mėnesį išleista</h4>
      <ul className={s.list}>
        {categoryWithExpenses.map(({ id, name, expenses }: any) => {
          return (
            <TotalExpensesListItem key={id} name={name} expenses={expenses} />
          )
        })}
      </ul>
    </>

  )
}

export default TotalExpensesList