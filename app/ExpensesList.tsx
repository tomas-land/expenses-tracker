"use client"

import React from 'react'
import s from '@styles/Components/_ExpensesList.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import ExpensesListItem from './ExpensesListItem';
import { iExpense } from '@lib/interfaces';
// import { useSWRrequest } from '@lib/hooks/useSWRrequest';
import useSWR from 'swr'

// interface iProps {
//   data: iExpense[],
//   error: string
// }

const ExpensesList = () => {
  // const { data: expensesWithCategory, error }= useSWRrequest()
  const { data: expensesWithCategory, error } = useSWR('/api/expenses')
  if (!expensesWithCategory) return <div>Loading...</div>;
  if (error) return <div>Fail to Load Data</div>;
  // const router = useRouter()
  // useEffect(() => {
  //   router.refresh()
  // }, [router])

  return (
    <div className={s.expenses_list}>
      <h3>Paskutiniai atsiskaitymai</h3>
      <ul className={s.list}>
        {expensesWithCategory?.map((expense: any) => {
          return (
            <ExpensesListItem key={expense.id} expense={expense} />
          )
        })}
      </ul>
    </div>
  )
}
export default ExpensesList

/* <Box display={"flex"} justifyContent={"space-between"} pt={'1.5rem'}>
          <Typography fontSize={'0,5rem'} sx={{ color: 'textColorDarkGray', fontWeight: '700' }}>Paskutinės transakcijos</Typography>
        </Box>
        <Grid container rowGap={2} justifyContent={'center'} pt={'1rem'} >
         {/* {expenses?.map(({ id, title, amount, desc }) => {
            return (
              <Grid item xs={12} key={id} display={'flex'} justifyContent={'space-between'} p={'1rem'} bgcolor={'white'} borderRadius={'1rem'} sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                <Box>icon</Box>
                <Box>{title}-{amount}</Box>
              </Grid>
            )
          })} */