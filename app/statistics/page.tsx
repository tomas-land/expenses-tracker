import React from 'react'
import Link from 'next/link'
import s from '@styles/Pages/_StatsPage.module.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineEuro } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { getTotalAmountExpenses, getPreviousMonthTotalAmountExpenses } from '@lib/prisma/expenses'
import { getCategoriesWithExpenses } from '@lib/prisma/expenses_by_category'
import TotalExpensesList from './TotalExpensesList';
import TotalDisplay from './TotalDisplay';
import Chart from './Chart';

export const dynamic = 'force-dynamic'

async function getCategoriesWithExpensesDB() {
  const categoryWithExpenses = await getCategoriesWithExpenses()
  return categoryWithExpenses;
}
async function getTotalAmountExpensesDB() {
  const totalAmountExpenses = await getTotalAmountExpenses()
  return totalAmountExpenses;
}
async function getPreviousMonthTotalAmountExpensesDB() {
  const totalAmountExpenses = await getPreviousMonthTotalAmountExpenses()
  return totalAmountExpenses;
}

const StatsPage = async () => {
  const categoriesWithExpenses = await getCategoriesWithExpensesDB();
  const totalAmountExpenses = await getTotalAmountExpensesDB();
  const previousMonthTotalAmountExpenses = await getPreviousMonthTotalAmountExpensesDB();

  // console.log('///////////////////////////////////start')
  // console.dir(categoriesWithExpenses, {depth: null})
  // console.log('///////////////////////////////////finish')
  return (
    <section className={s.stats_page}>
      <div className={s.top_btns}>
        <Link href="/"><button className={s.back_btn} ><MdOutlineKeyboardArrowLeft /></button></Link>
        <Link href="/"><button className={s.back_btn} ><IoIosAdd /></button></Link>
      </div>
      <TotalDisplay totalAmountExpenses={totalAmountExpenses} previousMonthTotalAmountExpenses={previousMonthTotalAmountExpenses} />
      <Chart categoriesWithExpenses={categoriesWithExpenses} />
      <TotalExpensesList categoriesWithExpenses={categoriesWithExpenses} />
    </section>
  )
}

export default StatsPage
