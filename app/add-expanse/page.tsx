"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm,Controller } from "react-hook-form";
// import Select from "react-select";

import s from '@styles/_AddExpense.module.scss'


const AddExpanse = () => {
  const router = useRouter()

  const { register, handleSubmit,control, formState: { errors } } = useForm({
    defaultValues: {
      amount: "",
      title: 'def',
      expensesCategoryID: ""
    }
  });
  const onSubmit = async ({ title, amount, expensesCategoryID }: any) => {
    console.log(title, amount, expensesCategoryID);
    // try {
    //   const body = { title, amount, expensesCategoryID };
    //   await fetch(`/api/expenses`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
    //   router.push("/");
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <div className={s.add_expense}>
      { /* "hand leSubmit" will validate your inputs before invoking "onSubmit" */}
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder='0' {...register("amount", {
          required: true,
          valueAsNumber: true,
        })} />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input placeholder='Title' {...register("title")} /> */}

        {/* <input placeholder='category' {...register("expensesCategoryID", { required: true })} /> */}
        {/* errors will return when field validation fails */}
        {/* {errors.expensesCategoryID && <span>This field is required</span>} */}
        {/* <select {...register("expensesCategoryID")} placeholder='category' >
        <option value="Katef"  >Kategorija</option>
        <option value="1">Maistas</option>
        <option value="2">Kuras</option>
      </select> */}
        {/* <select {...register("expensesCategoryID")}>
          {options.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select> */}
         {/* <Controller
            name="department"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} isMulti options={departments} />
            )}
          /> */}
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