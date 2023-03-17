"use client"

//react
import { useState } from 'react'
//External Lib
import { formateDate, formateHours } from '@lib/dayJS';
import { mutate } from 'swr';
//Interfaces
import { iExpense } from '@lib/interfaces';
//Styles
import s from '@styles/Components/_ExpensesListItem.module.scss'
//Icons
import { MdOutlineEuro } from 'react-icons/md'
import { GrFormDown } from 'react-icons/gr'
import { ImBin } from 'react-icons/im'

interface iProps {
  expense: iExpense;
}

const ExpensesListItem = ({ expense }: iProps) => {

  const { id, amount, desc, category, createdAt } = expense
  const [showExtraInfo, setShowExtraInfo] = useState(false)

  const toggleExtraInfo = () => {
    setShowExtraInfo((prev) => !prev)
  }
  const deleteExpense = async (id: number) => {
    try {
      mutate('/api/expenses', data => data.filter((expense: any) => expense.id !== id), false)
      const body = id;
      await fetch(`/api/expenses`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <li className={s.list_item}>
      <div>
        <button className={s.toggle_btn} onClick={toggleExtraInfo}><GrFormDown /></button>
        {category.name}
      </div>
      <div className={s.amount}>-<span>{amount}</span><MdOutlineEuro color='gray' size={13} className={`${showExtraInfo ? s.rotate_up : null}`} /></div>
      <div className={`${s.extra_info} ${showExtraInfo && s.open}`}>
        {desc ? <div className={s.desc}>{desc}</div> : null}
        <p className={s.date}><span suppressHydrationWarning >{formateDate(createdAt)}</span><span suppressHydrationWarning>{formateHours(createdAt)}</span></p>
        <ImBin size={15} className={s.delete_btn} onClick={() => deleteExpense(id)} />
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