"use client"

import React, { use, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import Link from 'next/link';

import s from '@styles/Components/_AddExpenseForm.module.scss'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

const AddExpenseForm = ({ expenseCategories }: any) => {
  const [color, setColor] = useState('')
  const router = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      amount: '',
      title: 'def',
      expensesCategoryID: 0
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
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  // const options = [
  //   { value: 1, label: 'Maistas' },
  //   { value: 2, label: 'Kuras' },
  //   { value: 3, label: 'Safkis' },
  //   { value: 4, label: 'Kita' },
  //   { value: 5, label: 'Vaistai' },
  //   { value: 6, label: 'Senukai' },
  //   { value: 7, label: 'Darbas' },
  //   { value: 8, label: 'Mokesčiai' },
  //   { value: 9, label: 'Lizingas' },
  // ]
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.top_btns}>
        <Link href="/"><button className={s.back_btn} ><MdOutlineKeyboardArrowLeft /></button></Link>
        <Link href="/"><button className={s.back_btn} ><IoIosAdd /></button></Link>
      </div>
      <div className={s.inputs}>
        {/* //Amount */}
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

        {/* // title  */}
        <input defaultValue={'def'} style={{ display: "none" }}  {...register("title", {
          required: true
        })} />
      </div>
      <div className={s.category_btns}>
        {expenseCategories?.map(({ id, name }: any) => {
          return (
            <input type='button' key={id} className={s.btn} onClick={() => setValue("expensesCategoryID", id)} defaultValue={name} />
          )
        })}
      </div>
      <button className={s.submit_btn} type='submit'>IŠSAUGOTI</button>
    </form>
  )
}

export default AddExpenseForm

{/* <select {...register("expensesCategoryID", {
            required: true,
            valueAsNumber: true
          })}>
            <option value="" disabled style={{ display: 'none' }}>Kategorija</option>
            <option value="1">Maistas</option>
            <option value="2">Kuras</option>
            <option value="3">Safkis</option>
            <option value="4">Kita</option>
            <option value="5">Vaistai</option>
            <option value="6">Senukai</option>
            <option value="7">Darbas</option>
            <option value="8">Mokesčiai</option>
            <option value="9">Lizingas</option>
          </select> */}

{/* <Select
          
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? 'white' : 'white',
                    borderColor: state.isFocused ? 'white' : 'white',
                    // backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '1rem',
                    padding: '0.5rem'
                  }),
                }}
                options={options} className={s.select} /> */}