import React from 'react'
import Link from 'next/link'
import s from '@styles/Pages/_StatsPage.module.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineEuro } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

import TotalExpensesList from './TotalExpensesList';
import { getTotalFoodExpenses } from '../../lib/prisma/expenses_by_category'

async function getData() {
  const totalFoodExpenses = await getTotalFoodExpenses()
  return totalFoodExpenses;
}

const StatsPage = async () => {
  const  totalFoodExpenses  = await getData();
  // console.log(totalFoodExpenses)
  return (
    <section className={s.stats_page}>
      <div className={s.top_btns}>
        <Link href="/"><button className={s.back_btn} ><MdOutlineKeyboardArrowLeft /></button></Link>
        <Link href="/"><button className={s.back_btn} ><IoIosAdd /></button></Link>
      </div>
      <div className={s.total_expenses}>
        <div className={s.date}>2023-03-12</div>
        <div className={s.total}><span>- 5660</span> <MdOutlineEuro size={15} /></div>
      </div>
      <TotalExpensesList totalFoodExpenses={totalFoodExpenses} />
    </section>
  )
}

export default StatsPage

// "use client"

// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation';
// import { useForm } from "react-hook-form";


// const AddExpanse = () => {

//   const [title, setTitle] = useState("dd");
//   const [amount, setAmount] = useState(777);
//   const [expensesCategoryID, setExpensesCategoryID] = useState(1);
//   const router = useRouter()

//   // const refreshData = () => {

//   //   router.replace(router.asPath)
//   // };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     if (title && amount && expensesCategoryID) {
//       try {
//         const body = { title, amount, expensesCategoryID };
//         await fetch(`/api/expenses`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         });
//         console.log('da');
//         // refreshData();
//         await router.push("/");
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type='submit'>submit</button>
//     </form>
//   )
// }

// export default AddExpanse