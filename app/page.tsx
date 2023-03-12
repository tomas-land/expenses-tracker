import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';
import { getExpensesWithCategory } from '@lib/prisma/expenses'
import { iExpense } from '@lib/interfaces'


// const getExpensesWithCategoryDB = (): Promise<iExpense[]> => {
//   const data = getExpensesWithCategory()
//   return data
// }

const Home = async () => {
  // const expensesWithCategory = await getExpensesWithCategoryDB();
  return (
    <section >
      <BalanceDisplay />
      <ExpensesList />
    </section>
  )
}

export default Home
