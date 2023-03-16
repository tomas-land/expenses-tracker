//Components
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';


const Home = async () => {
  return (
    <section >
      <BalanceDisplay />
      <ExpensesList />
    </section>
  )
}

export default Home
