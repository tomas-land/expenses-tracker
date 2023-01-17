
import React, { useState } from 'react'
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

// "use client"

// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation';
// import { useForm } from "react-hook-form";


// const AddExpanse = () => {

//   const [title, setTitle] = useState("dd");
//   const [amount, setAmount] = useState(777);
//   const [expensesCategoryID, setExpensesCategoryID] = useState(1);
//   const router = useRouter()

//   // const refreshData = () => {

//   //   router.replace(router.asPath)
//   // };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     if (title && amount && expensesCategoryID) {
//       try {
//         const body = { title, amount, expensesCategoryID };
//         await fetch(`/api/expenses`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         });
//         console.log('da');
//         // refreshData();
//         await router.push("/");
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type='submit'>submit</button>
//     </form>
//   )
// }

// export default AddExpanse