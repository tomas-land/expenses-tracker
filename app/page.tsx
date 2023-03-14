import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';
import { getExpensesWithCategory } from '@lib/prisma/expenses'
import { iExpense } from '@lib/interfaces'
//react
//Components
//Internal Lib
//External Lib
//Interfaces
//Styles
//Icons


const Home = async () => {
  return (
    <section >
      <BalanceDisplay />
      <ExpensesList />
    </section>
  )
}

export default Home
