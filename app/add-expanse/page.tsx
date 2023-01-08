"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";

import s from '@styles/_AddExpense.module.scss'


const AddExpanse = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      amount: "",
      title: 'def',
      expensesCategoryID: ""
    }
  });
  const onSubmit = async ({ title, amount, expensesCategoryID }: any) => {
    console.log(title, amount, expensesCategoryID);
    try {
      const body = { title, amount, expensesCategoryID };
      await fetch(`/api/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={s.add_expense}>
      { /* "hand leSubmit" will validate your inputs before invoking "onSubmit" */}
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className={s.inputs}>
          <input placeholder='0' {...register("amount", {
            required: true,
            valueAsNumber: true,
          })} />
          {/* <input placeholder='' {...register("amount", {
          required: true,
          valueAsNumber: true,
        })} /> */}
          <select {...register("expensesCategoryID", {
            required: true,
            valueAsNumber: true
          })}>
            <option value="" disabled style={{ display: 'none' }}>Kategorija</option>
            <option value="1">Maistas</option>
            <option value="2">Kuras</option>
            <option value="2">Darbas</option>
          </select>
        </div>
        <button type='submit'>IŠSAUGOTI</button>
      </form>
    </div>
  )
}

export default AddExpanse

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
//   //   {/* @ts-expect-error Server Component */ }
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