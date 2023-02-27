"use client"

import { IoMdCloseCircle } from 'react-icons/io'
import s from '@styles/Components/Modal/_ModalAddCategory.module.scss'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';


const ModalAddCategory = ({ setIsModalOpen }: any) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } }: any = useForm();

  const createNewCategory = async (categoryName: any) => {
    try {
      await fetch(`/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryName),
      });
      setIsModalOpen(false)
      router.refresh();

    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className={s.modal_add_category}>
      <div className={s.modal_overlay}>
        <div className={s.modal}>
          <form onSubmit={handleSubmit(createNewCategory)}>
            <div className={s.header}>
              <div className={s.title}>Pridėtį kategoriją :</div>
              <button className={s.close_btn} onClick={() => setIsModalOpen(false)} ><IoMdCloseCircle /></button>
            </div>
            <div className={s.modal_body}>
              <input type="text" className={s.input} placeholder="Kategorijos pavadinimas..." autoComplete='off' {...register("categoryName", {
                maxLength: 22
              })} />
              <span className={s.error}>
                {errors.categoryName && errors.categoryName.type === "maxLength" && <span>Kategorijos pavdinimas neturi viršyti 22 simbolių !</span>}
              </span>
            </div>
            <div className={s.modal_footer}>
              <button className={s.submit_btn} type='submit' >IŠSAUGOTI</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalAddCategory