import React from 'react'
import AddExpenseForm from './AddExpenseForm'
import { getCategories } from '@lib/prisma/categories'
import { iCategory } from '@lib/interfaces'

// export const dynamic = 'force-dynamic'

async function getCategoriesDB():Promise<iCategory[]> {
  const categories = await getCategories()
  return categories;
}

const AddExpansePage = async () => {
  const categories = await getCategoriesDB();

  return (
    <section>
      <AddExpenseForm categories={categories} />
    </section>
  )
}

export default AddExpansePage
