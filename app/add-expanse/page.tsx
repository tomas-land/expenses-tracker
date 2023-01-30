
import React from 'react'
import AddExpenseForm from './AddExpenseForm'

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';


import { getExpenseCategories } from '@lib/prisma/categories'

// export const dynamic = 'force-dynamic'

async function getData() {
  const expenseCategories = await getExpenseCategories()
  return expenseCategories;
}

const AddExpansePage = async () => {
  const { expenseCategories } = await getData();

  return (
    <section>
      <AddExpenseForm expenseCategories={expenseCategories}/>
    </section>
  )
}

export default AddExpansePage

