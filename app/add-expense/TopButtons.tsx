"use client"

import s from '@styles/Components/_TopButtons.module.scss';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';


const TopButtons = () => {
  const router = useRouter()
  return (
    <div className={s.top_btns}>
      <button type="button" onClick={() => router.replace('/')} className={`${s.back_btn} ${s.btn}`} ><MdOutlineKeyboardArrowLeft /></button>
      <button type="button" className={s.btn} ><HiOutlineDotsVertical/></button>
    </div>
  )
}

export default TopButtons;