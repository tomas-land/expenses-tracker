"use client"

//react
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
//Components
import ModalAddCategory from '@app/add-expense/ModalAddCategory';
//Internal Lib
import { useExpensesSWR } from '@lib/hooks/useSWRrequest';
import { mutate } from 'swr';
//External Lib
import { useForm } from "react-hook-form";
//Interfaces
import { iCategory } from '@lib/interfaces';
//Styles
import s from '@styles/Components/_AddExpenseForm.module.scss'
//Icons
import { BsPlusCircle } from 'react-icons/bs';

interface iProps {
  categories: iCategory[];
}
interface iFormData {
  amount: string;
  desc: string;
  categoryID: number;
}

const AddExpenseForm = ({ categories }: iProps) => {
  const [expensesState, setExpensesState] = useState<any>([]);
  const { expenses, mutate, error, isLoading }: any = useExpensesSWR();
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
  const createNewExpense = async ({ categoryID, amount, desc }: iFormData) => {
    // console.log(amount, categoryID, desc);
    if (categoryID === 0) {
      setError("categoryID", { message: "Pasirinkite kategoriją" });
      return;
    }
    try {
      const body = { amount, categoryID, desc, id: 800 };
      await fetch(`/api/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      mutate();
      router.replace('/');
      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(createNewExpense)}>
        <div className={s.inputs}>
          <input type="number" className={s.amount_input} placeholder='0' autoComplete='off' {...register("amount", {
            valueAsNumber: true,
            required: "Privalote įvesti sumą !",
            // pattern: {
            //   value: /^[0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //   message: "Naudokite tik skaičius"
            // }
          })} />
          <div className={s.error}>
            {errors.amount && errors.amount.message}
          </div>
          <div className={s.extra_info}>
            <input type="text" placeholder='Įveskite papildomą informaciją...' autoComplete='off' {...register("desc", {
              maxLength: 22
            })} />
          </div>
          <div className={s.error}>
            {errors.desc && errors.desc.type === "maxLength" && <span>Aprašymas neturi viršyti 22 simbolių !</span>}
          </div>
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
        <div className={s.error}>
          {errors.categoryID && <span>{errors.categoryID.message}</span>}
        </div>
        <button className={s.submit_btn} type='submit'>IŠSAUGOTI</button>
      </form>
      {
        isModalOpen ? <ModalAddCategory setIsModalOpen={setIsModalOpen} /> : null
      }
    </>
  )
}

export default AddExpenseForm
