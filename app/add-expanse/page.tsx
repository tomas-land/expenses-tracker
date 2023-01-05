"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


const AddExpanse = () => {

  const [title, setTitle] = useState("dd");
  const [amount, setAmount] = useState(777);
  const [expensesCategoryID, setExpensesCategoryID] = useState(1);
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
   
    if (title && amount && expensesCategoryID) {
      try {
        const body = { title, amount, expensesCategoryID };
        await fetch(`/api/expenses`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log('da');
        await router.push("/");
      } catch (error) {
        console.error(error);
      }
    }
  }
    return (
      <form onSubmit={handleSubmit}>
        <button type='submit'>submit</button>
      </form>
    )
  }

  export default AddExpanse