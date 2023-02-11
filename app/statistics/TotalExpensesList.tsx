"use client"

import React from 'react'
import s from '@styles/Components/_TotalExpensesList.module.scss'
import TotalExpensesListItem from './TotalExpensesListItem';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const TotalExpensesList = ({ categoriesWithExpenses }: any) => {

  const router = useRouter()
  useEffect(() => {
    router.refresh()
  }, [router])

  return (
    <>
      <h4 className={s.title} >Šį mėnesį išleista</h4>
      <ul className={s.list}>
        {categoriesWithExpenses?.map(({ id, name, expenses }: any) => {
          return (
            <TotalExpensesListItem key={id} name={name} expenses={expenses} />
          )
        })}
      </ul>
    </>
  )
}

export default TotalExpensesList