
//Components
import TotalExpensesList from './TotalExpensesList';
import TotalDisplay from './TotalDisplay';
import Chart from './Chart';
import TopButtons from './TopButtons';
//Internal Lib
import { getTotalAmountExpenses, getPreviousMonthTotalAmountExpenses } from '@lib/prisma/expenses'
import { getCategoriesWithExpenses } from '@lib/prisma/expenses_by_category'
//Styles
import s from '@styles/Pages/_StatsPage.module.scss'

export const dynamic = 'force-dynamic'


const StatsPage = async () => {
  const categoriesWithExpenses = await getCategoriesWithExpenses();
  const totalAmountExpenses = await getTotalAmountExpenses();
  const previousMonthTotalAmountExpenses = await getPreviousMonthTotalAmountExpenses();

  // console.log('///////////////////////////////////start')
  // console.dir(categoriesWithExpenses, {depth: null})
  // console.log('///////////////////////////////////finish')
  return (
    <section className={s.stats_page}>
      <TopButtons/>
      <TotalDisplay totalAmountExpenses={totalAmountExpenses} previousMonthTotalAmountExpenses={previousMonthTotalAmountExpenses} />
      <Chart categoriesWithExpenses={categoriesWithExpenses} />
      <TotalExpensesList categoriesWithExpenses={categoriesWithExpenses} />
    </section>
  )
}
export default StatsPage
