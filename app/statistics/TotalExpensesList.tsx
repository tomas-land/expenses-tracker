"use client"

import React, { useState } from 'react'
import s from '@styles/Components/_TotalExpensesList.module.scss'
import TotalExpensesListItem from './TotalExpensesListItem';
import { VscDebugRestart } from 'react-icons/vsc';
import { useGlobalContext } from "@context/context"


const TotalExpensesList = ({ categoriesWithExpenses }: any) => {
  const { setTotalExpenses } = useGlobalContext();

  const [isChecked, setIsChecked] = useState<any>([{ name: '', checked: false }])

  const reset = () => {
    setIsChecked([])
    setTotalExpenses(null)
  }
  return (
    <>
      <div className={s.title_btns}>
        <h4 className={s.title} >Šio mėnesio išlaidos</h4>
        <div className={s.btns}>
          <VscDebugRestart className={s.icon} size={15}
            onClick={reset}
          />
        </div>
      </div>
      <ul className={s.list}>
        {categoriesWithExpenses?.map(({ id, name, expenses }: any) => {
          return (
            <TotalExpensesListItem key={id} name={name} expenses={expenses} isChecked={isChecked} setIsChecked={setIsChecked} />
          )
        })}
      </ul>
    </>
  )
}

export default TotalExpensesList