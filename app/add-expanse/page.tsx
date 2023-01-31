
import React from 'react'
import AddExpenseForm from './AddExpenseForm'

import { getExpenseCategories } from '@lib/prisma/categories'

// async function getData() {
//   const expenseCategories = await getExpenseCategories()
//   return expenseCategories;
// }

const AddExpansePage = async () => {
  // const { expenseCategories } = await getData();

  return (
    <section>
      {/* <AddExpenseForm expenseCategories={expenseCategories}/> */}
    </section>
  )
}

export default AddExpansePage

