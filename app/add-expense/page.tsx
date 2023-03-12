import React from 'react'
import AddExpenseForm from './AddExpenseForm'
import { getCategories } from '@lib/prisma/categories'
import { iCategory } from '@lib/interfaces'
import TopButtons from './TopButtons'

export const dynamic = 'force-dynamic'

async function getCategoriesDB() {
  const categories = await getCategories()
  return categories;
}

const AddExpansePage = async () => {
  const categories = await getCategoriesDB();

  return (
    <section>
      <TopButtons/>
      <AddExpenseForm categories={categories} />
    </section>
  )
}

export default AddExpansePage

