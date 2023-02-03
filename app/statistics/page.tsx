import React from 'react'
import Link from 'next/link'
import s from '@styles/Pages/_StatsPage.module.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineEuro } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { getTotalAmountExpenses } from '@lib/prisma/expenses'
import { getCategoryWithExpenses } from '@lib/prisma/expenses_by_category'
import TotalExpensesList from './TotalExpensesList';
import TotalDisplay from './TotalDisplay';

async function getCategoryWithExpensesDB() {
  const categoryWithExpenses = await getCategoryWithExpenses()
  return categoryWithExpenses;
}
async function getTotalAmountExpensesDB() {
  const totalAmountExpenses = await getTotalAmountExpenses()
  return totalAmountExpenses;
}

const StatsPage = async () => {
  const  categoryWithExpenses  = await getCategoryWithExpensesDB();
  const  totalAmountExpenses  = await getTotalAmountExpensesDB(); 
  // const totalFoodExpenses = totalFoodExpenses.map((item:any) => item.amount).reduce((prev:number, curr:number) => prev + curr, 0);
// console.dir(categoryWithExpenses, {depth: null})
// console.log(categoryWithExpenses);
  return (
    <section className={s.stats_page}>
      <div className={s.top_btns}>
        <Link href="/"><button className={s.back_btn} ><MdOutlineKeyboardArrowLeft /></button></Link>
        <Link href="/"><button className={s.back_btn} ><IoIosAdd /></button></Link>
      </div>
      
      <TotalDisplay totalAmountExpenses={totalAmountExpenses} />
      <TotalExpensesList categoryWithExpenses={categoryWithExpenses} />
    </section>
  )
}

export default StatsPage

