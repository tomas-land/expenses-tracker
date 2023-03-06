import React from 'react'
import AddExpenseForm from './AddExpenseForm'
import { getCategories } from '@lib/prisma/categories'
import { iCategory } from '@lib/interfaces'



async function getCategoriesDB() {
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

