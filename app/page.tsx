import s from '@styles/Pages/_Home.module.scss'
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';
import { getExpensesWithCategory } from '@lib/prisma/expenses'
import { iExpense } from '@lib/interfaces'

export const dynamic = 'force-dynamic'

// const getExpensesWithCategoryDB = (): Promise<iExpense[]> => {
//   const data = getExpensesWithCategory()
//   return data
// }

const Home = async () => {
  // const expensesWithCategory = await getExpensesWithCategoryDB();
  return (
    <section className={s.home}>
      <BalanceDisplay />
      <ExpensesList />
    </section>
  )
}

export default Home
