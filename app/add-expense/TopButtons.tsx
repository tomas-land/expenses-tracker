"use client"
//react
import Link from 'next/link';
//Components
import s from '@styles/Components/_TopButtons.module.scss';
//Icons
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';


const TopButtons = () => {
  return (
    <div className={s.top_btns}>
      <Link href='/' className={`${s.back_btn} ${s.btn}`}><MdOutlineKeyboardArrowLeft /></Link>
      <Link href='#' onClick={(e)=> e.preventDefault()} className={s.btn} ><HiOutlineDotsVertical /></Link>
    </div>
  )
}

export default TopButtons;