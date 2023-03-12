"use client"

import s from '@styles/Components/_TopButtons.module.scss';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardArrowLeft, MdOutlineEuro } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';


const TopButtons = () => {
  const router = useRouter()
  return (
    <div className={s.top_btns}>
      <button type="button" onClick={() => router.replace('/')} className={`${s.back_btn} ${s.btn}`} ><MdOutlineKeyboardArrowLeft /></button>
      {/* <Link href="/add-expense"><button className={`${s.dots_btn} ${s.btn}`} ><HiOutlineDotsVertical /></button></Link> */}
    </div>
  )
}

export default TopButtons;