"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import s from '@styles/Components/_AddExpenseForm.module.scss'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BsPlusCircle } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { iCategory } from '@lib/interfaces';
import ModalAddCategory from '@app/add-expense/ModalAddCategory';

export const dynamic = 'force-dynamic'
interface iProps {
  categories: iCategory[]
}
interface iFormData {
  amount: string;
  desc: string;
  categoryID: number;
}

const AddExpenseForm = ({ categories }: iProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  const { register, handleSubmit, setValue, setError, getValues, clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      amount: '',
      desc: '',
      categoryID: 0
    }
  });
  const categoryId = getValues('categoryID');
  const onSubmit = async ({ categoryID, amount, desc }: iFormData) => {
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
      router.push("/");
      // router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.top_btns}>
          <Link href="/"><button className={`${s.back_btn} ${s.btn}`} ><MdOutlineKeyboardArrowLeft /></button></Link>
          <Link href="/add-expense"><button className={`${s.dots_btn} ${s.btn}`} ><HiOutlineDotsVertical /></button></Link>
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
          {categories?.map(({ id, name }: iCategory) => {
            return (
              <input type='button' key={id} className={s.btn} onClick={() => { clearErrors("categoryID"); setValue("categoryID", id) }} defaultValue={name} />
            )
          })}
          <div className={`${s.new_category_btn} ${s.btn}`} onClick={() => setIsModalOpen(true)} ><BsPlusCircle /></div>
        </div>
        <span className={s.error}>
          {errors.categoryID && <span>{errors.categoryID.message}</span>}
        </span>
        <button className={s.submit_btn} type='submit'>IŠSAUGOTI</button>
      </form>
      {/* {
        isModalOpen ? <ModalAddCategory setIsModalOpen={setIsModalOpen} /> : null
      } */}
    </>
  )
}

export default AddExpenseForm
