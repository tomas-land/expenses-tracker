"use client"

import { MdOutlineKeyboardArrowLeft, MdOutlineEuro } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import s from '@styles/Components/_TopButtons.module.scss'

const TopButtons = () => {

  const router = useRouter()
  return (
    <div className={s.top_btns}>
      <button onClick={() => router.back()} className={s.btn} ><MdOutlineKeyboardArrowLeft /></button>
      <button className={s.btn} ><IoIosAdd /></button>
    </div>
  )
}

export default TopButtons
