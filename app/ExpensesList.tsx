import React from 'react'
import s from '@styles/_ExpensesList.module.scss'
import { GiKnifeFork } from 'react-icons/gi'

import { getExpenses } from "@lib/prisma/expenses";

// const list = [
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
// {
//   price: "88",
//   name: "shop",
// },
//   {
//     id: 1,
//     price: "88",
//     name: "shop",
//   },
//   {
//     id: 2,
//     price: "88",
//     name: "shop",
//   },
// ];

const ExpensesList = async () => {
  const { expenses } = await getExpenses();
  return (

    <div className={s.expenses_list}>
      <h3>Paskutiniai atsiskaitymai</h3>
      <ul className={s.list}>
        {expenses?.map(({ id, title, amount, desc, category }:any) => {
          return (
            <li className={s.list_item} key={id}>
              <div>{category?.name}</div>
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