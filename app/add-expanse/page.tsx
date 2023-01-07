"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import s from '@styles/_AddExpense.module.scss'


const AddExpanse = () => {
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      amount: 99,
      title: 'def',
      expensesCategoryID: 1
    }
  });
  const onSubmit = async ({ title, amount, expensesCategoryID }: any) => {
    try {
      const body = { title, amount, expensesCategoryID };
      await fetch(`/api/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // refreshData();
      router.push("/");
      // {/* @ts-expect-error Server Component */ }
      // // router.replace(router.asPath);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={s.add_expense}>
      { /* "hand leSubmit" will validate your inputs before invoking "onSubmit" */}
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder='Amount' type={'number'} {...register("amount")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder='Title' {...register("title", { required: true })} />

        <input placeholder='category' {...register("expensesCategoryID", { required: true })} />
        {/* errors will return when field validation fails */}
        {/* {errors.expensesCategoryID && <span>This field is required</span>} */}
        {/* <select {...register("expensesCategoryID")} placeholder='category' >
        <option value="female">Maistas</option>
        <option value="male">Kuras</option>
      </select> */}

        <input type="submit" />
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