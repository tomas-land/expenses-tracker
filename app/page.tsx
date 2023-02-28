import s from '@styles/Pages/_Home.module.scss'
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';
import { getExpensesWithCategory } from '@lib/prisma/expenses'


const getExpensesWithCategoryDB = async () => {
  const data = await getExpensesWithCategory()
  return data
}

const Home = async () => {
  const expensesWithCategory = await getExpensesWithCategoryDB();
  return (
    <section className={s.home}>
      <BalanceDisplay expensesWithCategory={expensesWithCategory} />
      {/* <ExpensesList expensesWithCategory={expensesWithCategory} /> */}
    </section>
  )
}

export default Home
