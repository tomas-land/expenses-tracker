"use client"

import React from 'react'
import { useState } from 'react'
import s from '@styles/Components/Modal/_Modal.module.scss'
import { IoMdCloseCircle } from 'react-icons/io'
import { useGlobalContext } from "@context/context"


const Modal = ({ children, title }: any) => {
  // const { setIsModalOpen } = useGlobalContext();
  return (
    <div className={s.modal_overlay}>
      {/* <div className={s.modal}>
        <div className={s.header}>
          <div className={s.title}>{title}</div>
          <button className={s.close_btn} onClick={() => setIsModalOpen(false)} ><IoMdCloseCircle /></button>
        </div>
        <div className={s.modal_body}>
          {children}
        </div>
        <div className={s.modal_footer}>
          {children}
        </div>
      </div> */}
    </div>
  )
}

export default Modal