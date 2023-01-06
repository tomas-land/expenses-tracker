import React from 'react'
import s from '@styles/_ExpensesList.module.scss'
import { GiKnifeFork } from 'react-icons/gi'
import prisma from '@lib/prisma';
// import { getExpenses } from "@lib/prisma/expenses";

// const list = [
// {
//   price: "88",
//   name: "shop",
// },
// {
//   amount: "88",
//   name: "shop",
// },]
async function getData() {
  const res = await fetch('/api/expenses',{ cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
console.log(res)
  return res.json();
}
// async function getData() {
//   {/* @ts-expect-error Server Component */}
//   const expenses = await prisma.expense.findMany({
//     // include: {
//     //   category: {
//     //     select: {
//     //       name: true,
//     //     },
//     //   },
//     // },
//   });
//   return { expenses };
  
// }

const ExpensesList = async  () => {
//   const { expenses } = await getExpenses();
const {expenses}= await getData();
console.log(expenses)
  return (

    <div className={s.expenses_list}>
      <h3>Paskutiniai atsiskaitymai</h3>
      <ul className={s.list}>
        {expenses?.map(({ id, title, amount, desc, category }:any) => {
          return (
            <li className={s.list_item} key={id}>
              {/* <div>{category?.name}</div> */}
              <div>{amount}</div>
            </li>
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