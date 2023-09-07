'use client';

import s from '@styles/Components/_TopButtons.module.scss';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Link from 'next/link';

const TopButtons = () => {
  const router = useRouter();
  return (
    <div className={s.top_btns}>
      <Link href={'/statistics'} className={`${s.back_btn} ${s.btn}`}>
        <MdOutlineKeyboardArrowLeft />
      </Link>
      <button type="button" className={s.btn}>
        <HiOutlineDotsVertical />
      </button>
    </div>
  );
};

export default TopButtons;