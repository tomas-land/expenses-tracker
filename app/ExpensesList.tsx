"use client"

import React from 'react'
import s from '@styles/Components/_ExpensesList.module.scss'
import ExpensesListItem from './ExpensesListItem';
import useSWR from 'swr'
import { useExpensesSWR } from '@lib/hooks/useSWRrequest';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
// interface iProps {
//   data: iExpense[],
//   error: string
// }

const ExpensesList = () => {


const { expenses, mutate, error, isLoading }: any = useExpensesSWR();
  // const router = useRouter()
  // useEffect(() => {
  //   router.refresh()
  // }, [router])

  return (
    <div className={s.expenses_list}>
      <h3>Paskutiniai atsiskaitymai</h3>
      <ul className={s.list}>
        {/* {isLoading ? <Skeleton height={50} className={s.skeleton} count={10} highlightColor={'#c8c8c9'} /> : null} */}
        {expenses?.map((expense: any) => {
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