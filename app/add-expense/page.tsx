
//Components
import AddExpenseForm from './AddExpenseForm'
import TopButtons from './TopButtons'
//Internal Lib
import { getCategories } from '@lib/prisma/categories'
//Interfaces
import { iCategory } from '@lib/interfaces'


export const dynamic = 'force-dynamic'

const AddExpansePage = async () => {
  const categories: iCategory[] = await getCategories();
  return (
    <section>
      <TopButtons />
      <AddExpenseForm categories={categories} />
    </section>
  )
}

export default AddExpansePage

