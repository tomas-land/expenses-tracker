"use client"

import React from 'react'
import s from '@styles/Components/_ExpensesListItem.module.scss'
import { useRouter } from 'next/navigation';
import { MdOutlineEuro } from 'react-icons/md'
import { GrFormDown } from 'react-icons/gr'
import { ImBin } from 'react-icons/im'
import { useState } from 'react'
import Moment from 'moment';


const ExpensesListItem = ({ expense }: any) => {
  const router = useRouter()
  const { id, amount, desc, categories, createdAt } = expense
  const [showExtraInfo, setShowExtraInfo] = useState(false)

  const toggleExtraInfo = () => {
    setShowExtraInfo((prev) => !prev)
  }
  const deleteExpense = async (id: number) => {
    try {
      const body = id;
      await fetch(`/api/expenses`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }
  console.log(expense)
  return (
    <li className={s.list_item}>
      <div>
        <button className={s.toggle_btn} onClick={toggleExtraInfo}><GrFormDown /></button>
      </div>
      <div className={s.amount}>-<span>{amount}</span><MdOutlineEuro color='gray' size={13} className={`${showExtraInfo ? s.rotate_up : null}`} /></div>
      <div className={`${s.extra_info} ${showExtraInfo && s.open}`}>
        {desc?.length > 0 && <div className={s.desc}>{desc}</div>}
        {/* <div className={s.date}>{Moment(createdAt).format('YYYY-MM-DD H:mm')}</div> */}
        <ImBin size={13} className={s.delete_btn} onClick={() => deleteExpense(id)} />
      </div>
    </li>
  )
}

export default ExpensesListItem

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