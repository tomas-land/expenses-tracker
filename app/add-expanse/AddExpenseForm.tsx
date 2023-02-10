"use client"

import React, { use, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import s from '@styles/Components/_AddExpenseForm.module.scss'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { iCategory } from '@lib/interfaces';

const AddExpenseForm = ({ expenseCategories }: any) => {
  console.log(expenseCategories);
  const router = useRouter()
  const { register, handleSubmit, setValue, setError, getValues,clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      amount: '',
      desc: '',
      categoryID: 0
    }
  });
  const categoryID = getValues('categoryID');
  const onSubmit = async ({ categoryID, amount, desc }: any) => {
    // console.log(amount, categoryID, desc);
    if (categoryID === 0) {
      setError("categoryID", { message: "Pasirinkite kategoriją" });
      return;
    }
    try {
      const body = { amount, categoryID, desc };
      await fetch(`/api/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.top_btns}>
        <Link href="/"><button className={s.back_btn} ><MdOutlineKeyboardArrowLeft /></button></Link>
        <Link href="/"><button className={s.back_btn} ><IoIosAdd /></button></Link>
      </div>
      <div className={s.inputs}>
        <input type="number" className={s.amount_input} placeholder='0' autoComplete='off' {...register("amount", {
          valueAsNumber: true,
          required: "Privalote įvesti sumą !",
          // pattern: {
          //   value: /^[0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //   message: "Naudokite tik skaičius"
          // }
        })} />
        <span className={s.error}>
          {errors.amount && errors.amount.message}
        </span>
        <div className={s.extra_info}>
          <input type="text" placeholder='Įveskite papildomą informaciją...' autoComplete='off' {...register("desc", {
            maxLength: 22
          })} />
        </div>
        <span className={s.error}>
          {errors.desc && errors.desc.type === "maxLength" && <span>Aprašymas neturi viršyti 22 simbolių !</span>}
        </span>
      </div>
      <div className={s.title}>Pasirinkite kategoriją</div>
      <div className={s.category_btns}>
        {expenseCategories?.map(({ id, name }: iCategory) => {
          return (
            <input type='button' key={id} className={s.btn} onClick={() => {clearErrors("categoryID");setValue("categoryID", id)}} defaultValue={name} />
          )
        })}
      </div>
      <span className={s.error}>
        {errors.categoryID && <p>{errors.categoryID.message}</p>}
      </span>

      <button className={s.submit_btn} type='submit'>IŠSAUGOTI</button>
    </form>
  )
}

export default AddExpenseForm
