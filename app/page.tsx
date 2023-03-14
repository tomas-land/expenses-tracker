//Components
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';
//Internal Lib
import { getExpensesWithCategory } from '@lib/prisma/expenses'


const Home = async () => {
  return (
    <section >
      <BalanceDisplay />
      <ExpensesList />
    </section>
  )
}

export default Home
