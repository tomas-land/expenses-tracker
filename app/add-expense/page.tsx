"use client"
import React, { useState } from 'react'
import s from '@styles/_AddExpense.module.scss'
// import { useFormik } from 'formik'
// import { createExpense } from "@lib/prisma/expenses";




const AddExpense = () => {
  // const { expenses } = await getExpenses();

  // async function createExp(data: any) {
  //   const settings = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       body: JSON.stringify(data),
  //     }
  //   };
  //   try {
  //     await fetch(`http://localhost:3001/api/expenses`, settings)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const formik = useFormik({
  //   initialValues: {
  //     amount: 0,
  //     title: 'default',
  //     expensesCategoryID: 1,
  //   },
  //   onSubmit: values => {
  //     createExp(values);
  //   },
  // });
  //////////////////////////////////////////////////////////
  //   const handleSubmit = async (event:any) => {
  //     // Stop the form from submitting and refreshing the page.
  //     event.preventDefault()

  //     // Get data from the form.
  //     const data = {
  //       amount: event.target.amount.value,
  //       title: event.target.title.value,
  //       expensesCategoryID: event.target.expensesCategoryID.value
  //     }
  // console.log(data);
  //     // Send the data to the server in JSON format.
  //     const JSONdata = JSON.stringify(data)

  //     // API endpoint where we send form data.
  //     const endpoint = '/api/expenses'

  //     // Form the request for sending data to the server.
  //     const options = {
  //       // The method is POST because we are sending data.
  //       method: 'POST',
  //       // Tell the server we're sending JSON.
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // Body of the request is the JSON data we created above.
  //       body: JSONdata,
  //     }

  //     // Send the form data to our forms API on Vercel and get a response.
  //     const response = await fetch(endpoint, options)

  //     // Get the response data from server as JSON.
  //     // If server returns the name submitted, that means the form works.
  //     const result = await response.json()
  //     alert(`Is this your full name: ${result.data}`)
  //   }
  ////////////////////////////////////////
  const [title, setTitle] = useState('t8');
  const [amount, setAmount] = useState(88);
  const [expensesCategoryID, setExpensesCategoryID] = useState(1);


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
        console.log('ee')
        // await Router.push("/drafts");
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" name="expensesCategoryID" placeholder="expensesCategoryID" value={expensesCategoryID} onChange={(e) => setExpensesCategoryID(e.target.value)} />
        <input type="number" name="amount" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /> */}

      <button type="submit">Submit</button>
    </form>
    //   <form onSubmit={handleSubmit}>

    //   <input type="number"  name="amount" required value='555' />

    //   <input type="text"  name="title" required value='def' />

    //   <input type="number" name="expensesCategoryID" required value='1'/>

    //   <button type="submit">Submit</button>
    // </form>
    // <form onSubmit={formik.handleSubmit}>

    //   <input
    //     id="amount"
    //     name="amount"
    //     type="number"
    //     onChange={formik.handleChange}
    //     value={formik.values.amount}
    //   />
    //   <input
    //     id="title"
    //     name="title"
    //     type="text"
    //     onChange={formik.handleChange}
    //     value={formik.values.title}
    //   />
    //   <input
    //     id="expensesCategoryID"
    //     name="expensesCategoryID"
    //     type="number"
    //     onChange={formik.handleChange}
    //     value={formik.values.expensesCategoryID}
    //   />

    //   <button type="submit">Submit</button>
    // </form>
  );

  // return (
  // <div className={s.add_expense}>
  //   <h2>Pridėkite išlaidą</h2>
  //   <form className={s.form}>
  //     <input type="text"  placeholder='0'/>

  //     <select name="" id="" > 
  //     <option style={{display:'none'}} selected>Kategorija</option>
  //     <option  value="" >Maistas</option>
  //     <option  value="" >Kuras</option>
  //     </select>

  //     <select name="" id=""></select>
  //     <select name="" id=""></select>
  //     <button type='submit'>IŠSAUGOTI</button>
  //   </form>
  // </div>


}
export default AddExpense